"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBackground } from "@/components/PageBackground";
import { FloatingTaskCard, FloatingStatsCard, FloatingIntegrations } from "@/components/ProFloatingElements";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-blue-100 relative overflow-hidden flex flex-col">
      <PageBackground />
      <Navbar />

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-32 pb-40 px-4 text-center max-w-5xl mx-auto flex-grow">
        
        {/* Animated Badge */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-600 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-pointer"
        >
           <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
           v2.0 is now available
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]"
        >
          Think, plan, <br className="hidden md:block" /> 
          <span className="text-slate-400">and track.</span>
        </motion.h1>
        
        {/* Hero Description */}
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg mx-auto leading-relaxed"
        >
          The new standard for modern software teams. <br className="hidden md:block"/>
          Manage tasks, sprint, and roadmap in one place.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.3 }}
           className="flex items-center gap-4"
        >
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm md:text-base">
            Get started for free
          </button>
          <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all text-sm md:text-base">
            View changelog
          </button>
        </motion.div>

        {/* High-Fidelity Floating UI */}
        <div className="absolute inset-0 pointer-events-none max-w-6xl mx-auto">
           <FloatingTaskCard />
           <FloatingStatsCard />
           <FloatingIntegrations />
           
           {/* Decorative blurred blobs */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-50 via-indigo-50 to-transparent rounded-full blur-[100px] -z-10 opacity-60" />
        </div>

      </main>
      
      {/* Logos Strip */}
      <div className="border-y border-slate-100 bg-white/50 backdrop-blur-sm py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
           <div className="flex justify-center gap-12 md:gap-24 opacity-40 grayscale mix-blend-multiply">
              {[1,2,3,4,5].map(i => (
                 <div key={i} className="h-8 w-24 bg-slate-900 mask-logo rounded-md" />
              ))}
           </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
