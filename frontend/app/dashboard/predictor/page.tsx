"use client";

import { useState } from "react";
import { BrainCircuit, Sprout, CloudRain, Droplets, Thermometer, FlaskConical } from "lucide-react";
import Image from "next/image";

export default function HarvestPredictor() {
    const [formData, setFormData] = useState({
        crop_type: "Tomato",
        temperature: 25,
        rainfall: 100,
        humidity: 60,
        nitrogen: 50
    });

    const [loading, setLoading] = useState(false);
    const [prediction, setPrediction] = useState<{ days_to_harvest: number, readiness_score: number } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const crops = ["Tomato", "Corn", "Potato", "Wheat", "Rice"];

    // Mapping crop types to beautiful Unsplash images for the UI
    const cropImages: Record<string, string> = {
        "Tomato": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop",
        "Corn": "https://images.unsplash.com/photo-1550828520-4cb496924296?q=80&w=800&auto=format&fit=crop",
        "Potato": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=800&auto=format&fit=crop",
        "Wheat": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop",
        "Rice": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
    };

    const handlePredict = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setPrediction(null);

        try {
            const response = await fetch("http://localhost:8000/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Failed to fetch prediction");
            }

            const data = await response.json();
            setPrediction(data);
        } catch {
            setError("Server Error. Ensure the ML Prediction service is running.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6 font-sans">

            {/* Header section with clean image styling */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                    <BrainCircuit className="w-10 h-10" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">AI Harvest Predictor</h1>
                    <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed">
                        Harness local environmental conditions through our Random Forest engine. Predict peak harvest periods dynamically for better market planning.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* ML Form */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <form onSubmit={handlePredict} className="space-y-6">

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                                <Sprout className="w-4 h-4 text-emerald-500" /> Active Crop Selection
                            </label>
                            <div className="relative flex items-center bg-slate-50 rounded-lg border border-slate-200 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition-colors">
                                <select
                                    value={formData.crop_type}
                                    onChange={(e) => setFormData({ ...formData, crop_type: e.target.value })}
                                    className="w-full bg-transparent p-3.5 text-slate-900 font-medium focus:outline-none appearance-none cursor-pointer"
                                >
                                    {crops.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                                <div className="absolute right-3 pointer-events-none w-8 h-8 rounded-md overflow-hidden border border-slate-200 shadow-sm">
                                    <Image
                                        src={cropImages[formData.crop_type]}
                                        alt="crop"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5 pt-2">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                                    <Thermometer className="w-4 h-4 text-slate-400" /> Temp (°C)
                                </label>
                                <input
                                    type="number"
                                    value={formData.temperature}
                                    onChange={(e) => setFormData({ ...formData, temperature: Number(e.target.value) })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                                    <CloudRain className="w-4 h-4 text-slate-400" /> Rainfall (mm)
                                </label>
                                <input
                                    type="number"
                                    value={formData.rainfall}
                                    onChange={(e) => setFormData({ ...formData, rainfall: Number(e.target.value) })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                                    <Droplets className="w-4 h-4 text-slate-400" /> Humidity (%)
                                </label>
                                <input
                                    type="number"
                                    value={formData.humidity}
                                    onChange={(e) => setFormData({ ...formData, humidity: Number(e.target.value) })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                                    <FlaskConical className="w-4 h-4 text-slate-400" /> Nitrogen
                                </label>
                                <input
                                    type="number"
                                    value={formData.nitrogen}
                                    onChange={(e) => setFormData({ ...formData, nitrogen: Number(e.target.value) })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold rounded-lg transition-colors border border-transparent shadow-sm flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Sprout className="w-5 h-5 animate-spin" />
                                    Running Models...
                                </>
                            ) : "Calculate Prediction"}
                        </button>
                        {error && <p className="text-sm font-medium text-rose-600 text-center mt-3 bg-rose-50 p-3 rounded-lg border border-rose-100">{error}</p>}
                    </form>
                </div>

                {/* Results Panel */}
                <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center min-h-[400px]">

                    {prediction && (
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={cropImages[formData.crop_type]}
                                alt={`${formData.crop_type} background`}
                                fill
                                className="object-cover opacity-[0.15]"
                            />
                        </div>
                    )}

                    <div className="relative z-10 w-full p-8 flex flex-col justify-center items-center text-center">
                        {!prediction ? (
                            <div className="text-slate-500 flex flex-col items-center">
                                <BrainCircuit className="w-16 h-16 mb-4 opacity-50" />
                                <p className="text-sm font-medium">Input environmental data to <br /> generate forecast estimates</p>
                            </div>
                        ) : (
                            <div className="w-full animate-in zoom-in-95 duration-500">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">

                                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-semibold uppercase tracking-wider">
                                        Prediction Ready
                                    </span>

                                    <div className="mt-6 mb-8">
                                        <h2 className="text-6xl md:text-7xl font-bold text-white mb-2">
                                            {prediction.days_to_harvest}
                                        </h2>
                                        <p className="text-slate-300 font-medium">Days until optimal harvest</p>
                                    </div>

                                    <div className="w-full text-left pt-6 border-t border-white/10">
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                                            Readiness Likelihood
                                        </p>
                                        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-emerald-500 transition-all duration-1000 ease-out"
                                                style={{ width: `${prediction.readiness_score}%` }}
                                            />
                                        </div>
                                        <div className="flex justify-between mt-2 text-xs font-medium text-slate-300">
                                            <span>{prediction.readiness_score}% Confidence</span>
                                            <span>100% Target</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
