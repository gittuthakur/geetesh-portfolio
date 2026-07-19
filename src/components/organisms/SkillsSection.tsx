import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/atoms/SectionHeading';
import { SkillCard } from '@/components/molecules/SkillCard';
import { portfolioData } from '@/data/portfolioData';
import { fadeUp, staggerContainer } from '@/utils/motion';

export const SkillsSection = () => (
  <motion.section
    id="skills"
    className="section-spacing"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <SectionHeading
      eyebrow="Skills"
      title="Technology and craft across the UI lifecycle"
      description="A balanced toolkit for strategy, design execution, and frontend engineering."
    />

    <motion.div
      className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      variants={staggerContainer(0.08, 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {portfolioData.skillGroups.map((group, index) => (
        <SkillCard key={group.title} title={group.title} items={group.items} index={index} />
      ))}
    </motion.div>
  </motion.section>
);
