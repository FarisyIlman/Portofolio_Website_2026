// components/shared/Footer.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp, Send, Terminal, CheckCircle } from 'lucide-react';

export function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Simulating form submission
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  return (
    <footer id="contact" className="relative bg-slate-950 border-t border-white/5 pt-24 pb-12 px-6 md:px-12 overflow-hidden transition-colors duration-1000">
      {/* Subtle background overlay anchor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Upper Segment: Integrated Gateway Connect Form Entry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase block">// 09. Channel Connect</span>
            <h2 className="text-3xl font-black text-white tracking-tight">Let's Build Something Exceptional</h2>
            <p className="text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              Open for technical consultations, full-stack systems design engagements, or strategic organizational alignment inquiries.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {/* GitHub */}
              <a 
                href="https://github.com/FarisyIlman" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5" 
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/farisy-ilman-syarif-890294317/" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all border border-white/5" 
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:farisysyarif@gmail.com" 
                className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-emerald-400 hover:bg-white/10 transition-all border border-white/5"
                aria-label="Send Direct Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Interactive Form */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  required
                  placeholder="Identity Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 text-sm font-mono text-slate-200 focus:outline-none focus:border-cyan-500/40 transition-colors"
                />
                <input 
                  type="email" 
                  required
                  placeholder="Secure Gateway Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 text-sm font-mono text-slate-200 focus:outline-none focus:border-cyan-500/40 transition-colors"
                />
              </div>
              <textarea 
                rows={4} 
                required
                placeholder="Transmission parameters / project details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 text-sm font-mono text-slate-200 focus:outline-none focus:border-cyan-500/40 transition-colors resize-none"
              />
              
              <motion.button 
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.15)] ${
                  status === 'sent' 
                    ? 'bg-emerald-500 text-slate-950' 
                    : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950'
                }`}
              >
                {status === 'sending' && <span>Deploying...</span>}
                {status === 'sent' && (
                  <>
                    <span>Transmission Dispatched</span>
                    <CheckCircle className="w-3.5 h-3.5" />
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <span>Deploy Transmission Link</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Lower Segment: Footer Links */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xl font-bold tracking-tighter text-white">
              Farisy<span className="text-cyan-400">.</span>
            </div>
            <p className="text-xs text-slate-500 max-w-xs font-normal">
              Architecting secure full-stack applications, intelligent systems backends, and operational engineering frameworks.
            </p>
          </div>

          {/* Navigation Map */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#vision" className="hover:text-cyan-400 transition-colors">Vision</a>
          </div>

          {/* Scroll to Top Button */}
          <button 
            onClick={scrollToTop}
            aria-label="Return to top of page"
            className="p-3 bg-white/5 border border-white/5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group shadow-lg"
            title="Return to Core Origin"
          >
            <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Signature Line */}
        <div className="mt-12 border-t border-white/[0.03] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-600">
          <p>© {new Date().getFullYear()} Farisy Ilman. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-cyan-500" /> 
            <span>Built with Next.js (Turbopack), Tailwind CSS, TypeScript, Framer Motion.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}