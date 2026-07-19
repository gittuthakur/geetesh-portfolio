import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/atoms/SectionHeading';
import { TestimonialCard } from '@/components/molecules/TestimonialCard';
import { portfolioData } from '@/data/portfolioData';
import { fadeUp, staggerContainer } from '@/utils/motion';

export const TestimonialsSection = () => (
  <motion.section
    className="section-spacing"
    aria-label="Testimonials"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <SectionHeading
      eyebrow="Testimonials"
      title="What collaborators say"
      description="A snapshot of outcomes and experiences from product and engineering stakeholders."
    />

    <motion.div
      className="grid gap-4 md:grid-cols-2"
      variants={staggerContainer(0.1, 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {portfolioData.testimonials.map((item) => (
        <TestimonialCard key={item.name} {...item} />
      ))}
    </motion.div>
  </motion.section>
);
