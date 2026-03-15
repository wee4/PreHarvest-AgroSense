"use client";

import { Handshake, Store, Factory, ArrowUpRight, ArrowDownRight, CheckCircle2, Clock } from "lucide-react";

const commitments = [
    { id: 1, type: "Pending", buyer: "FreshMarket Valley", crop: "Tomatoes", quantity: "0.5 Tons", rate: "₹1,800/qtl", value: "₹9,000", date: "Delivery: Next Tuesday" },
    { id: 2, type: "Accepted", buyer: "KFC Processing Plant", crop: "Potatoes", quantity: "1.2 Tons", rate: "₹1,200/qtl", value: "₹14,400", date: "Delivery: Friday" },
    { id: 3, type: "Completed", buyer: "Local Market Board", crop: "Wheat", quantity: "5 Tons", rate: "₹2,125/qtl", value: "₹1,06,250", date: "Completed: Last Week" }
];

export default function CommitmentsPage() {
    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                        <Handshake className="w-8 h-8 text-indigo-500" /> Buyer Commitments
                    </h1>
                    <p className="text-slate-500 dark:text-emerald-200/60 font-medium mt-1">Review pre-sale offers, active contracts, and completed sales.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 text-indigo-500 rounded-xl font-bold uppercase tracking-widest text-xs border border-indigo-500/20 shadow-sm">
                    <Store className="w-4 h-4" /> 3 Active Contracts
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="p-6 rounded-[2rem] border shadow-sm bg-white dark:bg-[#101b13]/80 dark:border-white/10 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform">
                    <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Pending Offers</p>
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white">1</h3>
                    </div>
                </div>
                <div className="p-6 rounded-[2rem] border shadow-sm bg-white dark:bg-[#101b13]/80 dark:border-white/10 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform">
                    <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl">
                        <Store className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Active Contracts</p>
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white">2</h3>
                    </div>
                </div>
                <div className="p-6 rounded-[2rem] border shadow-sm bg-white dark:bg-[#101b13]/80 dark:border-white/10 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform">
                    <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
                        <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">YTD Revenue</p>
                        <h3 className="text-3xl font-black text-emerald-500">₹1.2L</h3>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {commitments.map(c => (
                    <div key={c.id} className={`p-6 rounded-2xl border shadow-sm transition-all hover:shadow-md ${c.type === 'Pending' ? 'bg-amber-50/50 dark:bg-amber-500/5 dark:border-amber-500/20 border-amber-200 hover:border-amber-400' : c.type === 'Accepted' ? 'bg-indigo-50/50 dark:bg-indigo-500/5 dark:border-indigo-500/20 border-indigo-200 hover:border-indigo-400' : 'bg-slate-50/50 dark:bg-emerald-500/5 dark:border-emerald-500/20 border-slate-200 hover:border-emerald-400'} flex flex-col md:flex-row items-center justify-between gap-6`}>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border shadow-inner ${c.type === 'Pending' ? 'bg-amber-100 dark:bg-amber-500/20 border-amber-200 dark:border-amber-500/30 text-amber-600 dark:text-amber-400' : c.type === 'Accepted' ? 'bg-indigo-100 dark:bg-indigo-500/20 border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400' : 'bg-emerald-100 dark:bg-emerald-500/20 border-emerald-200 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400'}`}>
                    {c.type === 'Pending' ? <Clock className="w-5 h-5" /> : c.type === 'Accepted' ? <Factory className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                </div>
                <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                        {c.buyer}
                    </h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-0.5">{c.date}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-auto flex-1 md:pl-10">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Crop</p>
                    <p className="font-black text-slate-900 dark:text-white">{c.crop}</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Quantity</p>
                    <p className="font-black text-slate-900 dark:text-white">{c.quantity}</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Rate</p>
                    <p className="font-black text-slate-900 dark:text-white flex items-center gap-1">{c.rate} {c.type !== 'Completed' && <ArrowUpRight className="w-3 h-3 text-emerald-500" />}</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Total Value</p>
                    <p className="font-black text-emerald-500 text-lg">{c.value}</p>
                </div>
            </div>

            {c.type === 'Pending' && (
                <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto">
                    <button className="flex-1 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-transform active:scale-95 shadow-sm">Accept Mode</button>
                    <button className="flex-1 px-4 py-2.5 bg-white dark:bg-black/20 hover:bg-red-50 dark:hover:bg-red-500/10 border border-slate-200 dark:border-white/10 hover:border-red-200 dark:hover:border-red-500/30 text-rose-500 dark:text-rose-400 text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-sm">Decline</button>
                </div>
            )}
            {c.type === 'Accepted' && (
                <div className="w-full md:w-auto">
                    <button className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-transform active:scale-95 shadow-sm">View Waybill</button>
                </div>
            )}
        </div>
    ))
}
            </div >
        </div >
    );
}