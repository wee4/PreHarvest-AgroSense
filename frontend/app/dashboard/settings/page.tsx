"use client";

import { Settings, User, Bell, Palette, Shield, Building2, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useAppContext } from "@/context/AppContext";

export default function SettingsPage() {
    const { isDarkMode, setIsDarkMode } = useAppContext();
    const [notifications, setNotifications] = useState(true);

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                        <Settings className="w-8 h-8 text-emerald-500" /> Account Settings
                    </h1>
                    <p className="text-slate-500 dark:text-emerald-200/60 font-medium mt-1">Manage your cooperative profile, preferences, and notifications.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Navigation Sidebar for Settings */}
                <div className="md:col-span-1 space-y-2">
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-500/20">
                        <User className="w-5 h-5" /> Profile
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-colors">
                        <Building2 className="w-5 h-5 opacity-50" /> Farm/Co-op Details
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-colors">
                        <Bell className="w-5 h-5 opacity-50" /> Notifications
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-colors">
                        <Palette className="w-5 h-5 opacity-50" /> Appearance
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 text-red-600 dark:text-red-400 font-bold rounded-xl transition-colors mt-8">
                        <Shield className="w-5 h-5 opacity-50" /> Privacy & KYC
                    </button>
                </div>

                {/* Settings Panel */}
                <div className="md:col-span-2 space-y-6">
                    <div className="p-8 rounded-[2rem] border shadow-sm bg-white dark:bg-[#101b13]/80 border-slate-200 dark:border-white/10">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Public Profile</h3>

                        <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-8">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-slate-100 dark:border-[#051006] shadow-md shrink-0">
                                <Image src="https://i.pravatar.cc/150?img=33" alt="Profile" fill className="object-cover" />
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">Ramu Kumar</h4>
                                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mt-1 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Kondapur Cluster</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-widest text-[10px] rounded-lg shadow-sm transition-transform active:scale-95">Change Avatar</button>
                                    <button className="px-5 py-2 border border-slate-200 dark:border-white/10 hover:border-slate-300 font-bold uppercase tracking-widest text-[10px] rounded-lg text-slate-600 dark:text-slate-400 transition-colors">Remove</button>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">First Name</label>
                                    <input type="text" defaultValue="Ramu" className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm font-medium dark:text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Last Name</label>
                                    <input type="text" defaultValue="Kumar" className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm font-medium dark:text-white" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Email Address</label>
                                <input type="email" defaultValue="ramu.kondapur@smartharvest.in" disabled className="w-full px-4 py-3 bg-slate-100 dark:bg-black/20 border border-slate-200 dark:border-white/5 rounded-xl text-sm font-medium text-slate-500 dark:text-slate-400 cursor-not-allowed" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Phone Number</label>
                                <input type="tel" defaultValue="+91 98765 43210" className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm font-medium dark:text-white" />
                            </div>
                        </form>
                    </div>

                    <div className="p-8 rounded-[2rem] border shadow-sm bg-white dark:bg-[#101b13]/80 border-slate-200 dark:border-white/10">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Global Preferences</h3>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Dark Mode</h4>
                                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 max-w-[200px] sm:max-w-xs">Switch to a darker theme optimized for low light conditions.</p>
                                </div>
                                <button
                                    onClick={() => setIsDarkMode(!isDarkMode)}
                                    className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${isDarkMode ? 'bg-emerald-500' : 'bg-slate-300'}`}
                                >
                                    <span className="sr-only">Use dark mode</span>
                                    <span aria-hidden="true" className={`pointer-events-none absolute left-0 inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition-transform duration-200 ease-in-out ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`} />
                                </button>
                            </div>

                            <hr className="border-slate-100 dark:border-white/5" />

                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">SMS Alerts</h4>
                                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 max-w-[200px] sm:max-w-xs">Receive critical procurement updates directly via text message.</p>
                                </div>
                                <button
                                    onClick={() => setNotifications(!notifications)}
                                    className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${notifications ? 'bg-emerald-500' : 'bg-slate-300'}`}
                                >
                                    <span className="sr-only">Enable SMS alerts</span>
                                    <span aria-hidden="true" className={`pointer-events-none absolute left-0 inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition-transform duration-200 ease-in-out ${notifications ? 'translate-x-6' : 'translate-x-0'}`} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-transform active:scale-95 uppercase tracking-widest text-xs">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div >
        </div >
    );
}