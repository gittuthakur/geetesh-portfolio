import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/80 text-slate-900 shadow-soft backdrop-blur dark:border-white/20 dark:bg-slate-900/85 dark:text-slate-100"
      aria-label="Back to top"
    >
      <FiArrowUp />
    </motion.button>
  );
};
