import { motion } from 'framer-motion';

import { Card } from '@/components/atoms/Card';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { ContactForm } from '@/features/contact/ContactForm';
import { portfolioData } from '@/data/portfolioData';
import { fadeUp, staggerContainer } from '@/utils/motion';

export const ContactSection = () => (
  <motion.section
    id="contact"
    className="section-spacing"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <SectionHeading
      eyebrow="Contact"
      title="Let&apos;s build something outstanding"
      description="Share your goals, constraints, and timelines. I will reply with a practical plan."
    />

    <motion.div
      className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]"
      variants={staggerContainer(0.12, 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={fadeUp}>
      <Card>
        <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Email</p>
        <a
          href={`mailto:${portfolioData.email}`}
          className="mt-2 inline-flex text-base font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
        >
          {portfolioData.email}
        </a>
        <p className="mt-4 text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Phone</p>
        <a
          href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`}
          className="mt-2 inline-flex text-base font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
        >
          {portfolioData.phone}
        </a>
        <p className="mt-4 text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Location</p>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{portfolioData.location}</p>
        <p className="mt-4 text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">LinkedIn</p>
        <a
          href={portfolioData.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
        >
          linkedin.com/in/geeta-ram-5220512a
        </a>
      </Card>
      </motion.div>
      <motion.div variants={fadeUp}>
      <Card>
        <ContactForm />
      </Card>
      </motion.div>
    </motion.div>
  </motion.section>
);
