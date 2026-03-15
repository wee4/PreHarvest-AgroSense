import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
import joblib

def create_synthetic_data(n_samples=2000):
    np.random.seed(42)
    
    crops = ['Tomato', 'Corn', 'Potato', 'Wheat', 'Rice']
    base_days = {'Tomato': 80, 'Corn': 90, 'Potato': 100, 'Wheat': 120, 'Rice': 130}
    
    crop_type = np.random.choice(crops, n_samples)
    temperature = np.random.normal(25, 5, n_samples) # Average temp in C
    rainfall = np.random.normal(100, 30, n_samples) # mm per month
    humidity = np.random.normal(60, 15, n_samples) # percentage
    nitrogen = np.random.normal(50, 10, n_samples) # soil N level
    
    # Calculate days to harvest based on features
    days = []
    for i in range(n_samples):
        base = base_days[crop_type[i]]
        # Simple non-linear relationships
        temp_effect = -0.5 * (temperature[i] - 25) # Warmer -> faster, but negative if too hot
        rain_effect = -0.1 * (rainfall[i] - 100)
        n_effect = -0.2 * (nitrogen[i] - 50)
        
        # Add some random noise
        noise = np.random.normal(0, 3)
        
        total_days = base + temp_effect + rain_effect + n_effect + noise
        days.append(max(30, int(total_days))) # Minimum 30 days
        
    df = pd.DataFrame({
        'crop_type': crop_type,
        'temperature': temperature,
        'rainfall': rainfall,
        'humidity': humidity,
        'nitrogen': nitrogen,
        'days_to_harvest': days
    })
    return df

def train_model():
    print("Generating synthetic data...")
    df = create_synthetic_data()
    
    X = df.drop('days_to_harvest', axis=1)
    y = df['days_to_harvest']
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Preprocessing for categorical and numeric features
    numeric_features = ['temperature', 'rainfall', 'humidity', 'nitrogen']
    numeric_transformer = StandardScaler()
    
    categorical_features = ['crop_type']
    categorical_transformer = OneHotEncoder(handle_unknown='ignore')
    
    preprocessor = ColumnTransformer(
        transformers=[
            ('num', numeric_transformer, numeric_features),
            ('cat', categorical_transformer, categorical_features)
        ])
    
    # Create the regressor
    # Random Forest is a solid regressor for this kind of tabular data
    model = Pipeline(steps=[
        ('preprocessor', preprocessor),
        ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))
    ])
    
    print("Training Random Forest Regressor...")
    model.fit(X_train, y_train)
    
    score = model.score(X_test, y_test)
    print(f"Model R2 Score on Test Data: {score:.3f}")
    
    print("Saving model to model.joblib...")
    joblib.dump(model, 'model.joblib')
    print("Done!")

if __name__ == "__main__":
    train_model()
