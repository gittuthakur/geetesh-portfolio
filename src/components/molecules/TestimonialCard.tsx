import { motion } from 'framer-motion';

import { Card } from '@/components/atoms/Card';
import { fadeUp } from '@/utils/motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export const TestimonialCard = ({ quote, name, role }: TestimonialCardProps) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    whileHover={{ y: -6 }}
    transition={{ duration: 0.24 }}
  >
    <Card className="h-full">
      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">“{quote}”</p>
      <div className="mt-5">
        <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
        <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{role}</p>
      </div>
    </Card>
  </motion.div>
);
