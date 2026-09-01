'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, ShieldCheck, Code2, Rocket } from 'lucide-react';

type StrategicFocusArea = 
  | 'AI & LLM Architecture' 
  | 'MLOps Infrastructure' 
  | 'Enterprise Systems' 
  | 'Security & SIEM' 
  | 'Venture & Innovation';

interface StrategicPillar {
  title: string;
  category: StrategicFocusArea;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    title: 'Advanced LLM & Hybrid RAG Architectures',
    category: 'AI & LLM Architecture',
    description: 'Developing high-precision retrieval systems and natural language backends combining sparse (BM25) and dense (BGE-M3) vector representations.',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    tag: 'RESEARCH & CORE AI',
  },
  {
    title: 'MLOps & Automated Inference Pipelines',
    category: 'MLOps Infrastructure',
    description: 'Designing production-ready ML deployment workflows, model versioning, automated evaluation loops, and low-latency API wrappers.',
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
    tag: 'SYSTEMS & INFRA',
  },
  {
    title: 'Robust Enterprise Web Solutions',
    category: 'Enterprise Systems',
    description: 'Architecting maintainable full-stack systems with Laravel, Filament, and Next.js, emphasizing clean code and modular configuration registries.',
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    tag: 'FULL-STACK ENG',
  },
  {
    title: 'SIEM Integration & Active Threat Detection',
    category: 'Security & SIEM',
    description: 'Integrating custom SIEM detection rules, automated response pipelines, and webhook alerting mechanisms to secure live environments.',
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    tag: 'SEC & DEVOPS',
  },
  {
    title: 'AI Product Engineering & Innovation',
    category: 'Venture & Innovation',
    description: 'Translating complex machine learning techniques into scalable commercial products and domain-specific intelligent automated solutions.',
    icon: <Rocket className="w-5 h-5 text-pink-400" />,
    tag: 'FUTURE VENTURES',
  },
];

export function Vision() {
  return (
    <section 
      id="vision" 
      className="relative min-h-screen py-24 px-6 md:px-12 bg-slate-950 border-t border-white/5 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Emitters */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase block mb-3">
            // 07. Strategic Directions
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Technical Vision & Core Pillars
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-normal leading-relaxed">
            The architectural foundations and technical domains driving my engineering methodology — bridging data science, web development, and secure system operations.
          </p>
        </div>

        {/* Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-16">
          {STRATEGIC_PILLARS.map((pillar, index) => {
            const colSpanClass = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${colSpanClass} p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-500/30 transition-colors">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>PILLAR_0{index + 1}</span>
                  <span className="px-2 py-0.5 rounded border text-[10px] font-semibold text-cyan-400/90 bg-cyan-500/10 border-cyan-500/20">
                    {pillar.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Architectural Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-slate-950 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-400 text-slate-950 font-bold shrink-0 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Engineering Philosophy</h4>
              <p className="text-slate-400 text-sm mt-0.5">
                Building actual real systems that require bridging analytical models with production-grade backend stability and security.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}