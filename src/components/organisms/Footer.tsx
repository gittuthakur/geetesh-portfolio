import { FiHeart, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { portfolioData } from '@/data/portfolioData';
import { fadeUp, staggerContainer } from '@/utils/motion';

export const Footer = () => (
  <motion.footer
    className="border-t border-slate-200/80 bg-white/40 py-12 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/35"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="mx-auto w-[min(1320px,94vw)]">
      <motion.div
        className="grid gap-10 border-b border-slate-200/70 pb-10 md:grid-cols-[1.4fr_0.8fr_0.8fr] dark:border-slate-800/70"
        variants={staggerContainer(0.06, 0.03)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp}>
          <h3 className="font-display text-2xl font-bold">
            <span className="bg-gradient-to-r from-brand-500 via-indigo-500 to-accent-500 bg-clip-text text-transparent">
              {portfolioData.name}
            </span>
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Senior Front-End Developer and UI/UX Designer focused on scalable SaaS platforms, enterprise products, and responsive web experiences.
          </p>
          <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <p className="inline-flex items-center gap-2">
              <FiMapPin className="h-4 w-4 text-brand-500 dark:text-brand-300" aria-hidden="true" />
              {portfolioData.location} • Open to Remote &amp; Relocation
            </p>
            <a href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 me-3 hover:text-brand-600 dark:hover:text-brand-300">
              <FiPhone className="h-4 w-4 text-brand-500 dark:text-brand-300" aria-hidden="true" />
              {portfolioData.phone}
            </a>
            <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center gap-2 hover:text-brand-600 dark:hover:text-brand-300">
              <FiMail className="h-4 w-4 text-brand-500 dark:text-brand-300" aria-hidden="true" />
              {portfolioData.email}
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2">
            {portfolioData.navItems.slice(0, 5).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 transition hover:translate-x-0.5 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">Let&apos;s Connect</h4>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Available for Full-time</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Freelance • Contract • Remote</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {portfolioData.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.ariaLabel}
                className="rounded-full border border-slate-300/80 px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-brand-500/50 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400/50 dark:hover:text-brand-300"
              >
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400"
        variants={staggerContainer(0.06, 0.03)}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p>Copyright © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </motion.div>
    </div>
  </motion.footer>
);
