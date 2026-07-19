import { motion } from 'framer-motion';

import { Card } from '@/components/atoms/Card';

interface SkillCardProps {
  title: string;
  items: string[];
  index: number;
}

export const SkillCard = ({ title, items, index }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.08, duration: 0.45 }}
  >
    <Card className="h-full">
      <h3 className="mb-4 font-display text-xl text-slate-900 dark:text-slate-100">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  </motion.div>
);
