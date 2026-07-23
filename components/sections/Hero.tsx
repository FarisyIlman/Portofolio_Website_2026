// components/sections/Hero.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Terminal } from 'lucide-react';

const ROLES = [
  'Informatics Engineer',
  'Intelligent Systems Developer',
  'Full Stack Developer',
  'Machine Learning Engineer',
  'Deep Learning Enthusiast',
  'Large Language Model Integrator',
  'IoT & Embedded Systems Specialist',
  'Data Science Analyst',
  'LLM and RAG Future Engineer'
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typing Effect Engine for the Dynamic Tagline
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = ROLES[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTypingSpeed(2000); // Wait at full word
          setIsDeleting(true);
        } else {
          setTypingSpeed(70);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(500); // Pause before next word
        } else {
          setTypingSpeed(40);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  // Typed Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 py-20 bg-slate-950"
    >
      {/* Premium Ambient Background Glow Vectors */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center"
      >
        {/* Environment Status Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-cyan-400 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm mb-6"
        >
          <Terminal className="w-3.5 h-3.5 animate-pulse" />
          <span>SYSTEM: ARCHITECTURE ACTIVE</span>
        </motion.div>

        {/* Master Identity Statement */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 select-none"
        >
          Farisy <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Ilman</span>
        </motion.h1>

        {/* Dynamic Interactive Typing Subtitle */}
        <motion.div 
          variants={itemVariants}
          className="h-12 text-xl md:text-3xl font-mono text-slate-300 font-medium mb-10 flex items-center justify-center gap-2"
        >
          <span>I build</span>
          <span className="text-cyan-400 border-r-2 border-cyan-400 animate-caret pr-1 min-w-[20px]">
            {currentText}
          </span>
        </motion.div>

        {/* Short Executive Narrative summary */}
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-normal"
        >
          Seventh-semester Informatics undergraduate building a foundation in software engineering while moving toward machine learning, deep learning, and LLM-based systems. Aiming to grow into MLOps — designing and deploying reliable, production-ready AI pipelines. 
        </motion.p>

        {/* Premium Action Controls */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <a 
            href="#projects" 
            className="group relative px-8 py-4 text-sm font-bold text-slate-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(34,211,238,0.25)] flex items-center gap-2 overflow-hidden"
          >
            <span>View Architecture Matrix</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 text-sm font-bold text-slate-200 rounded-full border border-slate-700 hover:border-slate-400 hover:bg-white/5 transition-all"
          >
            Initiate Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle Bottom Transition Gradient overlay into section 2 */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-indigo-950/40 to-transparent pointer-events-none" />
    </section>
  );
}