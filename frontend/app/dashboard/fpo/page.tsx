"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, Clock, MapPin, BarChart2, Briefcase, FileText } from "lucide-react";

export default function FPODashboard() {
    const [approvedList, setApprovedList] = useState<number[]>([]);
    const pendingVerifications = [
        { id: 101, farmer: "Kisan Cooperative #4", location: "Warangal", crops: "Cotton, Chilli", status: "Pending" },
        { id: 102, farmer: "Green Valley Farm", location: "Nizamabad", crops: "Turmeric", status: "Review" },
    ];

    const clusterProjects = [
        { title: "Organic Turmeric Export", target: "50 Tons", progress: "32 Tons Secured" },
        { title: "Kharif Wheat Collection", target: "200 Tons", progress: "185 Tons Secured" }
    ];

    return (
        <div className="space-y-8 text-emerald-50">
            {/* FPO Header */}
            <div className="relative w-full h-48 sm:h-64 rounded-[2rem] overflow-hidden shadow-lg border border-emerald-900/50 group">
                <Image
                    src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2000&auto=format&fit=crop"
                    alt="Cooperative farmer meeting"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051006]/90 via-[#0a1a0c]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-lg border border-emerald-500/30 backdrop-blur-md mb-2 inline-block">Cooperative HQ</span>
                    <h1 className="text-3xl sm:text-4xl font-black text-white">FPO Network Console</h1>
                    <p className="text-emerald-200/80 font-medium">Verify farmers, aggregate clusters, and optimize block revenue.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Farmer Verification List */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {clusterProjects.map((proj, i) => (
                            <div key={i} className="p-6 bg-[#0a1a0c]/80 backdrop-blur-md rounded-2xl border border-emerald-500/20 shadow-sm relative overflow-hidden group hover:scale-[1.03] transition-transform duration-300">
                                <div className="absolute right-0 top-0 opacity-10">
                                    <BarChart2 className="w-32 h-32" />
                                </div>
                                <h3 className="font-bold text-lg text-emerald-100 flex items-center gap-2 mb-2"><Briefcase className="w-5 h-5 text-emerald-500" /> {proj.title}</h3>
                                <p className="text-sm text-emerald-300/80 font-bold uppercase tracking-widest mb-1">Target: {proj.target}</p>
                                <p className="text-2xl font-black text-white">{proj.progress}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 bg-[#0a1a0c]/80 backdrop-blur-md rounded-[2.5rem] border border-emerald-900/50 shadow-sm">
                        <h2 className="text-xl font-bold flex items-center gap-3 mb-6"><CheckCircle className="w-5 h-5 text-emerald-500" /> Pending Farmer Approvals</h2>
                        <div className="space-y-4">
                            {pendingVerifications.map((v) => (
                                <div key={v.id} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-[#102b17]/50 rounded-xl border border-emerald-900/30 hover:border-emerald-500/30 transition-colors gap-4">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-emerald-50">{v.farmer}</h4>
                                        <div className="flex items-center gap-4 text-xs font-bold text-emerald-400 uppercase tracking-widest mt-1">
                                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {v.location}</span>
                                            <span>Crop: {v.crops}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 w-full sm:w-auto">
                                        <button
                                            onClick={() => setApprovedList([...approvedList, v.id])}
                                            disabled={approvedList.includes(v.id)}
                                            className={`flex-1 sm:flex-none px-4 py-2 text-white rounded-lg font-bold text-sm shadow-md transition-colors ${approvedList.includes(v.id) ? 'bg-emerald-800 opacity-50 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500'}`}
                                        >
                                            {approvedList.includes(v.id) ? 'Approved' : 'Approve'}
                                        </button>
                                        <button
                                            onClick={() => alert(`Reviewing farmer: ${v.farmer}`)}
                                            className="flex-1 sm:flex-none px-4 py-2 bg-transparent border border-amber-500/50 text-amber-500 hover:bg-amber-500/10 rounded-lg font-bold text-sm transition-colors"
                                        >
                                            Review
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Logistics & Revenue Widget */}
                <div className="space-y-6">
                    <div className="p-8 bg-gradient-to-b from-[#0a1a0c]/80 to-[#051006]/80 backdrop-blur-md rounded-[2.5rem] border border-emerald-900/50 shadow-lg text-center relative pointer-events-none group pt-12">
                        <FileText className="w-12 h-12 text-emerald-500/50 absolute top-8 left-1/2 -translate-x-1/2 scale-150 group-hover:scale-110 transition-transform duration-700" />
                        <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-2 mt-8">Aggregated Block Revenue</h3>
                        <p className="text-5xl font-black text-white">₹14.2M</p>
                        <p className="text-emerald-200/60 text-xs font-bold tracking-widest mt-4">+2.4% vs last quarter</p>
                    </div>

                    <div className="p-6 bg-[#0a1a0c]/80 backdrop-blur-md rounded-[2.5rem] border border-emerald-900/50 shadow-sm">
                        <h3 className="text-lg font-bold flex items-center gap-2 mb-4"><Clock className="w-5 h-5 text-emerald-400" /> Live FPO Events</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                                <span className="w-2 h-2 mt-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                                <div>
                                    <p className="text-sm font-bold text-emerald-100">Transport dispatched for Turmeric</p>
                                    <span className="text-[10px] text-emerald-400 font-bold uppercase">10 mins ago</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-emerald-900/10 rounded-xl border border-emerald-900/30">
                                <span className="w-2 h-2 mt-2 rounded-full bg-emerald-700 shrink-0" />
                                <div>
                                    <p className="text-sm text-emerald-200/80">AO updated region prices.</p>
                                    <span className="text-[10px] text-emerald-500/80 font-bold uppercase">1 hour ago</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
