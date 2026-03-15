"use client";

import Link from "next/link";
import Image from "next/image";
import { Sprout, Users, Tractor, Store, Truck, ShieldCheck, Leaf, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-50 font-sans selection:bg-emerald-500/30 relative">
      {/* GLOBAL BACKGROUND SECTION */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1592424001844-ba3671239537?q=80&w=2500&auto=format&fit=crop"
          alt="Lush farming landscape at sunrise"
          fill
          className="object-cover object-center brightness-75 blur-[2px] scale-[1.02]"
          priority
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">

        {/* Subtle Floating Graphics */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
          <Leaf className="w-12 h-12 text-emerald-400 absolute top-[20%] left-[10%] animate-[float_10s_ease-in-out_infinite]" />
          <Leaf className="w-8 h-8 text-emerald-300 absolute top-[40%] right-[15%] animate-[float_12s_ease-in-out_infinite_reverse]" />
          <Leaf className="w-16 h-16 text-emerald-500 absolute bottom-[30%] left-[20%] animate-[float_15s_ease-in-out_infinite]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-20">
          <div className="max-w-4xl flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-8">
              <Sprout className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-bold tracking-widest uppercase text-emerald-300">Welcome to AgriCircle AI</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
              AI Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Farming Ecosystem.</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100/90 mb-12 max-w-2xl leading-relaxed font-light drop-shadow-md">
              Empowering rural villages, farmers, and markets through intelligent coordination, pre-harvest commitments, and seamless logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/login" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] text-lg">
                Get Started <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROLES SECTION */}
      <section className="py-32 relative overflow-hidden">

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">A Complete <span className="text-emerald-400">Ecosystem</span></h2>
            <p className="text-emerald-100/70 max-w-2xl mx-auto text-xl font-light">Connecting every stakeholder in the agricultural supply chain using verified roles and intelligent tools.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
            {[
              { title: "Farmer", icon: Tractor, desc: "List crops, predict yields, and secure buyers seamlessly.", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef4522?q=80&w=800&fit=crop" },
              { title: "Agri Officer", icon: ShieldCheck, desc: "Activate uneducated farmers and manage village land records.", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fit=crop" },
              { title: "FPO Head", icon: Users, desc: "Verify active members, and manage cooperative harvest clusters.", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&fit=crop" },
              { title: "Enterprise Buyer", icon: Store, desc: "Secure pre-harvest commitments easily and track incoming fleet.", image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&fit=crop" },
              { title: "Transporter", icon: Truck, desc: "Find optimized routes and pick up secure logistics deliveries.", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&fit=crop" },
            ].map((role, i) => (
              <div key={i} className="group relative h-[26rem] w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] rounded-[2.5rem] overflow-hidden focus:outline-none transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.5)] border-2 border-transparent hover:border-emerald-500/50">
                <div className="absolute inset-0 z-0 bg-black">
                  <Image src={role.image} alt={role.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity group-hover:opacity-60" />
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-left">
                  <div className="mb-auto w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md border transition-all duration-300 bg-black/50 text-emerald-400 border-white/20 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/40 group-hover:text-white">
                    <role.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-black tracking-tight text-3xl leading-tight mb-3 transition-colors text-white group-hover:text-emerald-300">{role.title}</h3>
                  <p className="text-emerald-100/70 text-base font-medium leading-relaxed drop-shadow-md">{role.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SECTION WITH BACKGROUND */}
      <section className="py-32 relative overflow-hidden">

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Data-Driven <br /><span className="text-emerald-400">Harvest Predictor</span></h2>
              <p className="text-emerald-100/70 text-lg mb-8 leading-relaxed font-light">
                By analyzing soil redness, local weather patterns, and market demands, AgriCircle AI allows farming communities to optimize their yields without creating an oversupply.
              </p>
              <ul className="space-y-4">
                {["AI Crop Redness Analysis", "7-Day Regional Weather Integration", "Market Demand Heatmaps"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-emerald-100/90 font-medium">
                    <CheckCircleIcon /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-emerald-800/50 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1000&auto=format&fit=crop"
                alt="Farming analytics"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="px-4 py-2 bg-emerald-500/20 backdrop-blur-md rounded-xl border border-emerald-500/30 w-max mb-3">
                  <span className="text-emerald-300 font-bold tracking-widest uppercase text-xs">Ready in 3 days</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Wheat Plot Cluster B</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-emerald-900/30 bg-black/60 backdrop-blur-md relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <Sprout className="w-6 h-6 text-emerald-500" />
          <span className="text-xl font-black tracking-widest text-emerald-400 uppercase">AgriCircle</span>
        </div>
        <p className="text-emerald-100/40 text-sm font-light uppercase tracking-widest">© 2026 AgriCircle AI Platform. Empowering Rural Futures.</p>
      </footer>
    </main>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
