import { ReactNode, Suspense } from 'react';
import { motion } from 'framer-motion';

import { BackToTopButton } from '@/components/atoms/BackToTopButton';
import { ScrollProgressBar } from '@/components/atoms/ScrollProgressBar';
import { Footer } from '@/components/organisms/Footer';
import { Navbar } from '@/components/organisms/Navbar';
import { fadeIn } from '@/utils/motion';

interface PortfolioTemplateProps {
  children: ReactNode;
}

export const PortfolioTemplate = ({ children }: PortfolioTemplateProps) => (
  <div className="relative min-h-screen overflow-x-hidden bg-canvas-50 text-slate-900 transition-colors dark:bg-canvas-900 dark:text-slate-100">
    <motion.div
      className="pointer-events-none absolute inset-0 -z-10"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      aria-hidden="true"
    >
      <motion.div
        className="absolute -left-16 top-28 h-56 w-56 rounded-full bg-brand-500/15 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -14, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-4rem] top-80 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl"
        animate={{ x: [0, -22, 0], y: [0, 10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>

    <ScrollProgressBar />
    <Navbar />
    <motion.main
      className="mx-auto w-[min(1320px,94vw)] pb-16 pt-16"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Suspense fallback={<p className="py-20 text-sm text-slate-500">Loading section...</p>}>{children}</Suspense>
    </motion.main>
    <Footer />
    <BackToTopButton />
  </div>
);
