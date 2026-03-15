"use client";

import { Workflow, Users, Leaf, ArrowRight, ShieldCheck, PieChart, Info, DownloadCloud } from "lucide-react";
import Image from "next/image";

export default function ClusterNetworkPage() {
    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                        <Workflow className="w-8 h-8 text-fuchsia-500" /> Cooperative Cluster
                    </h1>
                    <p className="text-slate-500 dark:text-emerald-200/60 font-medium mt-1">Pool your harvest with nearby farmers to unlock bulk transport rates and premium buyers.</p>
                </div>
                <button className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-widest text-xs flex items-center gap-2">
                    <DownloadCloud className="w-4 h-4" /> Download Docs
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cluster Participation Status */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="p-8 rounded-[2.5rem] border shadow-sm bg-fuchsia-50/50 dark:bg-fuchsia-500/10 border-fuchsia-200 dark:border-fuchsia-500/20 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-fuchsia-200 dark:border-fuchsia-500/30 shadow-sm">
                                    <ShieldCheck className="w-3.5 h-3.5" /> FPO Verified
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Kondapur Tomato Hub</h2>
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 max-w-md">You are currently participating in this regional block. Total yield target is set for <strong className="text-fuchsia-600 dark:text-fuchsia-400">20 Tons</strong> by end of May.</p>
                            </div>

                            <div className="w-full md:w-auto flex-1 max-w-xs">
                                <div className="p-5 bg-white dark:bg-black/20 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
                                    <div className="flex justify-between items-end mb-2 text-xs font-bold uppercase tracking-widest">
                                        <span className="text-slate-500 dark:text-slate-400">Target Filled</span>
                                        <span className="text-fuchsia-500">85%</span>
                                    </div>
                                    <div className="h-3 rounded-full overflow-hidden bg-slate-100 dark:bg-black/50">
                                        <div className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-fuchsia-600 to-pink-400" style={{ width: '85%' }} />
                                    </div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-4 text-center">3 Tons Remaining</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "Active Farmers", value: "42", metric: "+3 this week", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                            { title: "Your Share", value: "1.5T", metric: "15% of Target", icon: PieChart, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
                            { title: "Crop Type", value: "Tomato", metric: "Hybrid Red", icon: Leaf, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                            { title: "Est. Savings", value: "₹4.2k", metric: "Transport pooling", icon: ArrowRight, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                        ].map((stat, i) => (
                            <div key={i} className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#101b13]/80 shadow-sm hover:-translate-y-1 transition-transform group">
                                <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mb-4 border ${stat.border}`}>
                                    <stat.icon className="w-5 h-5" />
                                </div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">{stat.title}</h4>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{stat.value}</h3>
                                <p className="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors uppercase tracking-widest">{stat.metric}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logistics View Sidebar */}
                <div className="lg:col-span-1 p-8 rounded-[2.5rem] border shadow-sm border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-[#101b13]/80 relative h-full">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Active Transport</h3>

                    <div className="space-y-6">
                        <div className="p-4 bg-slate-50 dark:bg-black/20 rounded-2xl border border-slate-200 dark:border-white/10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/20 rounded-full flex items-center justify-center border border-indigo-200 dark:border-indigo-500/30 text-indigo-500 shrink-0 shadow-inner">
                                    <Image src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=100&auto=format&fit=crop" alt="Truck" fill className="object-cover rounded-full opacity-50 grayscale" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Truck TS-09-XX</h4>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mt-1">Pending Arrival</p>
                                </div>
                            </div>
                            <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-white/5">
                                <div className="flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                                    <span>Capacity</span>
                                    <span>20T</span>
                                </div>
                                <div className="flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                                    <span>Date</span>
                                    <span>May 28th</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 border border-dashed border-slate-300 dark:border-white/20 rounded-2xl flex flex-col items-center justify-center text-center opacity-70">
                            <Info className="w-8 h-8 text-slate-400 mb-2" />
                            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Keep updating your yield metrics daily to alert the FPO of readiness.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
