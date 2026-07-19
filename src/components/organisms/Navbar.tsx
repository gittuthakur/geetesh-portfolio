import { FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { LinkButton } from '@/components/atoms/Button';
import { portfolioData } from '@/data/portfolioData';
import { useTheme } from '@/features/theme/ThemeProvider';
import { fadeUp, staggerContainer } from '@/utils/motion';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/65"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto flex h-16 w-[min(1320px,94vw)] items-center justify-between gap-3">
        <a href="#home" className="font-display text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
          {portfolioData.name}
        </a>

        <motion.nav
          className="hidden items-center gap-5 md:flex"
          aria-label="Primary"
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          animate="visible"
        >
          {portfolioData.navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              variants={fadeUp}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white/80 text-slate-700 transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <LinkButton href="#contact" size="sm" className="h-10 px-4" showIcon={false}>
            Let&apos;s Talk
          </LinkButton>
        </div>
      </div>
    </motion.header>
  );
};
