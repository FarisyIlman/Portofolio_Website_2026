'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
// 1. Import data resmi dari portfolioData
import { TIMELINE_DATA } from '@/data/portfolioData';

export function Experience() {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Filter hanya data berselisih/tipe 'leadership' atau 'experience' jika perlu
  const experiences = TIMELINE_DATA.filter((item) => item.type !== 'education');

  return (
    <section 
      id="experience" 
      className="relative min-h-screen py-24 px-6 md:px-12 bg-slate-950 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase block mb-3">// 05. Leadership & Organization</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Track Record</h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="relative pl-8 md:pl-10"
            >
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              <div className="bg-slate-900/50 border border-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl hover:border-indigo-500/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 border-b border-white/5 pb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20 inline-block mb-2 capitalize">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-sm font-mono text-slate-400">{exp.subtitle}</p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-white/5 self-start md:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">// Key Outcomes & Operations:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}