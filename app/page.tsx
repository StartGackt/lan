"use client";

import { motion } from "framer-motion";
import { Check, Clock, Calendar, Bell, Menu } from "lucide-react";

// Floating animation variant
const floating = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const floatingDelayed = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const floatingSlow = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 font-sans selection:bg-blue-100 relative overflow-hidden">
      
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />
      
      {/* Navbar */}
      <nav className="relative z-50 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="grid grid-cols-2 gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-slate-900"/>
             <div className="w-1.5 h-1.5 rounded-full bg-slate-900"/>
             <div className="w-1.5 h-1.5 rounded-full bg-slate-900"/>
             <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
          </div>
          <span>ChronoTask</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Solutions</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Resources</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900">Sign in</button>
          <button className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-semibold shadow-sm hover:shadow-md transition-all text-slate-700">
            Get demo
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-20 pb-32 px-4 text-center max-w-5xl mx-auto">
        
        {/* Central Logo Cube */}
        <motion.div 
          animate={{ rotate: [0, 5, -5, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 p-6 bg-white rounded-3xl shadow-xl shadow-slate-200/50"
        >
           <div className="grid grid-cols-2 gap-2 w-12 h-12">
             <div className="rounded-full bg-blue-500"/>
             <div className="rounded-full bg-slate-800"/>
             <div className="rounded-full bg-slate-800"/>
             <div className="rounded-full bg-slate-800"/>
           </div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-slate-900 mb-6">
          Think, plan, and track <br/>
          <span className="text-slate-400">all in one place</span>
        </h1>
        
        <p className="text-lg text-slate-500 mb-10 max-w-lg mx-auto">
          Efficiently manage your tasks and boost productivity.
        </p>

        <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all">
          Get free demo
        </button>

        {/* --- Floating Elements (Absolute Positioned relative to main container logic) --- */}
        {/* We use a wrapper or absolute positioning relative to the screen/container */}
        
        {/* Top Left: Sticky Note */}
        <motion.div 
           variants={floating}
           animate="animate"
           className="hidden md:block absolute top-20 left-0 lg:-left-12 rotate-[-6deg]"
        >
          <div className="w-64 p-6 bg-[#FEF08A] rounded-xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] relative">
            <div className="w-3 h-3 rounded-full bg-red-400 mx-auto -mt-8 mb-4 shadow-sm border border-black/10" /> {/* Pin */}
            <p className="font-handwriting text-slate-700 text-lg leading-snug font-medium">
              Take notes to keep track of crucial details, and accomplish more tasks with ease.
            </p>
            {/* Folder behind it effect */}
            <div className="absolute -z-10 top-4 -right-12 w-40 h-40 bg-white rounded-xl shadow-lg rotate-[12deg]" />
             <div className="absolute -z-10 top-20 -right-4 w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center">
                 <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                    <Check strokeWidth={4} className="w-6 h-6" />
                 </div>
             </div>
          </div>
        </motion.div>

        {/* Top Right: Clock & Reminders */}
        <motion.div 
           variants={floatingDelayed}
           animate="animate"
           className="hidden md:block absolute top-10 right-0 lg:-right-4"
        >
           <div className="relative">
              {/* Blur Glass effect card */}
              <div className="w-72 p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50">
                 <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-slate-700">Reminders</h3>
                    <div className="w-8 h-2 bg-slate-100 rounded-full" />
                 </div>
                 
                 <div className="flex items-center gap-3 mb-3 p-3 bg-white rounded-xl shadow-sm border border-slate-50">
                    <div className="p-2 bg-red-50 rounded-lg">
                       <Clock className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                       <div className="text-sm font-semibold text-slate-800">Today's Meeting</div>
                       <div className="text-xs text-slate-400">Call with marketing team</div>
                    </div>
                 </div>

                 <div className="flex items-center gap-2 text-xs text-blue-500 bg-blue-50 p-2 rounded-lg w-fit">
                    <Clock className="w-3.5 h-3.5" />
                    <span>13:00 - 13:45</span>
                 </div>
              </div>
              
              {/* Floating Clock Icon */}
              <div className="absolute -top-6 -left-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center rotate-[-10deg]">
                 <Clock className="w-10 h-10 text-slate-800" strokeWidth={1.5} />
              </div>
           </div>
        </motion.div>

        {/* Bottom Left: Task List */}
        <motion.div 
           variants={floatingSlow}
           animate="animate"
           className="hidden md:block absolute bottom-0 left-0 lg:-left-8"
        >
          <div className="w-72 bg-white rounded-2xl p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-50">
             <div className="mb-4">
                <h3 className="font-semibold text-slate-800">Today's tasks</h3>
             </div>
             
             <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                   <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-sm font-medium text-slate-700">New Ideas for campaign</span>
                   </div>
                   <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[60%]" />
                   </div>
                </div>
                
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                   <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-sm font-medium text-slate-700">Design PPT #4</span>
                   </div>
                   <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[100%]" />
                   </div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Bottom Right: Integrations */}
        <motion.div 
           variants={floating}
           animate="animate"
           className="hidden md:block absolute bottom-10 right-0 lg:-right-8"
        >
           <div className="w-72 bg-white rounded-2xl p-6 shadow-2xl border border-slate-50 relative z-10">
              <h3 className="text-sm font-semibold text-slate-500 mb-4">100+ Integrations</h3>
              <div className="flex gap-4">
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center text-2xl">
                    📧 {/* Gmail mock */}
                 </div>
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center text-2xl rotate-3">
                    💬 {/* Slack mock */}
                 </div>
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center text-2xl -rotate-3">
                    📅 {/* Calendar mock */}
                 </div>
              </div>
              
              {/* Decorative elements behind */}
              <div className="absolute -z-10 -top-6 -right-6 w-24 h-24 bg-slate-100/50 rounded-full blur-xl" />
           </div>
        </motion.div>

      </main>

    </div>
  );
}
