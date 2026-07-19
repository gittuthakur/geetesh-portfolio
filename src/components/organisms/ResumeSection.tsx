import { LinkButton } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { portfolioData } from '@/data/portfolioData';

export const ResumeSection = () => (
  <section className="section-spacing" aria-label="Resume">
    <SectionHeading
      eyebrow="Resume"
      title="Download resume"
      description="Download the latest resume directly from this portfolio."
    />

    <Card className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-slate-600 dark:text-slate-300">Click below to download my latest resume.</p>
      <LinkButton href={portfolioData.resumeUrl} download>
        Download Resume
      </LinkButton>
    </Card>
  </section>
);
