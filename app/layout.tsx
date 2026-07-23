// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navbar } from '@/components/shared/Navbar';

export const metadata: Metadata = {
  title: 'Farisy Ilman | Software Architecture & Intelligent Systems Portfolio',
  description: 'Production-grade personal digital showcase highlighting advanced full-stack architectures, intelligent system solutions, and executive organization leadership.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-cyan-500/30 selection:text-cyan-200 bg-slate-950 text-slate-100">
        <CustomCursor />
        {/* Global Persistent Navigation */}
        <Navbar /> 
        
        {/* Main Content Viewport */}
        <main className="relative min-h-screen overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}