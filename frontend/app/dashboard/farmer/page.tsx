"use client";

import { useState } from "react";
import {
    Navigation2,
    Recycle,
    Factory,
    ShieldCheck,
    Briefcase,
    UserCheck,
    Building2,
    XSquare,
    Star,
    IndianRupee,
    Sprout,
    Upload,
    BarChart3,
    CloudSun,
    AlertTriangle,
    Lightbulb,
    CheckCircle2,
    Calendar,

    TrendingUp,
    LineChart,
    MapPin,

    Users,
    Users2,


    ArrowUpRight,
    ArrowDownRight,




    BadgeCheck,
    AlertOctagon,
    Timer,

    Activity,
    Layers
} from "lucide-react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const stats = [
    { id: 1, title: "Rejected Orders", value: "2", icon: XSquare, color: "text-red-500", bg: "bg-red-50 dark:bg-red-500/10" },
    { id: 2, title: "Farmer Rating", value: "4.8/5", icon: Star, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-500/10" },
    { id: 3, title: "Revenue Collected", value: "₹2.4L", icon: IndianRupee, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
    { id: 4, title: "Crops Done", value: "14", icon: Sprout, color: "text-teal-500", bg: "bg-teal-50 dark:bg-teal-500/10" },
];


const nearbyFarmers = [
    { id: 1, name: "Ramesh Kumar", crop: "Organic Corn", distance: "4.2 km", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop", cropImg: "https://images.unsplash.com/photo-1550828520-4cb496924296?q=80&w=150&auto=format&fit=crop", trend: "up", earnings: [40, 60, 80, 50, 90], status: "Available" },
    { id: 2, name: "Suresh P", crop: "Tomatoes", distance: "8.5 km", image: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=150&auto=format&fit=crop", cropImg: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=150&auto=format&fit=crop", trend: "down", earnings: [90, 70, 50, 30, 40], status: "Low Stock" },
    { id: 3, name: "Venkat Rao", crop: "Wheat", distance: "14 km", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop", cropImg: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=150&auto=format&fit=crop", trend: "up", earnings: [20, 30, 50, 80, 100], status: "Available" }
];

const wasteItems = [
    { id: 1, crop: "Tomatoes (Grade C)", weight: "240 kg", expiry: "18h:20m", buyers: ["Kissan Ketchup", "Local Dryers"], value: "₹2,400", status: "Urgent", type: "expiry" },
    { id: 2, crop: "Potato Peelings", weight: "150 kg", expiry: "3d:12h", buyers: ["BioGas Co.", "Cattle Farm"], value: "₹800", status: "Fresh", type: "fresh" }
];

const mockCropsHistory = [
    { id: 1, crop: "Tomatoes", date: "Oct 24, 2026", redScore: 85, ready: true, img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=400&auto=format&fit=crop" },
    { id: 2, crop: "Wheat", date: "Nov 02, 2026", redScore: 40, ready: false, img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=400&auto=format&fit=crop" },
    { id: 3, crop: "Sweet Corn", date: "Nov 15, 2026", redScore: 20, ready: false, img: "https://images.unsplash.com/photo-1550828520-4cb496924296?q=80&w=400&auto=format&fit=crop" }
];

export default function DashboardOverview() {
    const { activeNetwork, isDarkMode } = useAppContext();
    const isLowNetwork = activeNetwork === "2g";


    const [aiAnalysis, setAiAnalysis] = useState(false);
    const [analyzing, setAnalyzing] = useState(false);
    const [commitmentStatus, setCommitmentStatus] = useState<"Pending" | "Accepted" | "Declined">("Pending");
    const [openedCrops, setOpenedCrops] = useState<number[]>([]);
    const [joinCluster, setJoinCluster] = useState(false);
    const [wasteListed, setWasteListed] = useState<number[]>([]);

    const [isWasteListed, setIsWasteListed] = useState(false);
    const [joinedCluster, setJoinedCluster] = useState(false);

    const handleOpenCommitment = (id: number) => {
        if (!openedCrops.includes(id)) {
            setOpenedCrops([...openedCrops, id]);
        }
    };

    const triggerAnalysis = () => {
        setAnalyzing(true);
        setTimeout(() => {
            setAnalyzing(false);
            setAiAnalysis(true);
        }, isLowNetwork ? 500 : 2000);
    };

    return (
        <div className="space-y-10 w-full font-sans">

            {/* Immersive Welcome Banner */}
            <div className={`relative w-full h-[280px] sm:h-[320px] rounded-[2.5rem] overflow-hidden shadow-sm group flex items-end ${isDarkMode ? 'border border-white/10' : 'border border-black/5 bg-white/50'}`}>
                <Image
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
                    alt="Lush agricultural farming field"
                    fill
                    className="object-cover object-center scale-105 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 saturate-150 blur-[2px] group-hover:blur-none"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0 transition-opacity duration-500 group-hover:opacity-60" />

                <div className="relative z-10 p-8 sm:p-12 w-full text-white">
                    <div className="flex items-center gap-2 mb-3 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full w-max border border-white/20">
                        <CloudSun className="w-4 h-4 text-amber-300 drop-shadow-sm" />
                        <span className="text-amber-50 text-xs font-bold uppercase tracking-widest">Good Afternoon</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg text-white mb-2">Welcome to Smart Harvest.</h1>
                    <p className="text-emerald-50/80 max-w-xl leading-relaxed font-medium md:text-lg drop-shadow-md">Monitor your fields dynamically, predict harvest readiness, and secure local commitments effortlessly.</p>
                </div>
            </div>

            {/* Real-time Market Ticker */}
            {!isLowNetwork && (
                <div className={`w-full overflow-hidden flex items-center p-4 rounded-2xl shadow-sm border backdrop-blur-md ${isDarkMode ? 'bg-[#152319]/80 border-emerald-900/50 text-emerald-300' : 'bg-white border-emerald-100 text-emerald-700'}`}>
                    <TrendingUp className={`w-5 h-5 ml-2 mr-4 shrink-0 ${isDarkMode ? 'text-amber-400' : 'text-emerald-500'}`} />
                    <div className="animate-ticker inline-block font-bold text-sm tracking-widest whitespace-nowrap min-w-full">
                        <span className="mr-16">🌾 WHEAT: ₹2,125/qtl <span className="text-emerald-500">(+1.2%)</span></span>
                        <span className="mr-16">🍅 TOMATO: ₹1,800/qtl <span className="text-emerald-500">(+5.4%)</span></span>
                        <span className="mr-16">🥔 POTATO: ₹1,200/qtl <span className="text-red-500">(-0.5%)</span></span>
                        <span className="mr-16">🌽 CORN: ₹1,950/qtl <span className="text-emerald-500">(+2.1%)</span></span>
                        <span className="mr-16">🌾 RICE: ₹2,900/qtl <span className="text-emerald-500">(+0.8%)</span></span>
                    </div>
                </div>
            )}

            {/* Top Hero Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((s) => (
                    <div key={s.id} className={`p-6 sm:p-8 rounded-[2rem] flex items-center justify-between border shadow-sm backdrop-blur-xl ${isDarkMode ? 'border-white/10 bg-[#101b13]/60' : 'border-black/5 bg-white/70'} ${!isLowNetwork ? 'hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 cursor-default group' : ''}`}>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-emerald-200/50 mb-2">{s.title}</p>
                            <h3 className={`text-4xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{s.value}</h3>
                        </div>
                        <div className={`p-4 rounded-2xl ${s.bg} ${s.color} ${!isLowNetwork ? 'group-hover:scale-110 transition-transform duration-300' : ''}`}>
                            <s.icon className="w-8 h-8" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

                {/* HARVEST PREDICTION SECTION (Left Column) */}
                <div className="xl:col-span-2 space-y-10">

                    {/* Highly Polished AI Box */}
                    <div className={`rounded-[2.5rem] p-8 sm:p-10 border shadow-sm relative overflow-hidden group/predict ${isDarkMode ? 'border-white/10 bg-[#101b13]/80' : 'border-black/5 bg-white/80'} backdrop-blur-2xl`}>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <h2 className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                Harvest Readiness Predictor
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Form Input Side */}
                            <div className="space-y-6">

                                <div
                                    onClick={() => alert("File upload dialog opened!")} className={`border-2 border-dashed rounded-[2rem] p-8 text-center transition-colors cursor-pointer flex flex-col items-center justify-center h-48 ${isDarkMode ? 'border-emerald-800/50 hover:bg-emerald-900/20' : 'border-emerald-200 hover:bg-emerald-50/50'}`}
                                >
                                    <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-full mb-4">
                                        <Upload className="w-6 h-6" />
                                    </div>
                                    <p className={`text-sm font-bold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>Upload Crop Photo</p>
                                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>AI Redness Analysis Engine</p>
                                </div>

                                <div className="space-y-5">
                                    <div>
                                        <label className={`text-xs font-bold uppercase tracking-widest pl-1 ${isDarkMode ? 'text-emerald-500' : 'text-slate-600'}`}>Crop Name</label>
                                        <input type="text" placeholder="e.g. Tomato Plot A" className={`w-full mt-2 p-4 rounded-xl border font-medium focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-shadow ${isDarkMode ? 'bg-[#051006] border-emerald-900 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'}`} />
                                    </div>
                                    <div>
                                        <label className={`text-xs font-bold uppercase tracking-widest pl-1 ${isDarkMode ? 'text-emerald-500' : 'text-slate-600'}`}>Expected Tons</label>
                                        <input type="number" placeholder="0.5" className={`w-full mt-2 p-4 rounded-xl border font-medium focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-shadow ${isDarkMode ? 'bg-[#051006] border-emerald-900 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'}`} />
                                    </div>
                                </div>

                                <button
                                    onClick={triggerAnalysis}
                                    disabled={analyzing}
                                    className="w-full py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:to-teal-400 text-white font-bold rounded-2xl shadow-lg transition-transform active:scale-95 disabled:opacity-70 disabled:scale-100 flex justify-center items-center gap-3 text-lg"
                                >
                                    {analyzing ? <Sprout className="w-6 h-6 animate-spin" /> : <BarChart3 className="w-6 h-6" />}
                                    {analyzing ? "Analyzing Environment..." : "Predict Readiness"}
                                </button>
                            </div>

                            {/* AI Output Side */}
                            <div className={`rounded-[2rem] p-8 border flex flex-col items-center justify-center relative shadow-inner ${isDarkMode ? 'bg-[#051006]/50 border-white/5' : 'bg-slate-50/50 border-black/5'}`}>

                                {!aiAnalysis ? (
                                    <div className="text-center opacity-40 space-y-6 animate-pulse flex flex-col items-center">
                                        <LineChart className={`w-16 h-16 ${isDarkMode ? 'text-emerald-600' : 'text-slate-400'}`} />
                                        <p className={`font-bold uppercase tracking-widest text-sm ${isDarkMode ? 'text-emerald-600' : 'text-slate-500'}`}>Awaiting Crop Data</p>
                                    </div>
                                ) : (
                                    <div className="w-full space-y-8 animate-in fade-in zoom-in-95 duration-500">

                                        <div>
                                            <div className="flex justify-between items-end mb-2">
                                                <span className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-emerald-400' : 'text-slate-600'}`}>AI Redness Score</span>
                                                <span className="text-sm font-black text-red-500">82%</span>
                                            </div>
                                            <div className={`h-2.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-black/50' : 'bg-slate-200'}`}>
                                                <div className="h-full bg-red-500 rounded-full" style={{ width: '82%', transition: 'width 1.5s ease-out' }} />
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-center justify-center pt-4">
                                            <div className="relative w-48 h-48 drop-shadow-md">
                                                <svg viewBox="0 0 36 36" className="circular-chart text-emerald-500 w-full h-full">
                                                    <path className={isDarkMode ? "circle-bg stroke-emerald-900/30" : "circle-bg stroke-slate-200"} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                                    <path className="circle stroke-current" strokeDasharray="92, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                                </svg>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pt-2 drop-shadow-sm">
                                                    <span className={`text-6xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>92<span className="text-2xl font-bold">%</span></span>
                                                    <span className={`text-xs font-bold uppercase tracking-widest mt-1 ${isDarkMode ? 'text-emerald-500' : 'text-slate-500'}`}>Ready</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* MY CROPS SECTION */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 px-2">
                            <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
                                <Sprout className="w-5 h-5" />
                            </div>
                            <h2 className={`text-xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                Local Fields History
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mockCropsHistory.map(crop => (
                                <div key={crop.id} className="group perspective-1000 h-[280px] w-full cursor-pointer relative">
                                    <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${!isLowNetwork ? 'group-hover:rotate-y-180' : ''}`}>

                                        {/* Front of Card */}
                                        <div className={`absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-sm border ${isDarkMode ? 'border-white/10 bg-[#101b13]/80' : 'border-black/5 bg-white/70'} backdrop-blur-xl`}>
                                            <div className="h-40 w-full relative">
                                                <Image src={crop.img} alt={crop.crop} fill className="object-cover" unoptimized={isLowNetwork} />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                                <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md ${crop.ready ? 'bg-emerald-500 text-white' : 'bg-amber-500/90 text-amber-50 backdrop-blur-md'}`}>
                                                    {crop.ready ? 'Ready' : 'Growing'}
                                                </span>
                                            </div>
                                            <div className={`p-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                                <h3 className="text-lg font-bold">{crop.crop}</h3>
                                                <div className="flex gap-2 items-center text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
                                                    <Calendar className="w-4 h-4 text-emerald-500" /> {crop.date}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Back of Card */}
                                        <div className={`absolute inset-0 backface-hidden rounded-3xl rotate-y-180 p-8 flex flex-col justify-center border shadow-lg ${isDarkMode ? 'bg-[#152319] border-emerald-900/50' : 'bg-emerald-50 border-emerald-200'}`}>
                                            <h4 className={`text-base font-black uppercase tracking-widest mb-6 border-b pb-3 ${isDarkMode ? 'text-emerald-400 border-white/10' : 'text-emerald-700 border-emerald-200'}`}>{crop.crop} Scan</h4>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center text-sm font-bold">
                                                    <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Redness</span>
                                                    <span className="text-red-500">{crop.redScore}%</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm font-bold">
                                                    <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>AI Confidence</span>
                                                    <span className="text-emerald-500 tracking-wider">95%</span>
                                                </div>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleOpenCommitment(crop.id); }}
                                                    className={`w-full mt-6 py-3 transition-colors text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-sm ${openedCrops.includes(crop.id) ? 'bg-emerald-800 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'}`}
                                                >
                                                    {openedCrops.includes(crop.id) ? 'Commitment Secured' : 'Open Commitment'}
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>



                    {/* --- NEW MODULE: HARVEST WASTE OPTIMIZATION --- */}
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        <div className="flex items-center gap-4 px-2">
                            <div className="p-2 bg-rose-500/10 text-rose-500 rounded-lg">
                                <AlertOctagon className="w-5 h-5" />
                            </div>
                            <h2 className={`text-xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                Harvest Waste Optimization
                            </h2>
                            <span className="px-3 py-1 bg-amber-500/20 text-amber-500 border border-amber-500/30 rounded-xl text-[10px] font-black tracking-widest uppercase ml-auto">
                                Reduce Food Waste
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {wasteItems.map(item => (
                                <div key={item.id} className={`relative p-6 rounded-[2rem] border shadow-sm transition-transform hover:shadow-lg hover:-translate-y-1 ${isDarkMode ? 'bg-[#101b13]/80 border-white/10' : 'bg-white border-black/5'} overflow-hidden group`}>
                                    <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[40px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-40 ${item.status === 'Urgent' ? 'bg-red-500' : 'bg-emerald-500'}`} />

                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.crop}</h3>
                                            <p className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} flex items-center gap-2`}>
                                                <Layers className="w-3.5 h-3.5" /> Surplus: {item.weight}
                                            </p>
                                        </div>
                                        <div className={`flex flex-col items-end`}>
                                            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold uppercase tracking-widest ${item.status === 'Urgent' ? 'bg-red-500/10 border-red-500/20 text-red-500 animate-pulse' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'}`}>
                                                <Timer className="w-3.5 h-3.5" />
                                                {item.expiry}
                                            </div>
                                            <span className={`text-[10px] uppercase font-black mt-1 ${item.status === 'Urgent' ? 'text-red-400' : 'text-emerald-400'}`}>{item.status}</span>
                                        </div>
                                    </div>

                                    <div className={`p-4 rounded-2xl mb-5 space-y-3 ${isDarkMode ? 'bg-black/30' : 'bg-slate-50'}`}>
                                        <div className="flex justify-between text-sm">
                                            <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Est. Recovery Value:</span>
                                            <span className="font-bold text-teal-500">{item.value}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Suggested Buyers:</span>
                                            <span className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} flex flex-wrap gap-2 justify-end`}>
                                                {item.buyers.map(b => (
                                                    <span key={b} className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-slate-200'}`}>{b}</span>
                                                ))}
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setWasteListed((prev: number[]) => [...prev, item.id])}
                                        disabled={wasteListed.includes(item.id)}
                                        className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${wasteListed.includes(item.id) ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 cursor-not-allowed' : item.status === 'Urgent' ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20' : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20'}`}
                                    >
                                        {wasteListed.includes(item.id) ? 'Listed for Processing ✓' : 'List for Processing'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- NEW MODULE: CLUSTER MODE ENHANCEMENT --- */}
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        <div className="flex items-center gap-4 px-2">
                            <div className="p-2 bg-indigo-500/10 text-indigo-500 rounded-lg">
                                <Users2 className="w-5 h-5" />
                            </div>
                            <h2 className={`text-xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                Cooperative Cluster Mode
                            </h2>
                            <div className="ml-auto flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 rounded-xl text-[10px] font-black tracking-widest uppercase">
                                <BadgeCheck className="w-3.5 h-3.5" /> Verified
                            </div>
                        </div>

                        <div className={`relative w-full rounded-[2.5rem] overflow-hidden border shadow-sm group ${isDarkMode ? 'border-white/10 bg-[#101b13]/80' : 'border-black/5 bg-white/70'}`}>
                            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1200&auto=format&fit=crop"
                                    fill
                                    alt="Cluster collaboration"
                                    className="object-cover opacity-10 blur-sm scale-105 group-hover:scale-100 transition-transform duration-1000"
                                />
                            </div>
                            <div className="relative z-10 p-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className={`text-2xl font-black tracking-tight mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Guntur Tomato Cluster</h3>
                                            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-emerald-200/60' : 'text-slate-500'}`}>By pooling harvests, cluster members unlock wholesale pricing and split transportation costs. Joint target: 20 Tons.</p>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                                                <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>Revenue Target</span>
                                                <span className="text-emerald-500">65% Achieved</span>
                                            </div>
                                            <div className={`h-3 rounded-full overflow-hidden ${isDarkMode ? 'bg-black/40' : 'bg-slate-200'}`}>
                                                <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full" style={{ width: '65%' }} />
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="flex -space-x-3">
                                                {nearbyFarmers.map(f => (
                                                    <div key={f.id} className={`w-10 h-10 rounded-full border-2 overflow-hidden ${isDarkMode ? 'border-[#101b13]' : 'border-white'}`}>
                                                        <img src={f.image} alt="farmer" className="w-full h-full object-cover" />
                                                    </div>
                                                ))}
                                                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold ${isDarkMode ? 'border-[#101b13] bg-indigo-900/50 text-indigo-300' : 'border-white bg-indigo-100 text-indigo-600'}`}>
                                                    +12
                                                </div>
                                            </div>
                                            <span className={`text-xs font-bold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Active Members</span>
                                        </div>

                                        <button
                                            onClick={() => setJoinCluster(!joinCluster)}
                                            className={`w-full py-4 text-sm font-bold uppercase tracking-widest rounded-2xl transition-all shadow-lg ${joinCluster ? 'bg-indigo-900/40 text-indigo-300 border border-indigo-500/30 shadow-none' : 'bg-gradient-to-r from-indigo-600 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 text-white shadow-indigo-500/20 active:scale-95'}`}
                                        >
                                            {joinCluster ? 'Member Joined ✓' : 'Join Cluster & Pool Resources'}
                                        </button>
                                    </div>

                                    {/* Mini Cluster Analytics */}
                                    <div className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-black/30 border-white/5' : 'bg-slate-50 border-black/5'} shadow-inner flex flex-col items-center justify-center h-full min-h-[200px]`}>
                                        <div className="w-full flex justify-between items-end h-32 px-2 gap-2">
                                            {[20, 35, 15, 60, 45, 80, 50].map((val, i) => (
                                                <div key={i} className="group relative w-full h-full flex items-end justify-center">
                                                    <div
                                                        className={`w-full max-w-[1.5rem] rounded-t-md transition-all duration-500 ease-out flex group-hover:bg-indigo-400 ${i === 5 ? 'bg-emerald-500' : isDarkMode ? 'bg-white/10' : 'bg-slate-300'}`}
                                                        style={{ height: `${val}%` }}
                                                    />
                                                    <div className={`absolute -top-8 bg-black text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20`}>
                                                        Week {i + 1}: {val}T
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <p className={`text-xs font-bold uppercase tracking-widest mt-6 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                            Cluster Performance Over Time
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* AI OUTPUT & SUGGESTIONS RIGHT COLUMN */}
                <div className="space-y-10">

                    {/* Insights Block */}
                    <div className={`rounded-[2.5rem] p-8 border shadow-sm backdrop-blur-2xl ${isDarkMode ? 'bg-[#101b13]/80 border-white/10' : 'bg-white/70 border-black/5'}`}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
                                <Lightbulb className="w-5 h-5" />
                            </div>
                            <h3 className={`text-xl font-bold tracking-tight inline-flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                AI Insights
                            </h3>
                        </div>

                        <div className="space-y-5">
                            <div className={`p-5 rounded-2xl flex gap-4 ${isDarkMode ? 'bg-amber-500/10 text-amber-100' : 'bg-amber-50 text-amber-900'}`}>
                                <AlertTriangle className="text-amber-500 w-6 h-6 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-sm tracking-wide">Spoilage Risk Detected</h4>
                                    <p className={`text-sm mt-1 leading-relaxed ${isDarkMode ? 'text-amber-200/70' : 'text-amber-700/80'}`}>Tomatoes in Plot A will overripe in 48 hours. Secure transport immediately.</p>
                                </div>
                            </div>

                            <div className={`p-5 rounded-2xl flex gap-4 ${isDarkMode ? 'bg-sky-500/10 text-sky-100' : 'bg-sky-50 text-sky-900'}`}>
                                <CloudSun className="text-sky-400 w-6 h-6 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-sm tracking-wide">Weather Forecast (7 Days)</h4>
                                    <p className={`text-sm mt-1 leading-relaxed ${isDarkMode ? 'text-sky-200/70' : 'text-sky-700/80'}`}>Heavy rains expected Friday. Secure uncovered yields prior.</p>
                                </div>
                            </div>

                            <div className={`p-5 rounded-2xl flex gap-4 ${isDarkMode ? 'bg-emerald-500/10 text-emerald-100' : 'bg-emerald-50 text-emerald-900'}`}>
                                <TrendingUp className="text-emerald-500 w-6 h-6 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-sm tracking-wide">Market Demand Spike</h4>
                                    <p className={`text-sm mt-1 leading-relaxed ${isDarkMode ? 'text-emerald-200/70' : 'text-emerald-700/80'}`}>Demand for organic Wheat has spiked 12% in local districts.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Commitments Block */}
                    <div className={`rounded-[2.5rem] p-8 border shadow-sm backdrop-blur-2xl ${isDarkMode ? 'bg-[#101b13]/80 border-white/10' : 'bg-white/70 border-black/5'}`}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <h3 className={`text-xl font-bold tracking-tight inline-flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                Pre-Commitments
                            </h3>
                        </div>

                        <div className="space-y-5">
                            <div className={`p-5 rounded-[1.5rem] border transition-all ${commitmentStatus === 'Accepted' ? 'bg-emerald-500/10 border-emerald-500/50' : commitmentStatus === 'Declined' ? 'bg-red-500/10 border-red-500/50' : isDarkMode ? 'bg-[#051006]/50 border-white/10' : 'bg-white border-slate-200'} shadow-sm`}>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className={`font-bold text-lg tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>FreshMarket Valley</h4>
                                        <p className={`text-xs font-bold uppercase tracking-widest text-emerald-500 mt-1`}>Request: 0.5T Tomatoes</p>
                                    </div>
                                    <span className={`px-3 py-1 text-[10px] font-bold uppercase rounded-md border ${commitmentStatus === 'Accepted' ? 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30' : commitmentStatus === 'Declined' ? 'bg-red-500/20 text-red-500 border-red-500/30' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>
                                        {commitmentStatus}
                                    </span>
                                </div>
                                {commitmentStatus === 'Pending' && (
                                    <div className="flex gap-3 mt-5">
                                        <button onClick={() => setCommitmentStatus('Accepted')} className="flex-1 py-3 text-xs font-bold uppercase tracking-widest bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-transform active:scale-95 shadow-sm">Accept</button>
                                        <button onClick={() => setCommitmentStatus('Declined')} className="flex-1 py-3 text-xs font-bold uppercase tracking-widest bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 text-slate-700 rounded-xl transition-transform active:scale-95">Decline</button>
                                    </div>
                                )}
                                {commitmentStatus === 'Accepted' && (
                                    <p className="mt-4 text-xs font-bold text-emerald-600 dark:text-emerald-400">✅ Contract Initiated. Logistics notified.</p>
                                )}
                                {commitmentStatus === 'Declined' && (
                                    <p className="mt-4 text-xs font-bold text-red-600 dark:text-red-400">❌ Offer Rejected. Buyer notified.</p>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* PART 2 & 3: NEARBY FARMERS & WASTE MANAGEMENT */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                {/* NEARBY FARMERS (30km Radius) */}
                <div className={`relative p-8 rounded-[2.5rem] border shadow-sm overflow-hidden group/nearby ${isDarkMode ? 'border-emerald-900/50 bg-[#051006]/80' : 'border-emerald-200 bg-white/70'} backdrop-blur-2xl hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] transition-all duration-500`}>
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        <Image src="https://images.unsplash.com/photo-1592424001844-ba3671239537?q=80&w=2000&auto=format&fit=crop" alt="Farming Background" fill className="object-cover sepia-[0.3] blur-[1px] transform group-hover/nearby:scale-105 transition-transform duration-1000" />
                    </div>

                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center justify-between border-b pb-4 border-emerald-500/20">
                            <h2 className={`text-2xl font-black tracking-tight flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                <Users className="w-6 h-6 text-emerald-500" /> Community Within 30km
                            </h2>
                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1">
                                <Navigation2 className="w-3 h-3" /> Live
                            </span>
                        </div>

                        {/* Top Farmer Analytics Trend */}
                        <div className={`p-5 rounded-2xl flex items-end gap-6 justify-between border ${isDarkMode ? 'bg-[#102b17]/50 border-emerald-900/50' : 'bg-emerald-50 border-emerald-200'} shadow-inner`}>
                            <div>
                                <h3 className={`text-xs font-bold uppercase tracking-widest mb-1 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>6-Month Yield Trend</h3>
                                <div className="text-3xl font-black text-white flex items-center gap-2">24.5<span className="text-sm font-bold text-emerald-500">Tons</span></div>
                            </div>

                            {/* Animated Bars */}
                            <div className="flex items-end gap-1.5 h-12">
                                {[40, 60, 45, 80, 55, 95].map((h, i) => (
                                    <div key={i} className={`w-3 rounded-t-sm bg-gradient-to-t from-emerald-600 to-emerald-400 group-hover/nearby:animate-[grow_1s_ease-out_forwards]`} style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }} title={`Month ${i + 1}`} />
                                ))}
                            </div>
                        </div>

                        {/* Farmer Cards */}
                        <div className="space-y-4">
                            {[
                                { name: "Ramesh K.", crop: "Tomatoes", dist: "12 km", yield: "Up", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=100&auto=format&fit=crop", status: "Available" },
                                { name: "Venkat Rao", crop: "Wheat", dist: "24 km", yield: "Down", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=100&auto=format&fit=crop", status: "Low Stock" }
                            ].map((f, i) => (
                                <div key={i} className={`flex items-center gap-4 p-4 rounded-[1.5rem] border transition-colors hover:border-emerald-500/50 cursor-pointer ${isDarkMode ? 'bg-[#0a1a0c] border-emerald-900/50' : 'bg-white border-black/5'} shadow-sm group/farmer`}>
                                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-inner shrink-0">
                                        <Image src={f.img} alt={f.crop} fill className="object-cover group-hover/farmer:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h4 className={`font-bold tracking-tight text-base ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{f.name}</h4>
                                            <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${f.status === 'Available' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-500'}`}>{f.status}</span>
                                        </div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-500/70 mt-0.5 flex items-center gap-1"><MapPin className="w-3 h-3" /> {f.dist}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-xs font-bold uppercase flex items-center gap-1 justify-end ${f.yield === 'Up' ? 'text-emerald-400' : 'text-red-400'}`}>
                                            {f.yield === 'Up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />} Yield
                                        </div>
                                        {/* Mini Earnings Bar Graph */}
                                        <div className="flex gap-0.5 h-3 justify-end mt-1">
                                            {[20, 50, 80, 30].map((v, idx) => (
                                                <div key={idx} className={`w-1 ${f.yield === 'Up' ? 'bg-emerald-500' : 'bg-slate-500'} opacity-60 rounded-full`} style={{ height: `${v}%` }} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* WASTE MANAGEMENT MODULE */}
                <div className={`relative p-8 rounded-[2.5rem] border shadow-sm overflow-hidden group/waste ${isDarkMode ? 'bg-gradient-to-br from-[#101b13] to-[#0a150c] border-emerald-900/50' : 'bg-gradient-to-br from-emerald-50 to-white border-emerald-200'} backdrop-blur-2xl`}>

                    <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover/waste:scale-110 transition-transform duration-1000">
                        <Recycle className="w-48 h-48 text-emerald-500" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-center justify-between border-b pb-4 border-emerald-500/20 mb-6">
                            <h2 className={`text-2xl font-black tracking-tight flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                <Recycle className="w-6 h-6 text-emerald-500" /> Harvest Waste Optimization
                            </h2>
                        </div>

                        <p className={`text-sm font-medium mb-6 ${isDarkMode ? 'text-emerald-200/70' : 'text-slate-600'}`}>
                            Don&apos;t let near-expiry yields go to waste. Sell directly to dryers, pickle manufacturers, and food processors instantly.
                        </p>

                        <div className={`p-6 rounded-[2rem] border relative overflow-hidden flex flex-col h-full ${isDarkMode ? 'bg-[#051006]/50 border-amber-900/50' : 'bg-amber-50 border-amber-200'}`}>

                            {/* Urgent Glow effect behind card */}
                            <div className="absolute inset-0 bg-amber-500/5 animate-pulse pointer-events-none" />

                            <div className="flex justify-between items-start relative z-10 mb-4">
                                <div>
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Tomatoes (Grade B)</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-500/80 mt-1">Surplus: 1.2 Tons</p>
                                </div>
                                <div className="flex flex-col items-center p-2 bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-500 animate-[pulse_2s_infinite]">
                                    <Timer className="w-5 h-5 mb-1" />
                                    <span className="text-[10px] font-black tracking-widest uppercase">48h Left</span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6 relative z-10 flex-1">
                                <div className={`p-3 rounded-xl text-xs font-bold tracking-widest uppercase flex items-center justify-between border ${isDarkMode ? 'bg-[#0a1a0c] border-emerald-900' : 'bg-white border-emerald-100'} text-emerald-400`}>
                                    <span className="flex items-center gap-2"><Factory className="w-4 h-4" /> Potential Buyers</span>
                                    <span>2 Processors</span>
                                </div>
                                <div className={`p-3 rounded-xl text-xs font-bold tracking-widest uppercase flex items-center justify-between border ${isDarkMode ? 'bg-[#0a1a0c] border-emerald-900' : 'bg-white border-emerald-100'} text-emerald-400`}>
                                    <span className="flex items-center gap-2"><IndianRupee className="w-4 h-4" /> Est. Recovery</span>
                                    <span>₹8,500</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsWasteListed(true)}
                                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg transition-transform active:scale-95 duration-300 relative z-10 ${isWasteListed ? 'bg-emerald-800 text-white cursor-not-allowed border border-emerald-700/50' : 'bg-amber-500 hover:bg-amber-400 text-amber-950 border-t border-amber-400'}`}
                            >
                                {isWasteListed ? 'Listed to Processors' : 'List for Processing Now'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* PART 4: CLUSTER MODE ENHANCEMENT */}
            <div className={`relative p-8 md:p-12 mt-10 rounded-[2.5rem] border shadow-lg overflow-hidden group/cluster ${isDarkMode ? 'bg-[#051006]/90 border-emerald-900/50' : 'bg-white/90 border-emerald-100'} backdrop-blur-2xl`}>
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <Image src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2000&auto=format&fit=crop" alt="Cooperative Background" fill className="object-cover sepia-[0.2] blur-[2px] transform group-hover/cluster:scale-105 transition-transform duration-1000" />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-emerald-500/30 flex items-center gap-1 shadow-sm">
                                <ShieldCheck className="w-3 h-3" /> FPO Verified
                            </span>
                            <span className="px-3 py-1 bg-sky-500/20 text-sky-400 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-sky-500/30 flex items-center gap-1 shadow-sm">
                                <Briefcase className="w-3 h-3" /> Block Project
                            </span>
                        </div>

                        <h2 className={`text-4xl sm:text-5xl font-black tracking-tight mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                            Nalgonda Tomato Cluster
                        </h2>

                        <p className={`text-base font-medium mb-8 leading-relaxed max-w-lg ${isDarkMode ? 'text-emerald-200/80' : 'text-slate-600'}`}>
                            Join 42 other local farmers pooling harvests to secure high-tier buyer contracts at premium market rates.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 mb-8">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a1a0c] bg-emerald-800 relative overflow-hidden shadow-sm">
                                        <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" fill className="object-cover" unoptimized={isLowNetwork} />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-[#0a1a0c] bg-emerald-900 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">+37</div>
                            </div>
                            <div className={`text-sm font-bold uppercase tracking-widest ${isDarkMode ? 'text-emerald-500' : 'text-emerald-700'}`}>
                                <Activity className="w-4 h-4 inline mr-1 mb-0.5" /> High Activity
                            </div>
                        </div>

                        <button
                            onClick={() => setJoinedCluster(true)}
                            className={`py-4 px-8 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 active:scale-95 w-full sm:w-auto ${joinedCluster ? 'bg-emerald-900 text-emerald-400 border border-emerald-500/30 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-600 to-teal-500 hover:to-teal-400 text-white'}`}
                        >
                            {joinedCluster ? <UserCheck className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                            {joinedCluster ? 'Joined Cluster' : 'Join Premium Cluster'}
                        </button>
                    </div>

                    <div className={`p-8 rounded-[2.5rem] border shadow-2xl ${isDarkMode ? 'bg-[#0a1a0c]/80 border-emerald-900/50' : 'bg-white/80 border-black/5'} backdrop-blur-3xl`}>
                        <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                            <BarChart3 className="w-5 h-5 text-emerald-500" /> Cluster Performance
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <span className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-emerald-500/70' : 'text-slate-500'}`}>Target Volume Secure</span>
                                    <span className="text-xl font-black text-emerald-400">85%</span>
                                </div>
                                <div className={`h-3 rounded-full overflow-hidden shadow-inner ${isDarkMode ? 'bg-black/50' : 'bg-slate-200'}`}>
                                    <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-[#051006] border-emerald-900/30' : 'bg-emerald-50 border-emerald-100'}`}>
                                    <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isDarkMode ? 'text-emerald-500' : 'text-emerald-700'}`}>Revenue Pool</div>
                                    <div className={`text-lg font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>₹4.2M</div>
                                </div>
                                <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-[#051006] border-emerald-900/30' : 'bg-emerald-50 border-emerald-100'}`}>
                                    <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isDarkMode ? 'text-emerald-500' : 'text-emerald-700'}`}>Average Rate</div>
                                    <div className={`text-lg font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>₹1,950/q</div>
                                </div>
                            </div>

                            {/* Decor Bar chart */}
                            <div className="flex items-end justify-between h-20 px-2 mt-4 opacity-70">
                                {[20, 35, 30, 60, 50, 80, 75, 90, 85].map((h, i) => (
                                    <div key={i} className={`w-3 rounded-t-sm bg-gradient-to-t ${isDarkMode ? 'from-emerald-900 to-emerald-600' : 'from-emerald-200 to-emerald-400'}`} style={{ height: `${h}%` }} title={`Contrib ${i}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
