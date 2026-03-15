"use client";

import { Navigation, Route, MapPin, Truck, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function TransportRoutesPage() {
    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                        <Route className="w-8 h-8 text-amber-500" /> Active Routes
                    </h1>
                    <p className="text-slate-500 dark:text-emerald-200/60 font-medium mt-1">Optimize driver routes and monitor ongoing transport legs.</p>
                </div>
                <button className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-amber-950 font-bold rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-widest text-xs flex items-center gap-2">
                    <Navigation className="w-4 h-4" /> Dispatch New
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Active Route Item */}
                <div className="p-8 rounded-[2.5rem] border shadow-sm bg-white dark:bg-[#101b13]/80 border-slate-200 dark:border-white/10 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-[100px] pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6 border-b pb-6 dark:border-white/5">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Route #TR-8820</h3>
                                <p className="text-xs font-bold uppercase tracking-widest text-amber-500 flex items-center gap-1.5"><Truck className="w-4 h-4" /> Driver Raju</p>
                            </div>
                            <span className="px-3 py-1.5 bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold uppercase tracking-widest text-[10px] rounded-lg">In Transit</span>
                        </div>

                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-50 text-emerald-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-bold text-slate-900 text-sm">Pickup</h4>
                                        <time className="text-xs font-medium text-slate-500">08:00 AM</time>
                                    </div>
                                    <p className="text-xs text-slate-500">Kondapur Harvest Hub</p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-amber-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg animate-pulse">
                                    <Truck className="w-5 h-5" />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-amber-200 bg-amber-50 shadow-md transform -translate-y-2">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-bold text-amber-900 text-sm">Current Location</h4>
                                        <time className="text-xs font-medium text-amber-600">Now</time>
                                    </div>
                                    <p className="text-xs text-amber-700">ORR Toll Plaza, Hyderabad</p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-slate-50 text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                                    <Navigation className="w-5 h-5" />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow opacity-50">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-bold text-slate-900 text-sm">Dropoff</h4>
                                        <time className="text-xs font-medium text-slate-500">Est. 12:30 PM</time>
                                    </div>
                                    <p className="text-xs text-slate-500">FreshMarket Processor Hub</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex gap-4">
                            <button className="w-full flex justify-between items-center px-6 py-4 bg-slate-50 dark:bg-black/20 hover:bg-slate-100 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-sm">
                                View Full Route Details <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Empty Area Simulator */}
                <div className="p-8 rounded-[2.5rem] border shadow-inner border-slate-200 border-dashed dark:border-white/10 flex flex-col items-center justify-center text-center opacity-70">
                    <div className="w-48 h-48 relative opacity-20 filter grayscale">
                        <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="world map" fill className="object-cover rounded-full" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2">No active waypoints</h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-[250px]">Your map will fully populate once other trucks are dispatched.</p>
                </div>
            </div>
        </div>
    );
}