// app/page.tsx
'use client';

import React from 'react';
import { Navbar } from '@/components/shared/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Work } from '@/components/sections/Work';
import { Experience } from '@/components/sections/Experience';
import { Vision } from '@/components/sections/Vision';
// import { Ambitions } from '@/components/sections/Ambitions'; // Uncomment once Ambitions.tsx is created
import { Footer } from '@/components/shared/Footer';
import { Ambitions } from '@/components/sections/Ambitions';

export default function Home() {
  return (
    <main className="min-h-screen text-slate-100 bg-slate-950 relative overflow-x-hidden">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Section Content */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Work />
      <Experience />
      <Vision />
      {/* <Ambitions /> */}
      <Ambitions />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}