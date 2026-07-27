'use client';

import React, { useRef } from 'react';
import { motion, Variants, useScroll, useSpring, useTransform } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { TIMELINE_DATA } from '@/data/portfolioData';

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter data selain tipe 'education'
  const experiences = TIMELINE_DATA.filter((item) => item.type !== 'education');

  // Tracking posisi scroll pada area container timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 80%'],
  });

  // Smooth animation untuk pergerakan falling star
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transformasi tinggi garis & posisi falling star dari 0% ke 100%
  const lineScaleY = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const starTop = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen py-24 px-4 md:px-12 bg-slate-950 border-t border-white/5 overflow-hidden"
    >
      {/* Radiant Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="mb-20 text-center"
        >
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase block mb-3">
            // 05. Leadership & Organization
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Track Record
          </h2>
        </motion.div>

        {/* Timeline Container dengan Center Axis */}
        <div ref={containerRef} className="relative space-y-16">
          
          {/* 1. Garis Dasar Timeline di Tengah */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

          {/* 2. Garis Glow Aktif Mengikuti Scroll */}
          <motion.div
            style={{ height: lineScaleY }}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)] -translate-x-1/2 origin-top z-10"
          />

          {/* 3. EFEK FALLING STAR DI TENGAH */}
          <motion.div
            style={{ top: starTop }}
            className="absolute left-4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 transition-transform duration-75"
          >
            {/* Ekor Cahaya Jatuh */}
            <div className="absolute left-1/2 bottom-1/2 w-[2px] h-20 bg-gradient-to-t from-cyan-400 via-indigo-500/50 to-transparent -translate-x-1/2" />
            
            {/* Kepala Bintang */}
            <div className="relative w-7 h-7 rounded-full bg-slate-950 border border-cyan-400 flex items-center justify-center shadow-[0_0_18px_rgba(34,211,238,0.9)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
              <span className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" />
            </div>
          </motion.div>

          {/* List Experience Item */}
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="relative pl-10 md:pl-0"
            >
              {/* Point Icon Center Indicator */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-slate-950 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.2)] z-20">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Grid 2 Sisi: KIRI = Metadata, KANAN = Responsibilities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-stretch">
                
                {/* SISI KIRI (Left Column): ID, Type, Title, Subtitle, Period */}
                <div className="bg-slate-900/50 border border-white/10 backdrop-blur-md p-6 rounded-2xl hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20 inline-block capitalize">
                        {exp.type}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        ID: {exp.id}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                      {exp.title}
                    </h3>

                    <p className="text-xs font-mono text-slate-400">
                      {exp.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <div className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* SISI KANAN (Right Column): Responsibilities */}
                <div className="bg-slate-900/50 border border-white/10 backdrop-blur-md p-6 rounded-2xl hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-center">
                  <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-3">
                    // Key Outcomes & Operations:
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
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