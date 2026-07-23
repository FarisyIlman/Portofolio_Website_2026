// components/sections/Education.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export function Education() {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="education" 
      className="relative min-h-screen py-24 px-6 md:px-12 bg-slate-950 border-t border-white/5 overflow-hidden"
    >
      {/* Radiant Amber Glow Wash */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-xs font-mono tracking-widest text-orange-400 uppercase block mb-3">// 04. Academic Foundation</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Education</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="bg-slate-900/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-orange-500/10 hover:border-orange-500/20 transition-all duration-500 relative group bg-gradient-to-br from-slate-950 via-slate-950 to-orange-950/20"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full blur-xl pointer-events-none group-hover:bg-orange-500/10 transition-all duration-500" />
          
          <div className="flex flex-col md:flex-row items-start gap-6 justify-between border-b border-white/5 pb-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-500/10 rounded-2xl text-orange-400 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Bachelor of Informatics</h3>
                <p className="text-orange-400 font-mono text-sm mt-1">Institut Teknologi Nasional (ITENAS)</p>
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-2 font-mono text-xs text-slate-400">
              <span className="flex items-center gap-1.5 bg-orange-500/5 px-3 py-1 rounded-full text-orange-300 border border-orange-500/10">
                <Calendar className="w-3.5 h-3.5" /> 2023 — Present
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5" /> Bandung, Indonesia
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-4">
              <h4 className="text-xs font-mono text-orange-400 uppercase tracking-widest">// Academic Focus</h4>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Currently in my <strong className="text-white font-medium">7th semester</strong>, working on an undergraduate thesis that benchmarks classical and deep learning methods — Logistic Regression, Random Forest, XGBoost/LightGBM, TabNet, and FT-Transformer — on tabular data.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed font-normal">
                Applying that theoretical foundation to hands-on work: production Laravel systems, deep learning coursework, and a Wazuh-based security lab covering detection rules and alert automation.
              </p>
            </div>

            <div className="md:col-span-5 bg-slate-950/50 p-6 rounded-2xl border border-white/5 space-y-4">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-400" /> Milestone Tracking
              </h4>
              <ul className="space-y-3 font-mono text-xs text-slate-300">
                <li className="flex items-center justify-between">
                  <span className="text-slate-500">Current Status:</span>
                  <span className="text-orange-300 font-bold bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">Active Enrollment</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-500">Specialization:</span>
                  <span className="text-white">Machine Learning & Deep Learning</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-500">Core Lab Works:</span>
                  <span className="text-white">ML Benchmarking &amp; Wazuh SIEM</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}