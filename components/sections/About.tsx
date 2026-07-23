// components/sections/About.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GraduationCap, Rocket, Compass, Target, Terminal, Users } from 'lucide-react';

export function About() {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-24 px-6 md:px-12 bg-indigo-950/40 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background light shift */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Heading Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUpVariants}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase block mb-3">// 01. Profile Outline</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">About Me</h2>
        </motion.div>

        {/* Layout Partition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column A: Narrative Biography */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUpVariants}
            className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base md:text-lg font-normal"
          >
            <p>
              Hello, I am <strong className="text-white font-medium">Farisy Ilman</strong>, an undergraduate Informatics student currently in my seventh semester at <strong className="text-cyan-400 font-medium">ITENAS</strong>. My journey into computer science is driven by a fascination with system architecture, software engineering practices, and more recently the mechanics behind machine learning and intelligent processing frameworks.
            </p>
            <p>
              I approach development through an architectural lens. My work spans building and maintaining production Laravel systems, like a Good Corporate Governance module with centralized configuration and document handling, to exploring machine learning on tabular data. </p>
              <p>For my undergraduate thesis, I&apos;m running a comparative benchmark study across classical and deep learning methods Logistic Regression, Random Forest, XGBoost/LightGBM, TabNet, and FT-Transformer  to evaluate how each performs on real-world tabular problems. I&apos;ve also worked hands-on with security tooling, configuring detection pipelines and response automation in Wazuh.</p>
            
            <p>
              Long-term, I&apos;m working toward a <strong className="text-white font-medium">Master&apos;s degree</strong> and a specialization in <strong className="text-white font-medium">MLOps</strong> bridging the gap between experimental ML models and reliable, deployed systems, so that intelligent software can be shipped with the same rigor and stability as any production application.
            </p>
            <p>
              Beyond technical parameters, I am deeply committed to operational leadership. As Secretary General of BPA within HMIF ITENAS, I lead documentation and organizational workflows across student activities from Dies Natalis to new student orientation — because I believe engineering excellence is amplified when paired with transparent process and open communication across teams.
            </p>
          </motion.div>

          {/* Column B: Core Values & Institutional Path */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            
            {/* Institution Card */}
            <motion.div variants={fadeUpVariants} className="bg-slate-900/50 border border-white/10 backdrop-blur-md p-6 rounded-2xl relative group hover:border-cyan-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Education Hub</h4>
                  <p className="text-white font-bold text-sm">Informatics Major</p>
                  <p className="text-xs text-slate-400">Institut Teknologi Nasional (ITENAS)</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">7th Semester</span>
                </div>
              </div>
            </motion.div>

            {/* Currently Working On Card */}
            <motion.div variants={fadeUpVariants} className="bg-slate-900/50 border border-white/10 backdrop-blur-md p-6 rounded-2xl relative group hover:border-sky-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Currently</h4>
                  <p className="text-white font-bold text-sm">Thesis &amp; Production Systems</p>
                  <p className="text-xs text-slate-400">Benchmarking ML methods on tabular data for my thesis, alongside building the GCG module in a production Laravel app.</p>
                </div>
              </div>
            </motion.div>

            {/* Organizational Leadership Card */}
            <motion.div variants={fadeUpVariants} className="bg-slate-900/50 border border-white/10 backdrop-blur-md p-6 rounded-2xl relative group hover:border-rose-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-500/10 rounded-xl text-rose-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Organizational Leadership</h4>
                  <p className="text-white font-bold text-sm">Secretary General, BPA HMIF</p>
                  <p className="text-xs text-slate-400">Leading documentation and workflow across HMIF ITENAS activities, from Dies Natalis to student orientation.</p>
                </div>
              </div>
            </motion.div>

            {/* Future Direction Card */}
            <motion.div variants={fadeUpVariants} className="bg-slate-900/50 border border-white/10 backdrop-blur-md p-6 rounded-2xl relative group hover:border-amber-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Future Direction</h4>
                  <p className="text-white font-bold text-sm">Master&apos;s Degree &amp; MLOps</p>
                  <p className="text-xs text-slate-400">Pursuing graduate study and specializing in deploying LLM and deep learning systems as reliable, production-grade pipelines.</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}