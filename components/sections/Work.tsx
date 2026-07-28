// components/sections/Work.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Calendar, CheckCircle2, Code2, ExternalLink } from 'lucide-react';

const WORK_EXPERIENCES = [
  {
    role: 'Full-Stack Web & Systems Developer Intern',
    company: 'PT Dirgantara Indonesia (PTDI)',
    period: '2025 — Present',
    location: 'Bandung, Indonesia',
    type: 'Professional Internship',
    description: 'Engineering administrative archive systems, dynamic data management portals, and internal backend tools using Laravel and Filament PHP.',
    stack: ['Laravel', 'Filament PHP', 'MySQL', 'PDF.js', 'Tailwind CSS', 'Git'],
    highlights: [
      'Built and extended the GCG (Good Corporate Governance) module, including a centralized configuration registry, PDF.js-based in-browser document viewer, and admin upload workflows.',
      'Built custom Filament PHP admin resources, form fields, and relation managers for internal data structures.',
      'Implemented robust backend logic, handled type-safe enum mappings, and resolved framework runtime errors.',
      'Optimized database queries and structured RESTful endpoints for efficient administrative workflows.'
    ],
    links: [
      { label: 'WBS Portal', url: 'https://wbs.indonesian-aerospace.com/' },
      { label: 'PTDI Website', url: 'https://www.indonesian-aerospace.com/en/' }
    ]
  }
];

export function Work() {
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
      id="work" 
      className="relative min-h-screen py-24 px-6 md:px-12 bg-slate-900 border-t border-white/5 overflow-hidden"
    >
      {/* Background Cyan Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase block mb-3">
            // 05. Professional Background
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Work Experience
          </h2>
        </motion.div>

        {/* Work Timeline Cards */}
        <div className="space-y-8">
          {WORK_EXPERIENCES.map((job) => (
            <motion.div
              key={job.role}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="bg-slate-950/60 border border-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl hover:border-cyan-500/20 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/5 pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                      {job.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      • {job.location}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {job.role}
                  </h3>
                  <p className="text-sm font-mono text-slate-300 font-medium mt-1">
                    {job.company}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-white/5 self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{job.period}</span>
                </div>
              </div>

              {/* Role Summary */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {job.description}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-3 mb-6">
                <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Key Impact & Deliverables:
                </h4>
                <ul className="space-y-2">
                  {job.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mb-6">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              {job.links && job.links.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
                  {job.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 bg-cyan-500/5 hover:bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}