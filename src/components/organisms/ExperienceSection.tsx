import { SectionHeading } from '@/components/atoms/SectionHeading';
import { TimelineItem } from '@/components/molecules/TimelineItem';
import { portfolioData } from '@/data/portfolioData';

export const ExperienceSection = () => (
  <section id="experience" className="section-spacing">
    <SectionHeading
      eyebrow="Experience"
      title="Career timeline"
      description="A progression from implementation specialist to product-facing UI leadership."
    />

    <div className="relative ml-2">
      {portfolioData.experience.map((item) => (
        <TimelineItem key={`${item.role}-${item.company}`} {...item} />
      ))}
    </div>
  </section>
);
