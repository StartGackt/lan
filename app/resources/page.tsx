"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBackground } from "@/components/PageBackground";
import { Search } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 font-sans selection:bg-blue-100 relative overflow-hidden flex flex-col">
      <PageBackground />
      <Navbar />

      <main className="relative z-10 container mx-auto px-6 py-20 flex-grow">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
             Resources & Insights
           </h1>
           <div className="relative max-w-md mx-auto">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05 }}
               className="group cursor-pointer"
             >
                <div className="aspect-video bg-slate-200 rounded-2xl mb-4 overflow-hidden relative">
                   <div className="absolute inset-0 bg-slate-300 animate-pulse" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex gap-2 mb-2">
                   <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Blog</span>
                   <span className="text-xs text-slate-400 py-1">5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                   Mastering Productivity in {2024 + i}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2">
                   Learn the secrets of high-performing teams and how they manage their time effectively using our tools.
                </p>
             </motion.div>
           ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
