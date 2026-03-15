"use client";

import { useState } from "react";
import { ArrowLeft, Sprout, Tractor, ShieldCheck, Users, Store, Truck, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [selectedRole, setSelectedRole] = useState("farmer");
    const [loggingIn, setLoggingIn] = useState(false);

    const roles = [
        { id: "farmer", label: "Farmer", icon: Tractor, desc: "List crops & predict yields", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=600&fit=crop" },
        { id: "ao", label: "Agri Officer", icon: ShieldCheck, desc: "Manage & verify villages", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&fit=crop" },
        { id: "fpo", label: "FPO", icon: Users, desc: "Coordinate farm clusters", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&fit=crop" },
        { id: "buyer", label: "Buyer", icon: Store, desc: "Procure commitments", image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=600&fit=crop" },
        { id: "transport", label: "Transporter", icon: Truck, desc: "Find routes & deliver", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=600&fit=crop" }
    ];

    const getSelectedRoleDetails = () => roles.find(r => r.id === selectedRole);

    const handleRoleSelect = (roleId: string) => {
        setSelectedRole(roleId);
        setStep(2);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoggingIn(true);
        setTimeout(() => {
            router.push(`/dashboard/${selectedRole}`);
        }, 1200);
    };

    return (
        <div className="min-h-screen font-sans text-emerald-50 flex items-center justify-center relative overflow-hidden">
            {/* Vibrant Global Agriculture Background */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2500&auto=format&fit=crop"
                    alt="Young crops growing in soil at sunset"
                    fill
                    className="object-cover object-center scale-[1.02] brightness-75 blur-[2px]"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
            </div>

            <div className={`relative z-10 w-full p-6 transition-all duration-700 ${step === 1 ? 'max-w-6xl' : 'max-w-xl'}`}>
                <div className={`p-8 md:p-14 bg-[#0a1a0ce6] backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-emerald-500/20 relative overflow-hidden transition-all duration-700 ${loggingIn ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>

                    <div className="flex items-center justify-between mb-8">
                        {step === 1 ? (
                            <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold transition-colors text-sm hover:translate-x-[-4px] duration-300">
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Homepage
                            </Link>
                        ) : (
                            <button onClick={() => setStep(1)} className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold transition-colors text-sm hover:translate-x-[-4px] duration-300">
                                <ArrowLeft className="w-4 h-4 mr-2" /> Change Role
                            </button>
                        )}

                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                                <Sprout className="w-6 h-6 text-emerald-400" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">AgriCircle</span>
                        </div>
                    </div>

                    {step === 1 ? (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-3xl font-black mb-2 text-white">Select Your Role</h2>
                            <p className="text-emerald-100/70 mb-8 font-medium">Choose how you participate in the AgriCircle ecosystem to continue.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                                {roles.map(r => (
                                    <button
                                        key={r.id}
                                        onClick={() => handleRoleSelect(r.id)}
                                        className={`group relative h-64 rounded-3xl overflow-hidden focus:outline-none transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.5)] border-2 ${r.id === selectedRole ? 'border-emerald-400' : 'border-emerald-900/50 hover:border-emerald-500/50'}`}
                                    >
                                        <div className="absolute inset-0 z-0 bg-black">
                                            <Image src={r.image} alt={r.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-90" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity group-hover:opacity-80" />
                                        </div>
                                        <div className="relative z-10 p-6 h-full flex flex-col justify-end text-left">
                                            <div className={`mb-auto w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${r.id === selectedRole ? 'bg-emerald-500 text-white border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]' : 'bg-black/50 text-emerald-400 border-white/20 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/40 group-hover:text-white'}`}>
                                                <r.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className={`font-black tracking-tight text-xl leading-tight mb-1 transition-colors ${r.id === selectedRole ? 'text-emerald-400' : 'text-white group-hover:text-emerald-300'}`}>{r.label}</h3>
                                            <p className="text-emerald-100/70 text-xs font-medium leading-relaxed drop-shadow-md">{r.desc}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-md mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
                            <div className="text-center mb-8">
                                <div className="mx-auto w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mb-4">
                                    <Lock className="w-8 h-8 text-emerald-400" />
                                </div>
                                <h2 className="text-3xl font-black mb-2 text-white">Welcome Back</h2>
                                <p className="text-emerald-100/70 font-medium">
                                    Logging in as <span className="text-emerald-400 font-bold">{getSelectedRoleDetails()?.label}</span>
                                </p>
                            </div>

                            <form onSubmit={handleLogin} className="space-y-6">
                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest pl-1">Email / Phone</label>
                                        <input
                                            type="text"
                                            className="w-full bg-[#051006]/80 border border-emerald-900/50 rounded-2xl px-5 py-4 text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-emerald-900/50 hover:border-emerald-500/30 font-medium"
                                            placeholder="Enter your credentials"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest pl-1">Secure Passcode</label>
                                        <input
                                            type="password"
                                            className="w-full bg-[#051006]/80 border border-emerald-900/50 rounded-2xl px-5 py-4 text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-emerald-900/50 hover:border-emerald-500/30 font-medium"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loggingIn}
                                    className="w-full py-5 mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.03] shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-3 disabled:opacity-70 disabled:scale-100"
                                >
                                    {loggingIn ? (
                                        <>
                                            <Sprout className="w-5 h-5 animate-pulse" />
                                            Authenticating...
                                        </>
                                    ) : (
                                        "Secure Login"
                                    )}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
