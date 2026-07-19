import { FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { LinkButton } from '@/components/atoms/Button';
import { portfolioData } from '@/data/portfolioData';
import { useTheme } from '@/features/theme/ThemeProvider';
import { fadeUp, staggerContainer } from '@/utils/motion';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const sectionIds = portfolioData.navItems.map((item) => item.href.replace('#', ''));

    const updateFromHash = () => {
      const nextHash = window.location.hash || '#home';
      setActiveHash(nextHash);
    };

    const updateFromScroll = () => {
      const offset = window.scrollY + 140;
      let currentHash = '#home';

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section) {
          continue;
        }

        if (section.offsetTop <= offset) {
          currentHash = `#${sectionId}`;
        }
      }

      setActiveHash(currentHash);
    };

    updateFromHash();
    updateFromScroll();

    window.addEventListener('hashchange', updateFromHash);
    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('resize', updateFromScroll);

    return () => {
      window.removeEventListener('hashchange', updateFromHash);
      window.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('resize', updateFromScroll);
    };
  }, []);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/65"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto flex h-16 w-[min(1320px,94vw)] items-center justify-between gap-3">
        <a href="#home" className="group inline-flex items-center font-display text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-brand-500 via-indigo-500 to-accent-500 bg-clip-text text-transparent transition duration-300 group-hover:brightness-110">
            {portfolioData.name}
          </span>
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
              onClick={() => setActiveHash(item.href)}
              className={`group relative pb-2 text-sm font-medium transition-colors duration-300 ${
                activeHash === item.href
                  ? 'text-brand-600 dark:text-brand-300'
                  : 'text-slate-700 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300'
              }`}
              variants={fadeUp}
            >
              {item.label}

              {activeHash === item.href ? (
                <motion.span
                  layoutId="nav-active-underline"
                  className="absolute inset-x-0 -bottom-[3px] h-[3px] rounded-full bg-brand-600 dark:bg-brand-300"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              ) : (
                <span className="absolute inset-x-0 -bottom-[3px] h-[3px] origin-left scale-x-0 rounded-full bg-brand-600 transition-transform duration-300 group-hover:scale-x-100 dark:bg-brand-300" />
              )}
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
