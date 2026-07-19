import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/atoms/SectionHeading';
import { portfolioData } from '@/data/portfolioData';
import { fadeUp } from '@/utils/motion';

export const AboutSection = () => (
  <motion.section
    id="about"
    className="section-spacing"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.22 }}
  >
    <SectionHeading
      className="max-w-none"
      eyebrow="About"
      title="Bridging product thinking and frontend excellence"
      description={portfolioData.about}
    />
  </motion.section>
);
