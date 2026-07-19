import { motion } from 'framer-motion';

import { LinkButton } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { portfolioData } from '@/data/portfolioData';

export const HeroSection = () => (
  <section id="home" className="relative pt-14 md:pt-20">
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <p className="mb-4 inline-flex rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
          {portfolioData.years} of Craft
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
          {portfolioData.role}
          <span className="mt-2 block bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
            {portfolioData.heroTagline}
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
          {portfolioData.heroSummary}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <LinkButton href="#projects">View Projects</LinkButton>
          <LinkButton variant="secondary" href="#contact">
            Book a Consultation
          </LinkButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
      >
        <Card className="relative overflow-hidden">
          <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-brand-500/20 blur-2xl" aria-hidden="true" />
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Location</p>
          <p className="mt-2 font-display text-3xl text-slate-950 dark:text-white">{portfolioData.location}</p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Experience</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {portfolioData.years}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Specialty</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">Design Systems</dd>
            </div>
          </dl>
        </Card>
      </motion.div>
    </div>
  </section>
);
