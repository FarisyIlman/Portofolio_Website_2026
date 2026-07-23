// components/sections/Projects.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '@/data/portfolioData';
import { Project } from '@/types';
import { ExternalLink, Search, FolderKanban } from 'lucide-react';

const SECTIONS = ['All', 'Web Development', 'Machine Learning', 'Security', 'IoT / Embedded'] as const;

export function Projects() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Execution Processing Filter Matrix
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesTag = selectedTag === 'All' || project.category === selectedTag;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesTag && matchesSearch;
  });

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-24 px-6 md:px-12 bg-slate-900 border-t border-white/5 overflow-hidden"
    >
      {/* Deep Blue & Purple Background Lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase block mb-3">// 03. Applied Engineering</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Project Case Matrix</h2>
          </div>

          {/* Real-time Filter Input Box Vector */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Query stack, feature, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-sm font-mono bg-slate-950 rounded-xl border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all"
            />
          </div>
        </div>

        {/* Dynamic Category Tag Select Toggles */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/5 pb-6">
          {SECTIONS.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-medium transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                  : 'bg-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Core Layout Interface Cards Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-slate-950/60 border border-white/10 backdrop-blur-md p-8 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Category & Badge Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/5 px-2.5 py-1 rounded border border-cyan-500/10">
                      {project.category}
                    </span>
                    <FolderKanban className="w-4 h-4 text-slate-600 group-hover:text-cyan-400/60 transition-colors" />
                  </div>

                  {/* Title Statement */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Short Summary Section Block Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Feature Mapping Loops */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">// Core Vectors:</h4>
                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside marker:text-cyan-500/50">
                      {project.features.map((feature, i) => (
                        <li key={i} className="line-clamp-1">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Technology Pills Cloud Array */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Source Access Action Control Row */}
                  <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span>Source</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors ml-auto"
                      >
                        <span>Live Run</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Filtering Results Catch State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 border border-dashed border-white/5 rounded-2xl bg-slate-950/10"
          >
            <p className="text-sm font-mono text-slate-500">
              [ NO MATCHING PIPELINES DETECTED IN THE ARCHIVE FOUND ]
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}