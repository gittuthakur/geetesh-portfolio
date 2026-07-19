import { motion } from 'framer-motion';

import { Card } from '@/components/atoms/Card';
import { fadeUp } from '@/utils/motion';

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export const TimelineItem = ({
  role,
  company,
  period,
  location,
  achievements
}: TimelineItemProps) => (
  <motion.article
    className="relative pl-8"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
  >
    <span className="absolute left-0 top-6 h-3 w-3 rounded-full bg-brand-500 ring-4 ring-brand-500/20 dark:bg-brand-400 dark:ring-brand-400/20" />
    <span className="absolute left-[5px] top-10 h-[calc(100%-0.5rem)] w-px bg-slate-300 dark:bg-slate-700" />
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.22 }}>
      <Card className="mb-6">
      <header className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-xl text-slate-950 dark:text-white">{role}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {company} · {location}
          </p>
        </div>
        <span className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
          {period}
        </span>
      </header>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {achievements.map((item) => (
          <li key={item} className="list-disc pl-1 marker:text-brand-500">
            {item}
          </li>
        ))}
      </ul>
      </Card>
    </motion.div>
  </motion.article>
);
