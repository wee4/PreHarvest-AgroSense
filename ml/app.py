from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd
import uvicorn

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="HarvestSync ML Service - Harvest Readiness Predictor")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model on startup
try:
    model = joblib.load("model.joblib")
    print("Model loaded successfully.")
except Exception as e:
    model = None
    print(f"Error loading model: {e}")

class CropInput(BaseModel):
    crop_type: str
    temperature: float # Celsius
    rainfall: float    # mm per month
    humidity: float    # percentage
    nitrogen: float    # soil nitrogen level

class PredictionOutput(BaseModel):
    days_to_harvest: int
    readiness_score: float # 0 to 1 scale based on optimal conditions

@app.get("/")
def read_root():
    return {"message": "HarvestSync ML Servce is running. Use /predict to get harvest estimates."}

@app.post("/predict", response_model=PredictionOutput)
def predict_harvest(data: CropInput):
    if model is None:
        return {"error": "Model not loaded"}
    
    # Create DataFrame from input
    input_df = pd.DataFrame([{
        "crop_type": data.crop_type,
        "temperature": data.temperature,
        "rainfall": data.rainfall,
        "humidity": data.humidity,
        "nitrogen": data.nitrogen
    }])
    
    # Predict days
    predicted_days = model.predict(input_df)[0]
    days = max(1, int(predicted_days))
    
    # Calculate a simplified "Readiness Score" logic based on predicted days and inputs.
    # Typically, readiness score represents how close the crop is to optimal harvest window.
    # For now, let's just create a normalized score. If days < 10, it's highly ready.
    score = 0.0
    if days <= 0:
        score = 100.0
    elif days > 120:
        score = 0.0
    else:
        score = 100.0 - ((days / 120.0) * 100.0)
        
    return PredictionOutput(
        days_to_harvest=days,
        readiness_score=round(score, 2)
    )

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
