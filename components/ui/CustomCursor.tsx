// components/ui/CustomCursor.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Declare all primary motion value pointers at the absolute top layer
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. Define structural spring configs ahead of any conditional returns
  const auraConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const coreConfig = { damping: 50, stiffness: 800 };

  const cursorXSpringAura = useSpring(cursorX, auraConfig);
  const cursorYSpringAura = useSpring(cursorY, auraConfig);

  const cursorXSpringCore = useSpring(cursorX, coreConfig);
  const cursorYSpringCore = useSpring(cursorY, coreConfig);

  useEffect(() => {
    // Only activate cursor tracking tracking systems on desktop hardware link pointer maps
    const hasMouse = window.matchMedia('(pointer: fine)').matches;
    if (!hasMouse) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  // Safe early exit condition — structural hook pipelines are completely declared above
  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Fluid Aura */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/30 pointer-events-none z-50 mix-blend-screen bg-cyan-500/5 hidden md:block"
        style={{
          x: cursorXSpringAura,
          y: cursorYSpringAura,
        }}
      />
      {/* High Precision Center Core */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-50 mix-blend-screen hidden md:block"
        style={{
          x: cursorXSpringCore,
          y: cursorYSpringCore,
          left: 12,
          top: 12
        }}
      />
    </>
  );
}