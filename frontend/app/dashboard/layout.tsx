"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Menu, WifiOff, Wifi, CloudOff, RefreshCw, Sun, Moon, Globe, Bot, X, Mic } from "lucide-react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const { networkMode, setNetworkMode, isDarkMode, setIsDarkMode, lastSynced, syncNow, activeNetwork } = useAppContext();
    const pathname = usePathname();

    const getBgImage = () => {
        if (pathname.includes('/ao')) return "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2000&auto=format&fit=crop"; // Wheat field
        if (pathname.includes('/fpo')) return "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2000&auto=format&fit=crop"; // Farmers cooperative field
        if (pathname.includes('/buyer')) return "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2000&auto=format&fit=crop"; // Village crops
        if (pathname.includes('/transport')) return "https://images.unsplash.com/photo-1586771107445-d3af31f24e93?q=80&w=2000&auto=format&fit=crop"; // Tractor in field
        return "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2000&auto=format&fit=crop"; // Farmer watering crops
    };

    const isLowNetwork = activeNetwork === "2g";

    return (
        <div className={`min-h-screen text-slate-800 transition-colors duration-500 flex flex-col md:flex-row font-sans relative ${isDarkMode ? 'dark' : ''}`}>

            {/* Immersive Farming Layout Background */}
            <div className={`fixed inset-0 pointer-events-none -z-20 ${!isLowNetwork ? "bg-parallax" : ""}`}>
                <Image
                    src={isLowNetwork ? "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=10&w=400&auto=format&fit=crop" : getBgImage()}
                    alt="Lush farm field background"
                    fill
                    className={`object-cover object-center ${!isLowNetwork ? "saturate-110 opacity-70 blur-[2px]" : "saturate-50 opacity-40 blur-[4px]"}`}
                    unoptimized={isLowNetwork}
                />
                {/* Clean frosty glass overlay to make UI pop */}
                <div className={`absolute inset-0 backdrop-blur-md bg-gradient-to-t from-[#051006]/90 via-[#0a1a0c]/80 to-[#051006]/70`} />
            </div>

            <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

            {/* Main Content Area */}
            <main className="flex-1 md:ml-72 relative min-h-screen flex flex-col z-10 w-full overflow-hidden transition-all duration-300">

                {/* Top Header & Network Controls */}
                <header className={`sticky top-0 left-0 right-0 h-20 border-b backdrop-blur-2xl z-30 flex items-center justify-between px-6 sm:px-10 shadow-sm ${isDarkMode ? 'border-white/10 bg-[#0f1712]/60' : 'border-black/5 bg-white/40'}`}>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`md:hidden p-2 rounded-xl transition-colors ${isDarkMode ? 'text-emerald-400 hover:bg-white/10' : 'text-emerald-700 hover:bg-black/5'}`}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <div className="hidden md:flex flex-col">
                            <span className={`text-sm font-black uppercase tracking-widest ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>Smart Harvest</span>
                            <span className={`text-xs font-medium ${isDarkMode ? 'text-emerald-200/50' : 'text-slate-500'}`}>AI Cooperative Module</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-6">
                        {/* Quick Actions */}
                        <div className={`hidden sm:flex items-center gap-3 border-r pr-6 mr-2 ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-emerald-200 hover:bg-white/10' : 'text-slate-600 hover:bg-black/5'}`}>
                                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                            <button
                                onClick={() => alert("Global localization settings opening...")}
                                className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-emerald-200 hover:bg-white/10' : 'text-slate-600 hover:bg-black/5'}`}
                            >
                                <Globe className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Network Mode Selector */}
                        <div className={`p-2 sm:px-4 sm:py-2.5 rounded-2xl flex items-center gap-3 border shadow-sm backdrop-blur-xl transition-colors ${isLowNetwork ? (isDarkMode ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-red-50 border-red-200 text-red-600') : (isDarkMode ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-white border-emerald-100 text-emerald-700')}`}>
                            {!isLowNetwork ? <Wifi className="w-4 h-4 sm:w-5 sm:h-5 hidden sm:block" /> : <WifiOff className="w-4 h-4 sm:w-5 sm:h-5 hidden sm:block" />}
                            <select
                                value={networkMode}
                                onChange={(e) => setNetworkMode(e.target.value as "smart" | "full" | "3g" | "2g")}
                                className="bg-transparent font-bold text-xs sm:text-sm uppercase tracking-wide focus:outline-none cursor-pointer appearance-none"
                            >
                                <option value="smart">Auto Network</option>
                                <option value="full">Full Mode (5G)</option>
                                <option value="3g">Balanced (3G)</option>
                                <option value="2g">Offline (2G)</option>
                            </select>
                        </div>
                    </div>
                </header>

                {/* 2G Offline Warning Banner */}
                {isLowNetwork && (
                    <div className="w-full bg-red-600 text-white px-6 py-3 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md relative z-20">
                        <div className="flex items-center gap-3">
                            <CloudOff className="w-5 h-5 animate-pulse" />
                            <span>Low Network Mode Enabled</span>
                        </div>
                        <div className="flex items-center gap-4 mt-3 sm:mt-0">
                            <span className="text-red-200 border-r border-red-400 pr-4">Last Synced: {lastSynced}</span>
                            <button onClick={syncNow} className="px-4 py-1.5 bg-red-800 hover:bg-red-900 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                                <RefreshCw className="w-4 h-4" /> Sync
                            </button>
                        </div>
                    </div>
                )}

                {/* Page Content */}
                <div className="p-4 md:p-6 lg:p-8 flex-1 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 pb-32">
                    <div className="w-full text-left">
                        {children}
                    </div>
                </div>

            </main>

            {/* Persistent AI Chat Assistant */}
            <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
                {chatOpen && (
                    <div className={`mb-6 w-80 sm:w-96 h-[400px] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 border ${isDarkMode ? 'bg-[#152319] border-white/10' : 'bg-white border-black/5'}`}>
                        <div className={`p-5 border-b flex justify-between items-center ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-black/5'}`}>
                            <div className="flex items-center gap-3">
                                <Bot className={`w-6 h-6 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                                <span className={`font-bold text-sm tracking-wide ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>AgriBot</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <select onChange={(e) => alert("Selected: " + e.target.value)} className={`text-xs font-bold uppercase tracking-widest bg-transparent border-none focus:ring-0 cursor-pointer appearance-none ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                                    <option value="en">English</option>
                                    <option value="te">తెలుగు</option>
                                    <option value="hi">हिन्दी</option>
                                </select>
                                <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-red-500 transition-colors ml-1"><X className="w-5 h-5" /></button>
                            </div>
                        </div>
                        <div className="flex-1 p-6 overflow-y-auto space-y-4">
                            <div className={`p-4 rounded-2xl rounded-tl-sm text-sm shadow-sm border ${isDarkMode ? 'bg-[#1b2f15] border-transparent text-emerald-50' : 'bg-emerald-50 border-emerald-100 text-slate-700'} leading-relaxed`}>
                                Hello there! {isLowNetwork ? "I am running locally offline right now." : "The current market price for Wheat is rising. I suggest aiming for a harvest on Thursday!"} <br /><br />How can I help you?
                            </div>
                        </div>
                        <div className={`p-3 sm:p-4 border-t flex gap-2 items-center ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-black/5 bg-white'}`}>
                            <button
                                onClick={() => alert("Voice input listening... (speak now)")}
                                className={`p-2 rounded-xl transition-colors shadow-sm ${isDarkMode ? 'bg-black/40 hover:bg-black/60 text-emerald-400' : 'bg-slate-100 hover:bg-slate-200 text-emerald-600'}`} title="Voice Input"
                            >
                                <Mic className="w-5 h-5 animate-pulse" />
                            </button>
                            <input type="text" placeholder="Type or use voice..." className={`flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow ${isDarkMode ? 'bg-black/40 text-white placeholder-slate-500' : 'bg-slate-100 text-slate-800 placeholder-slate-400'}`} />
                        </div>
                    </div>
                )}
                <button
                    onClick={() => setChatOpen(!chatOpen)}
                    className="p-5 bg-gradient-to-tr from-emerald-600 to-teal-500 text-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
                >
                    <Bot className="w-8 h-8 group-hover:scale-110 transition-transform" />
                </button>
            </div>

        </div>
    );
}
