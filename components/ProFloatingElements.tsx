"use client";

import { motion } from "framer-motion";
import { Check, Clock, MoreHorizontal, User, Calendar, BarChart3, ArrowUpRight } from "lucide-react";

// Floating animation variants with different timings
const floatOne = {
  animate: { y: [0, -10, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const } }
};
const floatTwo = {
  animate: { y: [0, -15, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay: 1 } }
};
const floatThree = {
  animate: { y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 } }
};

export function FloatingTaskCard() {
  return (
    <motion.div 
      variants={floatOne}
      animate="animate"
      className="absolute top-32 lg:-left-16 rotate-[-6deg] z-20 hidden md:block"
    >
      <div className="w-64 bg-white rounded-2xl shadow-pro-xl border border-slate-100 p-4">
        <div className="flex items-center justify-between mb-4">
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
               <User size={14} />
             </div>
             <div>
               <div className="text-xs font-semibold text-slate-900">Design Review</div>
               <div className="text-[10px] text-slate-500">Just now</div>
             </div>
           </div>
           <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-600 text-[10px] font-medium border border-green-100">
             Active
           </span>
        </div>
        <div className="space-y-2">
           <div className="flex items-start gap-2">
              <div className="mt-0.5 w-4 h-4 rounded border border-slate-300 flex items-center justify-center">
                 <Check size={10} className="text-slate-300" />
              </div>
              <p className="text-xs text-slate-600 line-through decoration-slate-300">Update typography scales</p>
           </div>
           <div className="flex items-start gap-2">
              <div className="mt-0.5 w-4 h-4 rounded border border-blue-500 bg-blue-500 flex items-center justify-center">
                 <Check size={10} className="text-white" />
              </div>
              <p className="text-xs text-slate-800 font-medium">Refine shadow depth</p>
           </div>
           <div className="flex items-start gap-2">
              <div className="mt-0.5 w-4 h-4 rounded border border-slate-300 flex items-center justify-center" />
              <p className="text-xs text-slate-600">Export assets for dev</p>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FloatingStatsCard() {
   return (
     <motion.div 
       variants={floatTwo}
       animate="animate"
       className="absolute top-20 right-0 lg:-right-12 rotate-[6deg] z-10 hidden md:block"
     >
       <div className="w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-pro-lg border border-white/50 p-5">
         <div className="flex justify-between items-start mb-4">
            <div>
               <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Weekly Revenue</p>
               <h3 className="text-xl font-bold text-slate-900">$14,290</h3>
            </div>
            <div className="flex items-center text-green-600 text-xs font-medium bg-green-50 px-1.5 py-0.5 rounded">
               <ArrowUpRight size={12} className="mr-0.5" /> 12%
            </div>
         </div>
         
         <div className="h-24 flex items-end gap-1.5">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
               <div key={i} className="flex-1 bg-slate-100 rounded-lg relative overflow-hidden group">
                  <div 
                     className="absolute bottom-0 left-0 right-0 bg-slate-900 transition-all duration-1000" 
                     style={{ height: `${h}%` }} 
                  />
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
            ))}
         </div>
       </div>
     </motion.div>
   );
 }

 export function FloatingIntegrations() {
   return (
     <motion.div 
       variants={floatThree}
       animate="animate"
       className="absolute bottom-10 lg:-right-4 rotate-[-3deg] z-20 hidden md:block"
     >
        <div className="bg-white rounded-2xl shadow-pro-xl border border-slate-100 p-4 w-56">
           <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-900">Integrations</span>
              <MoreHorizontal size={14} className="text-slate-400" />
           </div>
           <div className="flex -space-x-2 overflow-hidden py-1">
              {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-600 shadow-sm">
                    {["S", "N", "F", "R"][i]}
                 </div>
              ))}
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-50 flex items-center justify-center text-xs text-slate-400 border border-slate-200 border-dashed">
                 +
              </div>
           </div>
           <div className="mt-3 text-[10px] text-slate-500 text-center bg-slate-50 py-1 rounded-md border border-slate-100">
              Syncing active...
           </div>
        </div>
     </motion.div>
   )
 }
