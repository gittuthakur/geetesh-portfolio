import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';

interface ProjectCardProps {
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  href: string;
  onPreview: () => void;
}

export const ProjectCard = ({
  title,
  summary,
  impact,
  stack,
  href,
  onPreview
}: ProjectCardProps) => (
  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.24 }}>
    <Card className="group h-full">
      <h3 className="font-display text-2xl text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{summary}</p>
      <p className="mt-2 text-sm font-medium text-brand-600 dark:text-brand-400">{impact}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-900/5 px-2.5 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button variant="secondary" size="sm" onClick={onPreview}>
          Quick View
        </Button>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
        >
          Live Project <FiExternalLink />
        </a>
      </div>
    </Card>
  </motion.div>
);
