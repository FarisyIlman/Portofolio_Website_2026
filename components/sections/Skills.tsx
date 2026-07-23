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

  const filteredSkills =
    activeTab === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-slate-950 border-t border-white/5 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Text */}
        <div className="mb-14 text-center">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase block mb-3">
            // 02. Tech Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            TECH STACK
          </h2>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wide border transition-all duration-300 ${
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

        {/* Skill Cards Grid (Matching Image Grid Style) */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 justify-center"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const SkillLogo = getSkillIcon(skill.name);

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-slate-900/40 border border-white/10 backdrop-blur-md p-4 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-purple-500/40 hover:bg-slate-900/70 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300"
                >
                  {/* Skill Logo */}
                  <div className="w-12 h-12 mb-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-300">
                    <SkillLogo className="w-6 h-6 text-slate-300 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>

                  {/* Skill Name */}
                  <h3 className="font-bold text-slate-100 group-hover:text-white transition-colors text-xs mb-1 truncate max-w-full">
                    {skill.name}
                  </h3>

                  {/* Skill Level Badge (Beginner / Intermediate / Advanced) */}
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-cyan-400 transition-colors duration-300 capitalize">
                    {skill.level ?? 'Intermediate'}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}