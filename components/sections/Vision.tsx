// components/sections/Vision.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Sparkles, Rocket, TrendingUp } from 'lucide-react';

type GoalStatus = 'ACTIVE' | 'IN_PROGRESS' | 'PLANNED';

interface VisionGoal {
  title: string;
  description: string;
  icon: React.ReactNode;
  status: GoalStatus;
}

const VISION_GOALS: VisionGoal[] = [
  {
    title: 'Deep Learning & LLM Systems',
    description: 'Going deeper into deep learning architectures and LLM-driven applications, building on benchmark research with modern tabular and transformer-based architectures.',
    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    status: 'IN_PROGRESS',
  },
  {
    title: 'MLOps & Production ML',
    description: 'Bridging the gap between experimental models and reliable, deployed systems — treating ML pipelines with the same rigor as production software.',
    icon: <Target className="w-5 h-5 text-cyan-400" />,
    status: 'IN_PROGRESS',
  },
  {
    title: 'Graduate Study in Computer Science',
    description: 'Pursuing a Master’s degree to deepen theoretical grounding in machine learning while continuing to build hands-on, production-ready systems.',
    icon: <Compass className="w-5 h-5 text-emerald-400" />,
    status: 'PLANNED',
  },
  {
    title: 'Career Growth in Industry',
    description: 'Growing as an engineer through real industry experience, taking on more responsibility and depth in software and ML roles over time.',
    icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
    status: 'ACTIVE',
  },
  {
    title: 'Founding an AI/ML Company',
    description: 'Long-term, building my own company or startup focused on creating and integrating AI, ML, and deep learning products.',
    icon: <Rocket className="w-5 h-5 text-pink-400" />,
    status: 'PLANNED',
  },
];

// Helper to style status badges dynamically
const STATUS_STYLES: Record<GoalStatus, { label: string; style: string }> = {
  ACTIVE: {
    label: 'ACTIVE',
    style: 'text-cyan-400/90 bg-cyan-500/10 border-cyan-500/20',
  },
  IN_PROGRESS: {
    label: 'IN PROGRESS',
    style: 'text-amber-400/90 bg-amber-500/10 border-amber-500/20',
  },
  PLANNED: {
    label: 'PLANNED',
    style: 'text-purple-400/90 bg-purple-500/10 border-purple-500/20',
  },
};

export function Vision() {
  return (
    <section 
      id="vision" 
      className="relative min-h-screen py-24 px-6 md:px-12 bg-slate-950 border-t border-white/5 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase block mb-3">
            // 07. Strategic Trajectory
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Future Vision & Focus
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-normal leading-relaxed">
            Moving from full-stack software engineering toward deep learning, LLM systems, and MLOps — with graduate study, industry growth, and eventually building my own AI/ML company as the road ahead.
          </p>
        </div>

        {/* Symmetrical Balanced Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-16">
          {VISION_GOALS.map((goal, index) => {
            const colSpanClass = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
            const statusConfig = STATUS_STYLES[goal.status];

            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${colSpanClass} p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-500/30 transition-colors">
                    {goal.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {goal.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>GOAL_0{index + 1}</span>
                  <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${statusConfig.style}`}>
                    {statusConfig.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Statement Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-slate-950 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-400 text-slate-950 font-bold shrink-0 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Always Building & Learning</h4>
              <p className="text-slate-400 text-sm mt-0.5">From graduate study to industry experience to eventually building my own AI/ML venture — one benchmark, one deployed pipeline at a time.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}