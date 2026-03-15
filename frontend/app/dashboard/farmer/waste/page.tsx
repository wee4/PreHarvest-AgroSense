"use client";

import { Recycle, LeafyGreen, IndianRupee, Factory, PackagePlus, AlertCircle } from "lucide-react";

const activeListings = [
    { id: 1, type: "Tomato Stalks", amount: "500 kg", price: "₹2,500", status: "Active" },
    { id: 2, type: "Wheat Chaff", amount: "1.2 Tons", price: "₹4,800", status: "Negotiating" }
];

export default function WasteHubPage() {
    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                        <Recycle className="w-8 h-8 text-emerald-500" /> Harvest Waste Hub
                    </h1>
                    <p className="text-slate-500 dark:text-emerald-200/60 font-medium mt-1">Monetize agricultural byproducts by selling them directly to biomass/compost facilities.</p>
                </div>
                <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-widest text-xs flex items-center gap-2">
                    <PackagePlus className="w-4 h-4" /> Create Listing
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stats / Revenue */}
                <div className="md:col-span-1 space-y-6">
                    <div className="p-8 rounded-[2.5rem] border shadow-sm border-slate-200 dark:border-white/10 bg-emerald-50/50 dark:bg-emerald-500/10 h-full relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-30 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                            <IndianRupee className="w-24 h-24 text-emerald-500" />
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-center">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">YTD Byproduct Revenue</h3>
                            <div className="text-5xl font-black text-slate-900 dark:text-white mb-4">₹12.4k</div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-black/20 text-[10px] font-bold uppercase tracking-widest border border-emerald-200 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 w-max shadow-sm">
                                <LeafyGreen className="w-3.5 h-3.5" /> 3.2 Tons Recycled
                            </div>
                        </div>
                    </div>
                </div>

                {/* Listings List */}
                <div className="md:col-span-2 p-8 rounded-[2.5rem] border shadow-sm border-slate-200 dark:border-white/10 bg-white dark:bg-[#101b13]/80 relative overflow-hidden min-h-[400px]">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 tracking-tight border-b pb-4 dark:border-white/5">Active Listings</h3>

                    <div className="space-y-4">
                        {activeListings.map(listing => (
                            <div key={listing.id} className="p-5 rounded-2xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-black/20 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 bg-white dark:bg-[#0a1a0c] rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 text-emerald-500 shrink-0 shadow-sm">
                                        <LeafyGreen className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-500 transition-colors">{listing.type}</h4>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">{listing.amount}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 w-full sm:w-auto mt-2 sm:mt-0 pt-4 sm:pt-0 border-t border-slate-100 dark:border-transparent">
                                    <div className="text-left sm:text-right">
                                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Asking Price</p>
                                        <div className="font-black text-slate-900 dark:text-white">{listing.price}</div>
                                    </div>
                                    <span className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg flex items-center gap-1.5 border shadow-sm ${listing.status === 'Active' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20' : 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-500/20'}`}>
                                        <Factory className="w-3.5 h-3.5" /> {listing.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-5 border border-dashed border-slate-300 dark:border-white/20 rounded-2xl flex items-start gap-4 opacity-70 bg-slate-50/50 dark:bg-black/10">
                        <AlertCircle className="w-6 h-6 text-slate-400 mt-0.5 shrink-0" />
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-relaxed">Local biomass facilities evaluate listings every Tuesday. Make sure your waste is properly categorized (Stalks, Chaff, Leaves) and protected from rain to secure the best rates.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
