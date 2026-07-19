import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/atoms/SectionHeading';
import { TimelineItem } from '@/components/molecules/TimelineItem';
import { portfolioData } from '@/data/portfolioData';
import { fadeUp, staggerContainer } from '@/utils/motion';

export const ExperienceSection = () => (
  <motion.section
    id="experience"
    className="section-spacing"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <SectionHeading
      eyebrow="Experience"
      title="Career timeline"
      description="A progression from implementation specialist to product-facing UI leadership."
    />

    <motion.div
      className="relative ml-2"
      variants={staggerContainer(0.12, 0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {portfolioData.experience.map((item) => (
        <TimelineItem key={`${item.role}-${item.company}`} {...item} />
      ))}
    </motion.div>
  </motion.section>
);
