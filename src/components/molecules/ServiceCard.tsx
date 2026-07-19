import { motion } from 'framer-motion';

import { Card } from '@/components/atoms/Card';
import { fadeUp } from '@/utils/motion';

interface ServiceCardProps {
  title: string;
  description: string;
}

export const ServiceCard = ({ title, description }: ServiceCardProps) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    whileHover={{ y: -6, scale: 1.01 }}
    transition={{ duration: 0.25 }}
  >
    <Card className="h-full">
      <h3 className="font-display text-xl text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
    </Card>
  </motion.div>
);
