"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Sprout,
    LayoutDashboard,
    Store,
    Truck,
    TrendingUp,
    BrainCircuit,
    Settings,
    LogOut,
    X,
    Users2,
    Recycle,
    Workflow
} from "lucide-react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

// nav items generate dynamically

interface SidebarProps {
    isOpen?: boolean;
    setIsOpen?: (val: boolean) => void;
}

export default function Sidebar({ isOpen = false, setIsOpen }: SidebarProps) {
    const pathname = usePathname();
    const { isDarkMode, activeNetwork } = useAppContext();
    const isLowNetwork = activeNetwork === "2g";

    const getNavItems = () => {
        if (pathname.includes('/ao')) {
            return [
                { name: "AO Dashboard", href: "/dashboard/ao", icon: LayoutDashboard },
                { name: "Farmer Registry", href: "/dashboard/ao/farmers", icon: Sprout },
            ];
        }
        if (pathname.includes('/fpo')) {
            return [
                { name: "FPO HQ", href: "/dashboard/fpo", icon: LayoutDashboard },
                { name: "Clusters", href: "/dashboard/fpo/clusters", icon: Store },
            ];
        }
        if (pathname.includes('/buyer')) {
            return [
                { name: "Procurement", href: "/dashboard/buyer", icon: Store },
                { name: "My Fleet", href: "/dashboard/buyer/fleet", icon: Truck },
            ];
        }
        if (pathname.includes('/transport')) {
            return [
                { name: "Fleet Console", href: "/dashboard/transport", icon: Truck },
                { name: "Active Routes", href: "/dashboard/transport/routes", icon: TrendingUp },
            ];
        }
        return [
            { name: "Overview", href: "/dashboard/farmer", icon: LayoutDashboard },
            { name: "My Crops", href: "/dashboard/farmer/crops", icon: Sprout },
            { name: "ML Predictor", href: "/dashboard/predictor", icon: BrainCircuit },
            { name: "Commitments", href: "/dashboard/farmer/commitments", icon: Store },
            { name: "Nearby Farmers", href: "/dashboard/farmer/nearby", icon: Users2 },
            { name: "Waste Hub", href: "/dashboard/farmer/waste", icon: Recycle },
            { name: "Cluster Network", href: "/dashboard/farmer/clusters", icon: Workflow },
        ];
    };

    const navItems = getNavItems();

    return (
        <>
            {/* Mobile Backdrop Overlay */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
                    onClick={() => setIsOpen?.(false)}
                />
            )}

            {/* Sidebar Body */}
            <aside className={`fixed top-0 left-0 h-screen w-72 border-r shadow-[20px_0_50px_rgba(0,0,0,0.1)] flex flex-col z-50 transition-transform duration-300 ease-in-out overflow-hidden backdrop-blur-2xl ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                } ${isDarkMode ? 'bg-[#051006]/95 border-emerald-900/50' : 'bg-[#1b2f15]/90 border-[#2e1503]/20'}`}>

                {/* Textured overlay for Sidebar */}
                {!isLowNetwork && (
                    <div className="absolute inset-0 z-0 opacity-10 mix-blend-screen pointer-events-none">
                        <Image
                            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop"
                            alt="Leafy sidebar texture"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="relative z-10 flex flex-col h-full">

                    {/* Brand */}
                    <div className={`p-6 flex items-center justify-between border-b pb-6 ${isDarkMode ? 'border-emerald-900/50' : 'border-[#0a1a0c]/20'}`}>
                        <Link href="/" className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl shadow-inner border ${isDarkMode ? 'bg-[#0a1a0c] border-emerald-800' : 'bg-[#253f1d] border-emerald-600'}`}>
                                <Sprout className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]" />
                            </div>
                            <span className={`text-2xl font-black tracking-tight font-serif uppercase ${isDarkMode ? 'text-[#f2f7ec]' : 'text-emerald-50'}`}>
                                Smart<span className="text-emerald-400">Harvest</span>
                            </span>
                        </Link>
                        <button
                            className="md:hidden text-emerald-400 hover:text-white p-1 rounded-md transition-colors"
                            onClick={() => setIsOpen?.(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 space-y-2 overflow-y-auto mt-6 sidebar-scroll">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen?.(false)}
                                    className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 relative group overflow-hidden ${isActive
                                        ? (isDarkMode ? "bg-emerald-900/40 text-emerald-300 border border-emerald-500/30" : "bg-[#253f1d] text-emerald-100 border border-[#406834]")
                                        : (isDarkMode ? "text-emerald-100/70 hover:text-emerald-100 hover:bg-emerald-900/20" : "text-emerald-100/70 hover:text-white hover:bg-[#253f1d]/50")
                                        }`}
                                >
                                    <div className={`p-1.5 rounded-lg transition-all duration-300 ${isActive ? 'bg-black/20 shadow-inner' : 'bg-transparent'}`}>
                                        <Icon className={`w-[20px] h-[20px] transition-transform duration-300 ${isActive ? "text-emerald-400 scale-110 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" : "text-emerald-200/70 group-hover:text-emerald-200"}`} />
                                    </div>
                                    <span className="tracking-wide font-bold text-sm uppercase whitespace-nowrap">{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer / User Settings */}
                    <div className={`p-4 border-t space-y-2 bg-black/20 backdrop-blur-md ${isDarkMode ? 'border-emerald-900/50' : 'border-[#0a1a0c]/20'}`}>
                        <Link
                            href="/dashboard/settings"
                            onClick={() => setIsOpen?.(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-black uppercase tracking-widest ${isDarkMode ? 'text-emerald-100/70 hover:text-emerald-100 hover:bg-emerald-900/30' : 'text-emerald-100/70 hover:text-white hover:bg-[#253f1d]/50'}`}
                        >
                            <Settings className="w-[18px] h-[18px] text-emerald-400" />
                            <span>Co-op Settings</span>
                        </Link>
                        <Link
                            href="/login"
                            onClick={() => setIsOpen?.(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-950/40 transition-colors text-sm font-black uppercase tracking-widest border border-transparent hover:border-red-900/50"
                        >
                            <LogOut className="w-[18px] h-[18px]" />
                            <span>Leave Village</span>
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}
