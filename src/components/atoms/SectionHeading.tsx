import { motion } from 'framer-motion';

import { fadeUp, staggerContainer } from '@/utils/motion';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeading = ({ eyebrow, title, description, className }: SectionHeadingProps) => (
  <motion.header
    className={cn('mb-8 max-w-3xl', className)}
    variants={staggerContainer(0.08, 0.02)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.35 }}
  >
    <motion.p
      className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400"
      variants={fadeUp}
    >
      {eyebrow}
    </motion.p>
    <motion.h2
      className="font-display text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl"
      variants={fadeUp}
    >
      {title}
    </motion.h2>
    {description ? (
      <motion.p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300" variants={fadeUp}>
        {description}
      </motion.p>
    ) : null}
  </motion.header>
);
