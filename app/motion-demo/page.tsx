"use client";

import { FadeIn, SlideUp, ScaleIn, Stagger } from "@/components/motion";
import { motion } from "framer-motion";

export default function MotionDemoPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-12 space-y-24">
      <header className="space-y-4">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight">Profolio Motion Standards</h1>
          <p className="text-neutral-400">Standardized animation components for consistent UI motion.</p>
        </FadeIn>
      </header>

      <section className="space-y-8">
        <SlideUp>
          <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-800 pb-2">Fade In</h2>
        </SlideUp>
        <div className="grid grid-cols-3 gap-4">
          <FadeIn delay={0} className="h-32 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
            Default
          </FadeIn>
          <FadeIn delay={0.2} className="h-32 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
            Delay 0.2s
          </FadeIn>
          <FadeIn delay={0.4} className="h-32 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
            Delay 0.4s
          </FadeIn>
        </div>
      </section>

      <section className="space-y-8">
        <SlideUp>
          <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-800 pb-2">Slide Up</h2>
        </SlideUp>
        <div className="grid grid-cols-3 gap-4">
          <SlideUp delay={0} className="h-32 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
            Default
          </SlideUp>
          <SlideUp delay={0.2} className="h-32 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
            Delay 0.2s
          </SlideUp>
          <SlideUp delay={0.4} className="h-32 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
            Delay 0.4s
          </SlideUp>
        </div>
      </section>

      <section className="space-y-8">
        <SlideUp>
          <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-800 pb-2">Scale In</h2>
        </SlideUp>
        <div className="grid grid-cols-3 gap-4">
          <ScaleIn delay={0} className="h-32 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
            Default
          </ScaleIn>
          <ScaleIn delay={0.2} className="h-32 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
            Delay 0.2s
          </ScaleIn>
          <ScaleIn delay={0.4} className="h-32 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
            Delay 0.4s
          </ScaleIn>
        </div>
      </section>

      <section className="space-y-8">
        <SlideUp>
          <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-800 pb-2">Stagger Container</h2>
        </SlideUp>
        <Stagger className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="h-24 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30"
            >
              Item {i}
            </motion.div>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
