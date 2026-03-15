"use client";

import { Users, Navigation, MapPin, PhoneCall, CheckCircle2, TrendingUp, Filter } from "lucide-react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const nearbyFarmers = [
    { id: 1, name: "Suresh P.", crop: "Tomatoes", yield: "12 Tons", distance: "2.4 km", status: "Available", image: "https://i.pravatar.cc/100?img=11", coords: { top: '30%', left: '40%' } },
    { id: 2, name: "Venkat R.", crop: "Wheat", yield: "8.5 Tons", distance: "4.1 km", status: "Committed", image: "https://i.pravatar.cc/100?img=12", coords: { top: '50%', left: '60%' } },
    { id: 3, name: "Ramesh K.", crop: "Corn", yield: "15 Tons", distance: "5.8 km", status: "Available", image: "https://i.pravatar.cc/100?img=14", coords: { top: '65%', left: '30%' } },
    { id: 4, name: "Lakshmi M.", crop: "Potatoes", yield: "5 Tons", distance: "7.2 km", status: "Harvesting", image: "https://i.pravatar.cc/100?img=9", coords: { top: '20%', left: '70%' } },
    { id: 5, name: "Narayana T.", crop: "Tomatoes", yield: "9 Tons", distance: "8.5 km", status: "Available", image: "https://i.pravatar.cc/100?img=8", coords: { top: '80%', left: '50%' } }
];

export default function NearbyFarmersPage() {
    const { isDarkMode } = useAppContext();

    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                        <Users className="w-8 h-8 text-indigo-500" /> Farmers Within 30km
                    </h1>
                    <p className="text-slate-500 dark:text-emerald-200/60 font-medium mt-1">Discover nearby farmers cultivating similar crops to pool resources and negotiate better transport rates.</p>
                </div>
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-widest text-xs flex items-center gap-2">
                    <Filter className="w-4 h-4" /> Filter Area
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full min-h-[600px]">

                {/* Map View */}
                <div className="lg:col-span-2 relative rounded-[2.5rem] border shadow-sm border-slate-200 dark:border-white/10 overflow-hidden bg-emerald-50/50 dark:bg-[#101b13]/80 group h-full min-h-[500px]">
                    <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none transition-all duration-700">
                        <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" alt="satellite map" fill className="object-cover" />
                    </div>

                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/90 dark:from-[#051006]/90 via-transparent to-transparent pointer-events-none" />

                    {/* Plot Points on Map */}
                    {nearbyFarmers.map(farmer => (
                        <div key={farmer.id} className="absolute z-20 group/marker cursor-pointer" style={{ top: farmer.coords.top, left: farmer.coords.left, transform: 'translate(-50%, -50%)' }}>
                            <div className="relative">
                                {/* Pulse Effect */}
                                <div className={`absolute -inset-2 rounded-full animate-ping opacity-20 ${farmer.status === 'Available' ? 'bg-emerald-500' : 'bg-amber-500'}`} />

                                {/* Marker Details (Hidden by default, shown on hover) */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white dark:bg-[#0a1a0c] p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 opacity-0 group-hover/marker:opacity-100 transition-all duration-300 pointer-events-none w-48 z-30 scale-95 group-hover/marker:scale-100 origin-bottom">
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{farmer.name}</h4>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-2">{farmer.crop}</p>
                                    <div className="flex justify-between items-center border-t border-slate-100 dark:border-white/10 pt-2 mt-2">
                                        <span className="text-xs font-medium text-slate-500">{farmer.yield}</span>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest ${farmer.status === 'Available' ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-white/10 text-slate-500'}`}>{farmer.status}</span>
                                    </div>
                                </div>

                                {/* Actual Pin */}
                                <div className={`w-10 h-10 rounded-full border-2 overflow-hidden shadow-lg transform transition-transform group-hover/marker:scale-110 group-hover/marker:border-indigo-500 ${isDarkMode ? 'border-[#0a1a0c]' : 'border-white'} ${farmer.status === 'Available' ? 'ring-2 ring-emerald-500 ring-offset-2 dark:ring-offset-[#0a1a0c]' : ''}`}>
                                    <Image src={farmer.image} alt={farmer.name} fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="absolute bottom-6 left-6 z-20">
                        <div className="px-4 py-3 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg text-sm font-bold flex flex-col gap-2 relative">
                            <div className="flex items-center gap-2 text-slate-900 dark:text-white"><div className="w-3 h-3 rounded-full bg-emerald-500" /> Looking for Transport</div>
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400"><div className="w-3 h-3 rounded-full bg-amber-500" /> Already Committed</div>
                        </div>
                    </div>
                </div>

                {/* List View */}
                <div className="lg:col-span-1 border rounded-[2.5rem] border-slate-200 dark:border-white/10 bg-white dark:bg-[#101b13]/80 shadow-sm p-6 overflow-hidden flex flex-col h-full">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest border-b pb-4 dark:border-white/5">Local Farmers List</h3>

                    <div className="overflow-y-auto pr-2 space-y-4 flex-1 custom-scrollbar">
                        {nearbyFarmers.map(farmer => (
                            <div key={farmer.id} className="p-4 rounded-2xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-black/20 hover:bg-slate-100 dark:hover:bg-black/40 transition-colors group cursor-pointer flex gap-4">
                                <div className="relative w-12 h-12 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden shrink-0">
                                    <Image src={farmer.image} alt={farmer.name} fill className="object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-indigo-500 transition-colors">{farmer.name}</h4>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1"><MapPin className="w-3 h-3" /> {farmer.distance}</span>
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">{farmer.crop}</p>

                                    <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-slate-100 dark:border-white/5">
                                        <button className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-colors border border-emerald-100 dark:border-emerald-500/20 flex items-center gap-1.5">
                                            <PhoneCall className="w-3 h-3" /> Connect
                                        </button>
                                        <span className={`px-2 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg flex items-center gap-1.5 border ${farmer.status === 'Available' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-500/20' : 'bg-slate-100 dark:bg-white/5 text-slate-500 border-slate-200 dark:border-white/10'}`}>
                                            {farmer.status === 'Available' ? <TrendingUp className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />} {farmer.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
