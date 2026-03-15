"use client";

import { useState } from "react";
import Image from "next/image";
import { Truck, MapPin, Search, Navigation, Package, Clock } from "lucide-react";

export default function TransportDashboard() {
    const [acceptedLoads, setAcceptedLoads] = useState<string[]>([]);
    const [planGenerated, setPlanGenerated] = useState(false);
    const pickupRequests = [
        { id: 'LD-889', from: "Kondapur FPO", to: "APMC Market Yard", distance: "45 km", cargo: "10 Tons Wheat", rate: "₹5,000", time: "2:00 PM Today" },
        { id: 'LD-902', from: "Shamshabad Cluster", to: "FreshMarket Valley", distance: "28 km", cargo: "5 Tons Tomato", rate: "₹3,500", time: "Tomorrow 9:00 AM" }
    ];

    return (
        <div className="space-y-8 text-emerald-50">
            {/* Fleet Header */}
            <div className="relative w-full h-48 sm:h-64 rounded-[2.5rem] overflow-hidden shadow-lg border border-emerald-900/50 group">
                <Image
                    src="https://images.unsplash.com/photo-1519003722824-194d4455aeb0?q=80&w=2000&auto=format&fit=crop"
                    alt="Agri transport truck on road"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051006]/90 via-[#0a1a0c]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest rounded-lg border border-amber-500/30 backdrop-blur-md mb-2 inline-flex items-center gap-2 shadow-sm"><Truck className="w-3 h-3" /> Fleet Coordination</span>
                    <h1 className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">Transport Ecosystem</h1>
                    <p className="text-emerald-200/80 font-medium">Link with verified FPO clusters and orchestrate bulk delivery routes securely.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Logistics Map & Active View */}
                <div className="xl:col-span-2 space-y-6">
                    {/* Map UI Simulation */}
                    <div className="w-full h-[400px] rounded-[2.5rem] overflow-hidden border border-emerald-900/50 relative group bg-[#051006] shadow-md">
                        <Image
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
                            alt="Map View"
                            fill
                            className="object-cover opacity-30 grayscale sepia hue-rotate-50 saturate-50 transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0c]/60 to-[#051006]/80 mix-blend-multiply pointer-events-none" />

                        {/* Animated Route Line Overlay */}
                        <div className="absolute inset-0 z-10 hidden sm:block pointer-events-none overflow-hidden">
                            <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
                                {/* Route Line Path */}
                                <path
                                    d="M 150 300 Q 250 250, 400 300 T 650 150"
                                    className="stroke-emerald-500/30 stroke-[4px] fill-transparent"
                                />
                                {/* Pulsing Animated Dash Line */}
                                <path
                                    d="M 150 300 Q 250 250, 400 300 T 650 150"
                                    className="stroke-emerald-400 stroke-[4px] fill-transparent stroke-dasharray-[20,20] animate-[dash_10s_linear_infinite]"
                                />
                            </svg>
                        </div>

                        {/* Fake Map Markers */}
                        <div className="absolute top-[35%] right-[20%] p-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(16,185,129,0.5)] z-20" />
                        <div className="absolute bottom-[20%] left-[15%] p-2 bg-amber-500 rounded-full animate-bounce shadow-[0_0_20px_rgba(245,158,11,0.5)] z-20" />

                        <div className="absolute top-6 left-6 p-4 bg-[#0a1a0c]/90 border border-emerald-500/30 backdrop-blur-md rounded-2xl shadow-lg flex items-center gap-3 z-30">
                            <Search className="w-5 h-5 text-emerald-500" />
                            <input type="text" placeholder="Search load pin codes..." className="bg-transparent border-none text-emerald-50 focus:outline-none w-48 text-sm placeholder:text-emerald-500/50" />
                        </div>
                    </div>

                    {/* Pending Request Feed */}
                    <div className="p-8 bg-[#0a1a0c]/80 backdrop-blur-md shadow-sm border border-emerald-900/50 rounded-[2.5rem]">
                        <h2 className="text-xl font-bold flex items-center gap-3 mb-6"><Package className="w-5 h-5 text-emerald-500" /> Nearby Pickup Requests</h2>
                        <div className="space-y-4">
                            {pickupRequests.map((req, i) => (
                                <div key={i} className="group p-5 bg-[#051006]/80 hover:bg-emerald-900/20 border border-emerald-900/40 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:border-emerald-500/30 cursor-pointer shadow-sm hover:-translate-y-1">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[10px] bg-amber-500/10 text-amber-500 font-black uppercase tracking-widest px-2 py-1 border border-amber-500/20 rounded-md">{req.id}</span>
                                            <h4 className="font-bold text-white text-lg">{req.cargo}</h4>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-bold uppercase tracking-widest text-emerald-200/60 mt-2">
                                            <span className="flex items-center gap-1 group-hover:text-amber-400 transition-colors"><MapPin className="w-3 h-3" /> {req.from} → {req.to}</span>
                                            <span className="hidden sm:inline text-emerald-900">|</span>
                                            <span className="flex items-center gap-1 text-emerald-400"><Clock className="w-3 h-3" /> {req.time}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center gap-4 border-t md:border-none border-emerald-900/30 pt-4 md:pt-0 w-full md:w-auto">
                                        <div className="text-center sm:text-right w-full sm:w-auto">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/80 mb-1">Expected Rate</p>
                                            <p className="text-xl font-black text-emerald-400">{req.rate}</p>
                                        </div>
                                        <button
                                            onClick={() => {
                                                if (!acceptedLoads.includes(req.id)) {
                                                    setAcceptedLoads([...acceptedLoads, req.id]);
                                                }
                                            }}
                                            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors shadow-md text-white whitespace-nowrap ${acceptedLoads.includes(req.id) ? 'bg-emerald-800 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500'}`}
                                        >
                                            {acceptedLoads.includes(req.id) ? 'Secured' : 'Accept Load'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tracking & Analytics Side Panel */}
                <div className="space-y-6">
                    {/* Suggested Optimal Route Card */}
                    <div className="p-8 bg-gradient-to-br from-[#0a1a0c] to-[#102b17] border border-emerald-500/30 rounded-[2.5rem] shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
                        <Navigation className="absolute -right-4 -bottom-4 w-32 h-32 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors duration-500" />
                        <h3 className="flex items-center gap-3 font-bold text-lg mb-4 text-white"><Navigation className="w-5 h-5 text-emerald-400" /> Optimal Hub Route</h3>
                        <p className="text-emerald-100/70 text-sm leading-relaxed mb-6 font-medium relative z-10">Combine 4 pending pickup loads from Kodad clusters heading to APMC. Save 35% fuel distance overhead.</p>

                        <div className="space-y-3 relative z-10">
                            <div className="flex justify-between items-center bg-[#051006]/50 p-3 rounded-xl border border-emerald-900/50">
                                <span className="text-xs font-bold uppercase tracking-widest text-emerald-500">Total Cargo</span>
                                <span className="font-black text-white">45 Tons</span>
                            </div>
                            <div className="flex justify-between items-center bg-[#051006]/50 p-3 rounded-xl border border-emerald-900/50">
                                <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Estimated Income</span>
                                <span className="font-black text-white">₹18,500</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setPlanGenerated(true)}
                            className={`w-full mt-6 py-3 rounded-xl font-bold text-white uppercase tracking-widest text-xs shadow-md transition-colors relative z-10 ${planGenerated ? 'bg-emerald-800' : 'bg-emerald-600 hover:bg-emerald-500'}`}
                        >
                            {planGenerated ? 'Plan Sent to GPS' : 'Generate Waypoint Plan'}
                        </button>
                    </div>

                    {/* Delivery Log */}
                    <div className="p-6 bg-[#0a1a0c]/80 backdrop-blur-md rounded-[2.5rem] shadow-sm border border-emerald-900/50">
                        <h3 className="font-bold flex items-center gap-2 mb-4"><CheckCircleIcon /> Completed Runs</h3>
                        <ul className="space-y-4">
                            <li className="p-4 rounded-2xl bg-emerald-900/10 border border-emerald-900/30">
                                <div className="flex justify-between items-end mb-1">
                                    <span className="font-bold text-sm text-emerald-100">Drop-off: Retail Block A</span>
                                    <span className="text-emerald-500 font-black">₹4,200</span>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-200/50 gap-1 flex items-center"><Clock className="w-3 h-3" /> Yesterday 18:30 <CheckCircleIconSmall /></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Globals css helper for map dash line */}
            <style jsx global>{`
                @keyframes dash {
                    to { stroke-dashoffset: -40; }
                }
            `}</style>
        </div>
    );
}

function CheckCircleIcon() {
    return (
        <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}
function CheckCircleIconSmall() {
    return (
        <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}
