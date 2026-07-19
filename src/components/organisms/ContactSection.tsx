import { Card } from '@/components/atoms/Card';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { ContactForm } from '@/features/contact/ContactForm';
import { portfolioData } from '@/data/portfolioData';

export const ContactSection = () => (
  <section id="contact" className="section-spacing">
    <SectionHeading
      eyebrow="Contact"
      title="Let&apos;s build something outstanding"
      description="Share your goals, constraints, and timelines. I will reply with a practical plan."
    />

    <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
      <Card>
        <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Email</p>
        <a
          href={`mailto:${portfolioData.email}`}
          className="mt-2 inline-flex text-base font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
        >
          {portfolioData.email}
        </a>
      </Card>
      <Card>
        <ContactForm />
      </Card>
    </div>
  </section>
);
