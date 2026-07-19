import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/atoms/SectionHeading';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { portfolioData } from '@/data/portfolioData';
import { fadeUp, staggerContainer } from '@/utils/motion';

export const ServicesSection = () => (
  <motion.section
    id="services"
    className="section-spacing"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <SectionHeading
      eyebrow="Services"
      title="How I can help your team"
      description="Consulting and execution support for teams scaling premium frontend products."
    />

    <motion.div
      className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      variants={staggerContainer(0.08, 0.04)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {portfolioData.services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </motion.div>
  </motion.section>
);
