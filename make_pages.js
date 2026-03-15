const fs = require('fs');
const path = require('path');

const routes = [
    'frontend/app/dashboard/farmer/crops/page.tsx',
    'frontend/app/dashboard/farmer/commitments/page.tsx',
    'frontend/app/dashboard/ao/farmers/page.tsx',
    'frontend/app/dashboard/fpo/clusters/page.tsx',
    'frontend/app/dashboard/buyer/fleet/page.tsx',
    'frontend/app/dashboard/transport/routes/page.tsx',
    'frontend/app/dashboard/settings/page.tsx'
];

const template = `
"use client";

import { Construction } from "lucide-react";
import Link from "next/link";

export default function ComingSoonPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-in fade-in duration-700">
            <div className="p-6 bg-emerald-500/10 text-emerald-500 rounded-full mb-6 relative">
                <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full animate-pulse" />
                <Construction className="w-16 h-16 relative z-10" />
            </div>
            
            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                Module Under Construction
            </h1>
            
            <p className="text-lg font-medium text-slate-500 dark:text-slate-400 max-w-lg mb-8">
                We're currently building out this section of the platform to bring you more powerful tools and insights.
            </p>
            
            <Link 
                href="/dashboard/farmer"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-lg transition-all hover:scale-105 uppercase tracking-widest text-sm cursor-pointer"
            >
                Return to Dashboard
            </Link>
        </div>
    );
}
`;

routes.forEach(route => {
    const fullPath = path.resolve(__dirname, route);
    const dir = path.dirname(fullPath);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(fullPath, template.trim());
    console.log(`Created ${route}`);
});
