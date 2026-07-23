// components/sections/Skills.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS_DATA } from '@/data/portfolioData';
import { TabCategory } from '@/types';
import { Server, Brain, Layers, Code, Shield, Grid, Cpu } from 'lucide-react';
import { getSkillIcon } from '@/data/skillIcons';

const CATEGORIES: { name: TabCategory; icon: React.ReactNode }[] = [
  { name: 'All', icon: <Grid className="w-4 h-4" /> },
  { name: 'Languages', icon: <Code className="w-4 h-4" /> },
  { name: 'Frontend', icon: <Layers className="w-4 h-4" /> },
  { name: 'Backend', icon: <Server className="w-4 h-4" /> },
  { name: 'Machine Learning', icon: <Brain className="w-4 h-4" /> },
  { name: 'DevOps', icon: <Shield className="w-4 h-4" /> },
  { name: 'IoT & Hardware', icon: <Cpu className="w-4 h-4" /> },
];

export function Skills() {
  const [activeTab, setActiveTab] = useState<TabCategory>('All');

  const filteredSkills = activeTab === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((skill) => skill.category === activeTab);

  return (
    <section 
      id="skills" 
      className="relative min-h-screen py-24 px-6 md:px-12 bg-slate-950 border-t border-white/5 overflow-hidden"
    >
      {/* Structural Decorative Background Wash */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Header Text */}
        <div className="mb-16 text-center">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase block mb-3">// 02. Tech Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Engine Stack Matrix</h2>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-semibold tracking-wide border transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                    : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10'
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const SkillLogo = getSkillIcon(skill.name);
              
              // Safe String Casting for skill.level & percentage fallback
              const displayMetric = skill.percentage 
                ? `${skill.percentage}%` 
                : String(skill.level ?? 'PRO').substring(0, 3).toUpperCase();

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-slate-900/50 border border-white/10 backdrop-blur-md p-6 rounded-xl flex items-center justify-between group hover:border-cyan-500/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {/* Skill Logo Node */}
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-300 shrink-0">
                      <SkillLogo className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-100 group-hover:text-white transition-colors text-sm">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                        Level: {String(skill.level)}
                      </span>
                    </div>
                  </div>

                  {/* Micro Visual Performance Metric Badge */}
                  <div className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-cyan-400/80 font-bold group-hover:bg-cyan-500/10 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all duration-300 shrink-0">
                    {displayMetric}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}