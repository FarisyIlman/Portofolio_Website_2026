// components/shared/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Vision', href: '#vision', id: 'vision' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Intersection Observer to highlight active section in navbar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -40% 0px' }
    );

    const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'experience', 'vision'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleDownloadCV = () => {
    // Point this to your actual CV file inside the /public directory
    const cvUrl = '/cv.pdf'; 
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Farisy_Ilman_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold tracking-tighter text-white">
          Farisy<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-7">
          {NAV_LINKS.map((link) => {
            const isCurrent = activeId === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-mono font-bold tracking-wider uppercase transition-colors relative py-1 ${
                  isCurrent ? 'text-cyan-400' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {link.name}
                {isCurrent && (
                  <motion.span 
                    layoutId="activeNavIndicator" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          
          <button 
            onClick={handleDownloadCV}
            className="px-4 py-2 text-xs font-mono font-bold text-slate-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center gap-1.5"
          >
            <span>Download CV</span>
            <Download className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 border-b border-white/10 backdrop-blur-xl overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-mono font-bold uppercase tracking-wider py-2 border-b border-white/5 ${
                    activeId === link.id ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDownloadCV();
                }}
                className="mt-3 w-full py-3 text-xs font-mono font-bold text-slate-950 bg-cyan-400 rounded-xl hover:bg-cyan-300 transition-all flex items-center justify-center gap-2"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}