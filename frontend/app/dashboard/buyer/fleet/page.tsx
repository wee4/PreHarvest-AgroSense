"use client";

import { Truck, Navigation, Compass, Box, Fuel, AlertTriangle, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BuyerFleetPage() {
    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                        <Truck className="w-8 h-8 text-indigo-500" /> Incoming Fleet
                    </h1>
                    <p className="text-slate-500 dark:text-emerald-200/60 font-medium mt-1">Real-time GPS tracking and ETAs for your inbound crop procurement deliveries.</p>
                </div>
                <Link href="/dashboard/transport/routes" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-widest text-xs flex items-center gap-2">
                    <Navigation className="w-4 h-4" /> Live Map
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Simulated Fleet Card */}
                <div className="p-8 rounded-[2.5rem] border shadow-sm bg-white dark:bg-[#101b13]/80 border-slate-200 dark:border-white/10 hover:-translate-y-1 transition-transform overflow-hidden relative group">
                    <div className="absolute inset-0 z-0 mix-blend-overlay opacity-20 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-700">
                        <Image src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop" alt="map" fill className="object-cover" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Truck TS-09-XX-4201</h3>
                                <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 flex items-center gap-1.5"><Compass className="w-4 h-4" /> En-route: Kondapur to Hyd</p>
                            </div>
                            <div className="p-3 bg-indigo-50 dark:bg-black/50 text-indigo-500 rounded-xl backdrop-blur-md">
                                <Truck className="w-6 h-6 animate-bounce" />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8 mb-6">
                            <div className="flex-1 min-w-[120px] p-4 bg-slate-50 dark:bg-[#051006]/50 rounded-xl border border-slate-100 dark:border-emerald-900/30">
                                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-1 flex items-center gap-1.5"><Box className="w-3.5 h-3.5 text-indigo-400" /> Cargo</div>
                                <div className="text-lg font-black dark:text-white text-slate-900">12T Tomatoes</div>
                            </div>
                            <div className="flex-1 min-w-[120px] p-4 bg-slate-50 dark:bg-[#051006]/50 rounded-xl border border-slate-100 dark:border-emerald-900/30">
                                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-1 flex items-center gap-1.5"><Fuel className="w-3.5 h-3.5 text-amber-500" /> Driver</div>
                                <div className="text-lg font-black dark:text-white text-slate-900">Raju M.</div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5">
                            <div>
                                <div className="flex justify-between items-end mb-2 text-xs font-bold uppercase tracking-widest">
                                    <span className="text-slate-500 dark:text-slate-400">ETA: 45 Minutes</span>
                                    <span className="text-indigo-500">80%</span>
                                </div>
                                <div className="h-2 rounded-full overflow-hidden bg-slate-100 dark:bg-black/50">
                                    <div className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-indigo-600 to-sky-400" style={{ width: '80%' }} />
                                </div>
                            </div>

                            <Link href="/dashboard/transport/routes" className="w-full py-4 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-transform active:scale-95 shadow-lg bg-indigo-600 hover:bg-indigo-500 flex justify-center items-center gap-2">
                                <PlayCircle className="w-5 h-5" /> View Logistics Dash
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Empty State */}
                <div className="p-8 rounded-[2.5rem] border shadow-inner border-slate-200 border-dashed dark:border-white/10 flex flex-col items-center justify-center text-center opacity-70">
                    <div className="p-6 bg-slate-100 dark:bg-white/5 rounded-full mb-4">
                        <AlertTriangle className="w-10 h-10 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No other incoming shipments</h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-[200px]">You will be notified when dispatch starts for your accepted commitments.</p>
                </div>
            </div>
        </div>
    );
}