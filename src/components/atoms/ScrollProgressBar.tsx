import { motion, useSpring } from 'framer-motion';
import { useEffect } from 'react';

import { useScrollProgress } from '@/hooks/useScrollProgress';

export const ScrollProgressBar = () => {
  const progress = useScrollProgress();
  const scaleX = useSpring(progress, {
    stiffness: 160,
    damping: 28,
    mass: 0.3
  });

  useEffect(() => {
    scaleX.set(progress);
  }, [progress, scaleX]);

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed left-0 top-0 z-[100] h-1 w-full bg-gradient-to-r from-brand-500 via-cyan-400 to-teal-400"
      aria-hidden="true"
    />
  );
};
