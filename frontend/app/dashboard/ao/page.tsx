"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, UserPlus, Send, Activity, Tractor, TrendingUp } from "lucide-react";

export default function AODashboard() {
    const [farmers] = useState([
        { id: 1, name: "Ramesh Kumar", village: "Kondapur", status: "Active", crops: "Wheat, Tomato" },
        { id: 2, name: "Suresh Reddy", village: "Medchal", status: "Pending", crops: "None" },
        { id: 3, name: "Venkat Rao", village: "Shamshabad", status: "Active", crops: "Corn" },
    ]);

    const logs = [
        "Ramesh Kumar logged in (10 mins ago)",
        "Pre-commitment accepted by FreshMarket for Venkat Rao (1 hour ago)",
        "Suresh Reddy crop verification pending (2 hours ago)"
    ];

    return (
        <div className="space-y-8 text-emerald-50">
            {/* Header Banner */}
            <div className="relative w-full h-48 sm:h-64 rounded-3xl overflow-hidden shadow-lg border border-emerald-900/50 group">
                <Image
                    src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2000&auto=format&fit=crop"
                    alt="Wheat field farming"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051006]/90 via-[#0a1a0c]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-lg border border-emerald-500/30 backdrop-blur-md">Admin Mode</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white">Agricultural Officer Dashboard</h1>
                    <p className="text-emerald-200/80 font-medium">Manage farmers, verify crops, and send village updates.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Farmer Management */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[{ icon: Users, label: "Total Farmers", val: "1,240" }, { icon: Tractor, label: "Active Crops", val: "845" }, { icon: TrendingUp, label: "Market Growth", val: "+15%" }].map((stat, i) => (
                            <div key={i} className="p-6 bg-[#0a1a0c]/80 backdrop-blur-md rounded-2xl border border-emerald-900/50 flex flex-col gap-2 shadow-sm transition-transform hover:scale-[1.03] duration-300">
                                <stat.icon className="w-6 h-6 text-emerald-400" />
                                <span className="text-sm font-bold text-emerald-500 uppercase tracking-widest">{stat.label}</span>
                                <span className="text-3xl font-black text-white">{stat.val}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 bg-[#0a1a0c]/80 backdrop-blur-md rounded-[2rem] border border-emerald-900/50 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold flex items-center gap-3"><Users className="w-5 h-5 text-emerald-500" /> Farmer Roster</h2>
                            <button
                                onClick={() => alert("Opening manual Farmer Registration modal...")}
                                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 transition-colors rounded-xl text-sm font-bold flex items-center gap-2 shadow-md"
                            >
                                <UserPlus className="w-4 h-4" /> Add Farmer manually
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-emerald-900/50 text-xs font-bold text-emerald-500 uppercase tracking-widest">
                                        <th className="py-4">Name</th>
                                        <th className="py-4">Village</th>
                                        <th className="py-4">Status</th>
                                        <th className="py-4">Crops</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {farmers.map(f => (
                                        <tr key={f.id} className="border-b border-emerald-900/30 hover:bg-emerald-900/10 transition-colors">
                                            <td className="py-4 font-bold text-emerald-50">{f.name}</td>
                                            <td className="py-4 text-emerald-200/80">{f.village}</td>
                                            <td className="py-4">
                                                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${f.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>{f.status}</span>
                                            </td>
                                            <td className="py-4 text-emerald-200/80">{f.crops}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar: Activity & Communications */}
                <div className="space-y-6">
                    <div className="p-6 bg-[#0a1a0c]/80 backdrop-blur-md rounded-[1.5rem] border border-emerald-900/50 shadow-sm">
                        <h2 className="text-lg font-bold flex items-center gap-3 mb-6"><Activity className="w-5 h-5 text-emerald-500" /> Recent Activity Logs</h2>
                        <ul className="space-y-4">
                            {logs.map((log, i) => (
                                <li key={i} className="text-sm text-emerald-200/80 p-3 bg-emerald-900/20 rounded-xl border border-emerald-900/30">
                                    {log}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-6 bg-gradient-to-b from-[#0a1a0c]/80 to-[#102b17]/80 backdrop-blur-md rounded-[1.5rem] border border-emerald-600/30 shadow-lg">
                        <h2 className="text-lg font-bold flex items-center gap-3 mb-4"><Send className="w-5 h-5 text-emerald-400" /> Village Broadcast SMS</h2>
                        <div className="space-y-4">
                            <select onChange={(e) => alert("Selected: " + e.target.value)}  className="w-full bg-[#051006] border border-emerald-900 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 text-emerald-200">
                                <option>Telugu</option>
                                <option>Hindi</option>
                                <option>English</option>
                            </select>
                            <textarea rows={4} className="w-full bg-[#051006] border border-emerald-900 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 text-emerald-50 placeholder:text-emerald-900/50" placeholder="Enter weather warning or market update here..."></textarea>
                            <button
                                onClick={() => alert("SMS Broadcast queued for delivery. 1,240 farmers will receive this updates.")}
                                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold transition-all shadow-md active:scale-95 text-white"
                            >
                                Send SMS to All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
