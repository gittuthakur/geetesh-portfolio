import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

import { LinkButton } from '@/components/atoms/Button';
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
      className="max-w-none"
      eyebrow="Contact"
      title="Get In Touch"
      description="Looking for a Front-End Developer and UI/UX Designer to create intuitive, scalable, and user-centered digital products? Let&apos;s connect and build exceptional web and mobile experiences together."
    />

    <motion.div
      className="grid gap-6 lg:grid-cols-2"
      variants={staggerContainer(0.12, 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={fadeUp}>
        <div className="space-y-5">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Let&apos;s Build Great Products Together</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              I&apos;m always open to full-time opportunities, freelance projects, contract roles, and product collaborations. Whether you&apos;re building a SaaS platform, AI product, enterprise application, or mobile app, I&apos;d be happy to discuss how thoughtful design can create better user experiences and business value.
            </p>
          </div>

          <Card>
            <div className="space-y-4">
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Email</p>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="mt-1 inline-flex text-base font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  {portfolioData.email}
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Phone</p>
                <a
                  href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`}
                  className="mt-1 inline-flex text-base font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  {portfolioData.phone}
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Location</p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{portfolioData.location}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-base font-semibold text-slate-900 dark:text-slate-100">Download Resume</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">Get my complete professional profile</p>
              </div>
              <LinkButton
                href="/resume/GeetaRamResume.pdf"
                download="Geeta-Ram-Resume.pdf"
                showIcon={false}
                className="h-11 px-5 whitespace-nowrap"
              >
                <span className="inline-flex items-center gap-2">
                  <FiDownload className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </span>
              </LinkButton>
            </div>
          </Card>
        </div>
      </motion.div>
      <motion.div variants={fadeUp}>
        <Card className="md:p-8">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Send Message</h3>
          <div className="mt-5">
            <ContactForm />
          </div>
        </Card>
      </motion.div>
    </motion.div>
  </motion.section>
);
