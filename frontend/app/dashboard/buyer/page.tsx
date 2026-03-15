"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, ShoppingCart, Filter, Truck, ShieldCheck, TrendingUp, Sparkles, CheckCircle } from "lucide-react";

export default function BuyerDashboard() {
    const [committedCrops, setCommittedCrops] = useState<number[]>([]);
    const crops = [
        { id: 1, name: "Premium Wheat", region: "Punjab", qty: "20 Tons", price: "₹2,200/qtl", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=400&auto=format&fit=crop", verified: true },
        { id: 2, name: "Organic Tomatoes", region: "Maharashtra", qty: "5 Tons", price: "₹1,800/qtl", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=400&auto=format&fit=crop", verified: true },
        { id: 3, name: "Sweet Corn Cluster", region: "Telangana", qty: "15 Tons", price: "₹1,950/qtl", img: "https://images.unsplash.com/photo-1550828520-4cb496924296?q=80&w=400&auto=format&fit=crop", verified: true }
    ];

    return (
        <div className="space-y-8 text-emerald-50">
            {/* Buyer Header Banner */}
            <div className="relative w-full h-48 sm:h-64 rounded-[2.5rem] overflow-hidden shadow-lg border border-emerald-900/50 group">
                <Image
                    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2000&auto=format&fit=crop"
                    alt="Village lush crops"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051006]/90 via-[#0a1a0c]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-lg border border-emerald-500/30 backdrop-blur-md mb-2 inline-block"><Sparkles className="w-3 h-3 inline mr-1" />Verified Procurement</span>
                    <h1 className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">Buyer Ecosystem Console</h1>
                    <p className="text-emerald-200/80 font-medium">Browse verified FPO clusters, secure bulk pre-harvest commitments, and arrange fleet transport.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                {/* Main Procurement View */}
                <div className="xl:col-span-3 space-y-6">
                    {/* Filters & Search */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6 relative z-20">
                        <div className="flex-1 relative">
                            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500/50" />
                            <input
                                type="text"
                                placeholder="Search premium verified crops..."
                                className="w-full bg-[#0a1a0c]/80 border border-emerald-900/50 rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none placeholder:text-emerald-900/50 text-emerald-100 font-medium backdrop-blur-md transition-shadow"
                            />
                        </div>
                        <button
                            onClick={() => alert("Opening region filters...")}
                            className="px-6 py-4 bg-[#0a1a0c]/80 border border-emerald-900/50 rounded-2xl flex items-center gap-3 font-bold hover:bg-emerald-900/20 hover:border-emerald-500/30 transition-colors uppercase tracking-widest text-sm shadow-sm"
                        >
                            <Filter className="w-4 h-4 text-emerald-400" /> Filter Region
                        </button>
                    </div>

                    {/* Verified Crops Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {crops.map((c) => (
                            <div key={c.id} className="bg-[#051006]/60 backdrop-blur-md border border-emerald-900/50 rounded-[2rem] overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 transition-all duration-300">
                                <div className="h-48 relative overflow-hidden">
                                    <Image src={c.img} alt={c.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#051006] via-transparent to-transparent" />
                                    {c.verified && (
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-500/90 text-white text-[10px] font-bold uppercase tracking-widest rounded-md flex items-center gap-1 shadow-md">
                                            <ShieldCheck className="w-3 h-3" /> FPO Verified
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{c.name}</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">{c.region}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="p-3 bg-emerald-900/20 rounded-xl border border-emerald-900/30 text-center">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200/50 mb-1">Available</p>
                                            <p className="font-black text-emerald-50">{c.qty}</p>
                                        </div>
                                        <div className="p-3 bg-emerald-900/20 rounded-xl border border-emerald-900/30 text-center">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200/50 mb-1">Rate</p>
                                            <p className="font-black text-emerald-400">{c.price}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => {
                                            if (!committedCrops.includes(c.id)) {
                                                setCommittedCrops([...committedCrops, c.id]);
                                            }
                                        }}
                                        className={`w-full py-4 rounded-xl font-bold text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md ${committedCrops.includes(c.id) ? 'bg-emerald-800' : 'bg-emerald-600 hover:bg-emerald-500'}`}
                                    >
                                        {committedCrops.includes(c.id) ? <CheckCircle className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                                        {committedCrops.includes(c.id) ? 'Committed' : 'Pre-Commit'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                    {/* Transport Integration Panel */}
                    <div className="p-8 bg-[#0a1a0c]/80 backdrop-blur-md border border-emerald-900/50 rounded-[2rem] shadow-sm relative overflow-hidden group">
                        <Truck className="w-32 h-32 absolute -right-6 -bottom-6 text-emerald-900/30 group-hover:scale-110 transition-transform duration-700" />
                        <h3 className="text-lg font-bold flex items-center gap-3 mb-2 text-white"><Truck className="w-5 h-5 text-emerald-500" /> Auto Transport</h3>
                        <p className="text-sm text-emerald-200/60 font-medium mb-6 leading-relaxed relative z-10">Link dedicated fleet routes automatically when you pre-commit to a cluster.</p>

                        <div className="space-y-3 relative z-10">
                            <label className="flex items-center gap-3 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-xl cursor-pointer hover:bg-emerald-900/40 transition-colors">
                                <input type="radio" name="transport" className="text-emerald-500 focus:ring-emerald-500" defaultChecked />
                                <span className="font-bold text-sm text-emerald-50">Local Agri-Fleet (Recommended)</span>
                            </label>
                            <label className="flex items-center gap-3 p-4 bg-emerald-900/20 border border-emerald-900/30 rounded-xl cursor-pointer hover:bg-emerald-900/40 transition-colors">
                                <input type="radio" name="transport" className="text-emerald-500 focus:ring-emerald-500" />
                                <span className="font-bold text-sm text-emerald-200/60">Self Organized Pickup</span>
                            </label>
                        </div>
                    </div>

                    {/* Market Triggers */}
                    <div className="p-6 bg-[#051006]/80 backdrop-blur-md border border-emerald-900/30 rounded-[2rem] shadow-sm">
                        <h3 className="text-sm font-bold flex items-center gap-2 mb-4 uppercase tracking-widest text-emerald-500"><TrendingUp className="w-4 h-4 text-emerald-400" /> Price Alerts</h3>
                        <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-sm font-medium text-emerald-100">
                            Wheat prices have dipped by 1.2% in Punjab. Good time to secure bulk!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
