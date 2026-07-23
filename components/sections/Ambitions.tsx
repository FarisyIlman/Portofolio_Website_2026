// components/sections/Ambitions.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FUTURE_AMBITIONS } from '@/data/portfolioData';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';

export function Ambitions() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section id="vision" className="relative min-h-screen py-24 px-6 md:px-12 transition-colors duration-1000 overflow-hidden">
      {/* Warm Golden Flare Background Radial Emitters */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase block mb-3">// 08. Trajectory Vector</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Future Horizons</h2>
          <p className="text-slate-400 text-sm max-w-md mt-4 font-normal leading-relaxed">
            Strategic outline of professional goals, architectural pursuits, and engineering milestones.
          </p>
        </div>

        {/* Horizons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FUTURE_AMBITIONS.map((ambition, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              className="glass-premium p-8 rounded-3xl relative overflow-hidden group hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between min-h-[220px] bg-gradient-to-b from-slate-950 via-slate-950 to-amber-950/10"
            >
              {/* Internal Soft Glow Flare */}
              <div className="absolute -right-12 -top-12 w-28 h-28 bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 opacity-5 group-hover:opacity-15 blur-2xl transition-opacity duration-500 pointer-events-none rounded-full" />
              
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                    {ambition.timeline}
                  </span>
                  <Sparkles className="w-4 h-4 text-slate-700 group-hover:text-yellow-400/60 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
                  {ambition.title}
                </h3>
              </div>

              <div className="mt-6">
                <div className="w-full bg-white/5 h-[1px] rounded-full overflow-hidden relative mb-4">
                  <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 group-hover:w-full transition-all duration-1000 ease-out" />
                </div>
                <span className="text-xs font-mono text-slate-400 group-hover:text-slate-300 flex items-center gap-1.5 transition-colors">
                  View structural objectives <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}