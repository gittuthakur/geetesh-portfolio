import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { portfolioData } from '@/data/portfolioData';
import { fadeUp, staggerContainer } from '@/utils/motion';

export const Footer = () => (
  <motion.footer
    className="border-t border-slate-200/80 py-8 dark:border-slate-800/80"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="mx-auto flex w-[min(1320px,94vw)] flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} {portfolioData.name}. Crafted with care.
      </p>
      <motion.div
        className="flex items-center gap-4"
        variants={staggerContainer(0.06, 0.03)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {portfolioData.socials.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.ariaLabel}
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            variants={fadeUp}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {social.label} <FiArrowUpRight />
          </motion.a>
        ))}
      </motion.div>
    </div>
  </motion.footer>
);
