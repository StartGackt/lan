"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-slate-200/50 py-4 shadow-sm" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
          <div className="grid grid-cols-2 gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-slate-900"/>
             <div className="w-1.5 h-1.5 rounded-full bg-slate-900"/>
             <div className="w-1.5 h-1.5 rounded-full bg-slate-900"/>
             <div className="w-1.5 h-1.5 rounded-full bg-blue-600"/>
          </div>
          <span>ChronoTask</span>
        </Link>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-slate-900 transition-colors">Features</Link>
          <Link href="/solutions" className="hover:text-slate-900 transition-colors">Solutions</Link>
          <Link href="/resources" className="hover:text-slate-900 transition-colors">Resources</Link>
          <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900">Sign in</button>
          <button className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:shadow-xl transition-all hover:-translate-y-0.5">
            Get demo
          </button>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 md:hidden shadow-lg flex flex-col gap-4 animate-in slide-in-from-top-2">
           <Link href="/" className="text-sm font-medium text-slate-600 p-2 hover:bg-slate-50 rounded-lg">Features</Link>
           <Link href="/solutions" className="text-sm font-medium text-slate-600 p-2 hover:bg-slate-50 rounded-lg">Solutions</Link>
           <Link href="/resources" className="text-sm font-medium text-slate-600 p-2 hover:bg-slate-50 rounded-lg">Resources</Link>
           <Link href="/pricing" className="text-sm font-medium text-slate-600 p-2 hover:bg-slate-50 rounded-lg">Pricing</Link>
        </div>
      )}
    </nav>
  );
}
