"use client";

import { Store, Workflow, Folder, CalendarPlus, Activity, PieChart, Info } from "lucide-react";

export default function FPOClustersPage() {
    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                        <Workflow className="w-8 h-8 text-fuchsia-500" /> Cooperative Clusters
                    </h1>
                    <p className="text-slate-500 dark:text-emerald-200/60 font-medium mt-1">Organize local farmers into micro-clusters to consolidate crops and secure bulk orders.</p>
                </div>
                <button className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-widest text-xs flex items-center gap-2">
                    <Folder className="w-4 h-4" /> Form New Cluster
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Active Clusters */}
                {[
                    { name: "Kondapur Tomato Hub", farmers: 42, target: "20 Tons", duration: "Mar-May", performance: 85, active: true },
                    { name: "Shamshabad Organic Grain", farmers: 18, target: "50 Tons", duration: "Jun-Oct", performance: 15, active: false }
                ].map((cluster, i) => (
                    <div key={i} className={`p-8 rounded-[2.5rem] border shadow-sm ${cluster.active ? 'bg-white dark:bg-[#101b13]/80 border-slate-200 dark:border-white/10' : 'bg-slate-50 dark:bg-[#051006]/50 border-slate-100 dark:border-emerald-900/30 opacity-75'} hover:-translate-y-1 transition-transform group flex flex-col`}>
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{cluster.name}</h3>
                        <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-slate-100 dark:bg-black/20 text-slate-600 dark:text-slate-400 font-bold text-[10px] uppercase tracking-widest rounded flex items-center gap-1.5 border dark:border-white/5"><Store className="w-3 h-3" /> {cluster.farmers} Farms</span>
                            <span className="px-2 py-1 bg-fuchsia-100 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 font-bold text-[10px] uppercase tracking-widest rounded flex items-center gap-1.5 border border-fuchsia-200 dark:border-fuchsia-500/20"><Activity className="w-3 h-3" /> {cluster.target}</span>
                        </div>
                    </div>
                    <div className="w-12 h-12 bg-fuchsia-500/10 text-fuchsia-500 rounded-full flex items-center justify-center shrink-0">
                        {cluster.active ? <PieChart className="w-6 h-6 animate-pulse" /> : <Info className="w-6 h-6 opacity-50" />}
                    </div>
                </div>

                <div className="flex-1 space-y-5">
                    <div>
                        <div className="flex justify-between items-end mb-2 text-xs font-bold uppercase tracking-widest">
                            <span className="text-slate-500 dark:text-slate-400">Yield Aggregation</span>
                            <span className={`${cluster.active ? 'text-emerald-500' : 'text-slate-400'}`}>{cluster.performance}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden bg-slate-100 dark:bg-black/50">
                        <div className={`h-full rounded-full transition-all duration-1000 ${cluster.active ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' : 'bg-slate-400 dark:bg-slate-600'}`} style={{ width: `${cluster.performance}%` }} />
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    <CalendarPlus className="w-4 h-4 text-emerald-500" /> Active Season: {cluster.duration}
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex gap-4">
                <button className="flex-1 py-3 bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 hover:border-fuchsia-300 dark:hover:border-fuchsia-500/30 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-sm">Manage Cohort</button>
                <button className={`flex-1 py-3 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-transform active:scale-95 shadow-lg ${cluster.active ? 'bg-fuchsia-600 hover:bg-fuchsia-500' : 'bg-slate-400 dark:bg-slate-700'}`}>Broadcast MSG</button>
        </div>
                    </div >
                ))
}
            </div >
        </div >
    );
}