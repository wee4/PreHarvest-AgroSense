"use client";

import { Users, Search, Filter, ShieldCheck, MapPin, BadgeCheck, XCircle } from "lucide-react";

const farmersList = [
    { id: "F-102", name: "Ramesh Kumar", village: "Kondapur Block", land: "4.2 Acres", status: "Verified", crops: ["Tomatoes", "Wheat"], lastAudit: "12 Oct 2026", avatar: "https://i.pravatar.cc/100?img=11" },
    { id: "F-105", name: "Suresh P.", village: "Guntur Valley", land: "1.5 Acres", status: "Pending", crops: ["Potatoes"], lastAudit: "N/A", avatar: "https://i.pravatar.cc/100?img=12" },
    { id: "F-108", name: "Venkat Rao", village: "Shamshabad Cluster", land: "8 Acres", status: "Verified", crops: ["Corn", "Rice"], lastAudit: "05 Nov 2026", avatar: "https://i.pravatar.cc/100?img=14" }
];

export default function AORegistryPage() {
    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                        <Users className="w-8 h-8 text-sky-500" /> Farmer Registry DB
                    </h1>
                    <p className="text-slate-500 dark:text-emerald-200/60 font-medium mt-1">Audit local farmers, verify land records, and manage scheme enrollments.</p>
                </div>
            </div>

            <div className="bg-white dark:bg-[#101b13]/80 border shadow-sm dark:border-white/10 p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between sticky top-4 z-10 backdrop-blur-md">
                <div className="flex relative w-full md:w-96">
                    <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                    <input type="text" placeholder="Search by Farmer ID or Name..." className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-shadow text-slate-900 dark:text-white font-medium text-sm" />
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-widest text-xs rounded-xl flex-1 md:flex-none transition-colors">
                        <Filter className="w-4 h-4" /> Filters
                    </button>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold uppercase tracking-widest text-xs rounded-xl flex-1 md:flex-none shadow-lg transition-transform active:scale-95">
                        <ShieldCheck className="w-4 h-4" /> Bulk Verify
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-[#0a1a0c]/80 border dark:border-emerald-900/30 rounded-[2rem] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-[#051006]/50 border-b border-slate-100 dark:border-emerald-900/30">
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 dark:text-emerald-500/80 uppercase tracking-widest">Farmer DB</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 dark:text-emerald-500/80 uppercase tracking-widest">Location / Land</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 dark:text-emerald-500/80 uppercase tracking-widest hidden sm:table-cell">Reg. Crops</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 dark:text-emerald-500/80 uppercase tracking-widest">KYC Status</th>
                                <th className="px-6 py-5 text-right text-xs font-bold text-slate-500 dark:text-emerald-500/80 uppercase tracking-widest">Admin Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-emerald-900/20">
                            {farmersList.map((f, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <img src={f.avatar} alt={f.name} className="w-10 h-10 rounded-full border-2 border-slate-100 dark:border-emerald-900" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors cursor-pointer">{f.name}</h4>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-emerald-500/50 mt-0.5">{f.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {f.village}</div>
                                        <div className="text-xs font-bold text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-widest">{f.land} Verified</div>
                                    </td>
                                    <td className="px-6 py-5 hidden sm:table-cell">
                                        <div className="flex flex-wrap gap-1">
                                            {f.crops.map((c, i) => (
                                                <span key={i} className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-slate-100 dark:bg-emerald-900/20 text-slate-600 dark:text-emerald-400 rounded-md border border-slate-200 dark:border-emerald-500/10">{c}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`px-3 py-1.5 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg border shadow-sm ${f.status === 'Verified' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' : 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20 animate-pulse'}`}>
                                            {f.status === 'Verified' ? <BadgeCheck className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />} {f.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        {f.status === 'Pending' ? (
                                            <button className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold uppercase tracking-widest text-[10px] rounded-lg transition-transform active:scale-95 shadow-md">Complete KYC</button>
                                        ) : (
                                            <button className="px-4 py-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-widest text-[10px] rounded-lg transition-colors">Edit Record</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}