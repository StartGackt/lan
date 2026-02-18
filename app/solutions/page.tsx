"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBackground } from "@/components/PageBackground";
import { Zap, Shield, Globe } from "lucide-react";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 font-sans selection:bg-blue-100 relative overflow-hidden flex flex-col">
      <PageBackground />
      <Navbar />

      <main className="relative z-10 container mx-auto px-6 py-20 flex-grow">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
             Solutions for every team
           </h1>
           <p className="text-lg text-slate-500">
             Whether you are a startup or a global enterprise, our platform adapts to your workflow.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {[
             { title: "For Engineering", icon: <Zap className="w-6 h-6 text-orange-500"/>, desc: "Ship faster with integrated CI/CD and agile workflows." },
             { title: "For Design", icon: <Globe className="w-6 h-6 text-blue-500"/>, desc: "Collaborate on designs and get feedback in real-time." },
             { title: "For Enterprise", icon: <Shield className="w-6 h-6 text-green-500"/>, desc: "Bank-grade security and advanced permission controls." },
           ].map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               whileHover={{ y: -5 }}
               className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all"
             >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                   {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
