import { motion } from 'framer-motion';

import { LinkButton } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { fadeUp, softFloat } from '@/utils/motion';

export const ResumeSection = () => (
  <motion.section
    className="section-spacing"
    aria-label="Resume"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <SectionHeading
      eyebrow="Resume"
      title="Download resume"
      description="Download the latest resume directly from this portfolio."
    />

    <motion.div variants={softFloat} initial="initial" animate="animate">
      <Card className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-600 dark:text-slate-300">Click below to download my latest resume.</p>
        <LinkButton href="/resume/GeetaRamResume.pdf" download="Geeta-Ram-Resume.pdf">
          Download Resume
        </LinkButton>
      </Card>
    </motion.div>
  </motion.section>
);
