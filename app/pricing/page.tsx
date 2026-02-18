"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBackground } from "@/components/PageBackground";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 font-sans selection:bg-blue-100 relative overflow-hidden flex flex-col">
      <PageBackground />
      <Navbar />

      <main className="relative z-10 container mx-auto px-6 py-20 flex-grow">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
             Simple, transparent pricing
           </h1>
           <p className="text-lg text-slate-500 mb-8">
             No hidden fees. Cancel anytime.
           </p>
           
           <div className="inline-flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
              <button className="px-6 py-2 rounded-full bg-white shadow-sm text-sm font-semibold text-slate-900">Monthly</button>
              <button className="px-6 py-2 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900">Yearly</button>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
           {/* Starter */}
           <div className="p-8 bg-white rounded-3xl border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Starter</h3>
              <div className="text-4xl font-bold text-slate-900 mb-6">$0<span className="text-lg text-slate-500 font-normal">/mo</span></div>
              <p className="text-sm text-slate-500 mb-6">Perfect for individuals just getting started.</p>
              <button className="w-full py-3 rounded-xl border border-slate-200 font-semibold hover:bg-slate-50 transition-colors mb-8">Get Started</button>
              <ul className="space-y-3">
                 {["Up to 3 projects", "Basic analytics", "Community support"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                       <Check className="w-4 h-4 text-blue-500" /> {item}
                    </li>
                 ))}
              </ul>
           </div>

           {/* Pro - Floating/Highlighted */}
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="relative p-8 bg-slate-900 rounded-3xl text-white shadow-2xl scale-105 z-10"
           >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                 MOST POPULAR
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-slate-400 font-normal">/mo</span></div>
              <p className="text-sm text-slate-400 mb-6">For growing teams that need more power.</p>
              <button className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 font-semibold transition-colors mb-8 text-white">Get Started</button>
              <ul className="space-y-3">
                 {["Unlimited projects", "Advanced analytics", "Priority support", "Custom domains"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                       <Check className="w-4 h-4 text-blue-400" /> {item}
                    </li>
                 ))}
              </ul>
           </motion.div>

           {/* Enterprise */}
           <div className="p-8 bg-white rounded-3xl border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-slate-900 mb-6">$99<span className="text-lg text-slate-500 font-normal">/mo</span></div>
              <p className="text-sm text-slate-500 mb-6">For large organizations with specific needs.</p>
              <button className="w-full py-3 rounded-xl border border-slate-200 font-semibold hover:bg-slate-50 transition-colors mb-8">Contact Sales</button>
              <ul className="space-y-3">
                 {["SSO & SAML", "Dedicated manager", "SLA guarantee", "Audit logs"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                       <Check className="w-4 h-4 text-blue-500" /> {item}
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
