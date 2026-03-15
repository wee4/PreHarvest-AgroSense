import re

with open('frontend/app/dashboard/farmer/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add new icons to import
icons_to_add = ["MapPin", "Share2", "Users", "Users2", "Target", "Info", "ArrowUpRight", "ArrowDownRight", "CircleDashed", "Clock", "LeafyGreen", "Map", "BadgeCheck", "AlertOctagon", "Timer", "Play", "Activity", "Layers"]
import_statement = "import {\n    XSquare,\n    Star,\n    IndianRupee,\n    Sprout,\n    Upload,\n    BarChart3,\n    CloudSun,\n    AlertTriangle,\n    Lightbulb,\n    CheckCircle2,\n    Calendar,\n    XCircle,\n    TrendingUp,\n    LineChart,\n" + ",\n".join(["    " + icon for icon in icons_to_add]) + "\n} from \"lucide-react\";"

content = re.sub(r'import {[\s\S]*?} from "lucide-react";', import_statement, content)

# 2. Add sample data
sample_data = """
const nearbyFarmers = [
    { id: 1, name: "Ramesh Kumar", crop: "Organic Corn", distance: "4.2 km", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop", cropImg: "https://images.unsplash.com/photo-1550828520-4cb496924296?q=80&w=150&auto=format&fit=crop", trend: "up", earnings: [40, 60, 80, 50, 90], status: "Available" },
    { id: 2, name: "Suresh P", crop: "Tomatoes", distance: "8.5 km", image: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=150&auto=format&fit=crop", cropImg: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=150&auto=format&fit=crop", trend: "down", earnings: [90, 70, 50, 30, 40], status: "Low Stock" },
    { id: 3, name: "Venkat Rao", crop: "Wheat", distance: "14 km", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop", cropImg: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=150&auto=format&fit=crop", trend: "up", earnings: [20, 30, 50, 80, 100], status: "Available" }
];

const wasteItems = [
    { id: 1, crop: "Tomatoes (Grade C)", weight: "240 kg", expiry: "18h:20m", buyers: ["Kissan Ketchup", "Local Dryers"], value: "₹2,400", status: "Urgent", type: "expiry" },
    { id: 2, crop: "Potato Peelings", weight: "150 kg", expiry: "3d:12h", buyers: ["BioGas Co.", "Cattle Farm"], value: "₹800", status: "Fresh", type: "fresh" }
];
"""

content = content.replace("const mockCropsHistory = [", sample_data + "\nconst mockCropsHistory = [")

# 3. Add state variables
states_to_add = """
    const [joinCluster, setJoinCluster] = useState(false);
    const [wasteListed, setWasteListed] = useState<number[]>([]);
"""
content = content.replace("const [openedCrops, setOpenedCrops] = useState<number[]>([]);", "const [openedCrops, setOpenedCrops] = useState<number[]>([]);" + states_to_add)

# 4. Insert Cluster Mode + Waste Mgmt to Left Column
left_column_extra = """

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
                                        onClick={() => setWasteListed(prev => [...prev, item.id])}
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
                                                        Week {i+1}: {val}T
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

"""

# 5. Insert Nearby Farmers to Right Column
right_column_extra = """
                    {/* --- NEW MODULE: NEARBY FARMERS UPGRADE --- */}
                    <div className={`rounded-[2.5rem] p-8 border shadow-sm backdrop-blur-2xl ${isDarkMode ? 'bg-[#101b13]/80 border-white/10' : 'bg-white/70 border-black/5'} relative overflow-hidden group`}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none" />
                        
                        <div className="flex items-center justify-between gap-3 mb-8 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <h3 className={`text-xl font-bold tracking-tight inline-flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                    Farmers Within 30km
                                </h3>
                            </div>
                            <button onClick={()=>alert("Opened Map view")} className={`p-2 rounded-full border transition-colors ${isDarkMode ? 'border-white/10 hover:bg-white/10 text-emerald-400' : 'border-black/10 hover:bg-black/5 text-emerald-600'}`}>
                                <Map className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="space-y-4 relative z-10">
                            {nearbyFarmers.map(farmer => (
                                <div key={farmer.id} className={`p-5 rounded-[1.5rem] border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl ${isDarkMode ? 'bg-[#051006]/50 border-white/10 hover:border-emerald-500/30' : 'bg-white border-slate-200 hover:border-emerald-200'}`}>
                                    <div className="flex gap-4">
                                        <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-sm shrink-0 border border-white/10">
                                            <img src={farmer.image} alt={farmer.name} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-1 left-1.5 flex gap-0.5">
                                                <span className={`w-1.5 h-1.5 rounded-full ${farmer.status === 'Available' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                                            </div>
                                        </div>
                                        
                                        <div className="flex-1 flex flex-col justify-center">
                                            <div className="flex justify-between items-start mb-0.5">
                                                <h4 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'} truncate mr-2`}>{farmer.name}</h4>
                                                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border shrink-0 ${farmer.status === 'Available' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>
                                                    {farmer.status}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className={`text-xs font-bold ${isDarkMode ? 'text-emerald-400/80' : 'text-emerald-600'}`}>{farmer.crop}</span>
                                                <span className={`text-[10px] font-bold uppercase flex items-center ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                                    <MapPin className="w-3 h-3 mr-0.5" /> {farmer.distance}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={`mt-4 pt-4 border-t flex items-center justify-between ${isDarkMode ? 'border-white/10' : 'border-slate-100'}`}>
                                        <div className="flex flex-col">
                                            <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-400'} mb-1`}>6M Yield Trend</span>
                                            <div className="flex items-end gap-1 h-6">
                                                {farmer.earnings.map((e, idx) => (
                                                    <div key={idx} className="group/bar relative flex items-end h-full">
                                                        <div 
                                                            className={`w-1.5 rounded-t-sm transition-all duration-300 group-hover/bar:bg-emerald-400 ${farmer.trend === 'up' ? 'bg-emerald-500/60' : 'bg-amber-500/60'}`}
                                                            style={{ height: `${e}%` }}
                                                        />
                                                    </div>
                                                ))}
                                                {farmer.trend === 'up' ? <TrendingUp className="w-3.5 h-3.5 text-emerald-500 ml-1 mb-0.5" /> : <TrendingUp className="w-3.5 h-3.5 text-amber-500 ml-1 mb-0.5 rotate-180 scale-x-[-1]" />}
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 rounded-xl overflow-hidden border shadow-sm shrink-0">
                                            <img src={farmer.cropImg} alt="crop" className="w-full h-full object-cover opacity-80" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
"""

# Now inject left_column_extra string at the end of the left column (after MY CROPS SECTION)
content = content.replace("</div>\n\n                {/* AI OUTPUT & SUGGESTIONS RIGHT COLUMN */}", left_column_extra + "                </div>\n\n                {/* AI OUTPUT & SUGGESTIONS RIGHT COLUMN */}")

# Inject right_column_extra string after the PRE-COMMITMENTS module
content = content.replace("</div>\n\n            </div>\n        </div>", right_column_extra + "                </div>\n\n            </div>\n        </div>")

# Finally, ensure global buttons without onClick have a handler
content = content.replace('className={`border-2 border-dashed rounded-[2rem] p-8 text-center transition-colors', 'onClick={() => alert("File upload dialog opened!")} className={`border-2 border-dashed rounded-[2rem] p-8 text-center transition-colors')

with open('frontend/app/dashboard/farmer/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

