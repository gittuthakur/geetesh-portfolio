import { LinkButton } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { portfolioData } from '@/data/portfolioData';

export const ResumeSection = () => (
  <section className="section-spacing" aria-label="Resume">
    <SectionHeading
      eyebrow="Resume"
      title="Download full profile"
      description="A concise PDF with selected achievements, domain expertise, and project highlights."
    />

    <Card className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-slate-600 dark:text-slate-300">
        Prefer an offline copy? Download the latest resume version.
      </p>
      <LinkButton href={portfolioData.resumeUrl} target="_blank" rel="noreferrer">
        Download Resume
      </LinkButton>
    </Card>
  </section>
);
