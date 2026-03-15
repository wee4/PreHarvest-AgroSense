"use client";

import { Sprout, Calendar, Leaf, IndianRupee, Droplets, ArrowRight } from "lucide-react";
import Image from "next/image";

const activeCrops = [
    { id: 1, name: "Tomato Plot A", variety: "Hybrid Red", sownDate: "12 Oct 2026", area: "2.5 Acres", status: "Fruiting", health: 92, expectedYield: "4.2 Tons", expectedRevenue: "₹84,000", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=400&fit=crop" },
    { id: 2, name: "Wheat Field 1", variety: "Sonalika", sownDate: "05 Nov 2026", area: "5 Acres", status: "Vegetative", health: 85, expectedYield: "10 Tons", expectedRevenue: "₹2,12,000", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=400&fit=crop" }
];

const pastCrops = [
    { id: 3, name: "Potato Field", season: "Kharif 2025", yield: "8 Tons", revenue: "₹96,000", rating: 4.8 }
];

export default function MyCropsPage() {
    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                        <Sprout className="w-8 h-8 text-emerald-500" /> Active Cultivations
                    </h1>
                    <p className="text-slate-500 dark:text-emerald-200/60 font-medium mt-1">Manage your ongoing crops and view historical performance.</p>
                </div>
                <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-widest text-xs">
                    + Add New Crop
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeCrops.map(crop => (
                    <div key={crop.id} className="p-6 rounded-[2rem] border shadow-sm bg-white dark:bg-[#101b13]/80 dark:border-white/10 hover:-translate-y-1 transition-transform group">
                        <div className="flex gap-6 mb-6">
                            <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-inner shrink-0 text-emerald-50">
                                <Image src={crop.image} alt={crop.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold dark:text-white text-slate-900">{crop.name}</h3>
                                <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mt-1">{crop.variety}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Sown: {crop.sownDate}</span>
                                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5" /> {crop.area}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5">
                            <div>
                                <div className="flex justify-between items-end mb-2 text-xs font-bold uppercase tracking-widest">
                                    <span className="text-slate-500 dark:text-slate-400">Crop Health</span>
                                    <span className="text-emerald-500">{crop.health}%</span>
                                </div>
                                <div className="h-2 rounded-full overflow-hidden bg-slate-100 dark:bg-black/50">
                                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${crop.health}%` }} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-emerald-50 dark:bg-[#051006]/50 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                                    <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-500 mb-1">Est. Yield</div>
                                    <div className="text-lg font-black dark:text-white text-slate-900">{crop.expectedYield}</div>
                                </div>
                                <div className="p-4 bg-emerald-50 dark:bg-[#051006]/50 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                                    <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-500 mb-1">Est. Value</div>
                                    <div className="text-lg font-black dark:text-white text-slate-900">{crop.expectedRevenue}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Past Harvests</h2>
                <div className="space-y-4">
                    {pastCrops.map(crop => (
                        <div key={crop.id} className="flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl border shadow-sm bg-white dark:bg-[#0a1a0c]/50 dark:border-emerald-900/30 hover:bg-slate-50 dark:hover:bg-[#102b17]/50 cursor-pointer transition-colors group">
                            <div className="flex items-center gap-4 w-full sm:w-auto mb-4 sm:mb-0">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-[#101b13] rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/5">
                                    <Droplets className="w-6 h-6 text-emerald-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{crop.name}</h4>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-0.5">{crop.season}</p>
                                </div>
                            </div>

                            <div className="flex w-full sm:w-auto justify-between sm:justify-end gap-8 items-center">
                                <div className="text-center sm:text-right">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-0.5">Yield</p>
                                    <p className="font-black text-slate-900 dark:text-white">{crop.yield}</p>
                                </div>
                                <div className="text-center sm:text-right">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-0.5">Revenue</p>
                                    <p className="font-black text-emerald-500">{crop.revenue}</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors hidden sm:block" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}