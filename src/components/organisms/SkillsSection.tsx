import { SectionHeading } from '@/components/atoms/SectionHeading';
import { SkillCard } from '@/components/molecules/SkillCard';
import { portfolioData } from '@/data/portfolioData';

export const SkillsSection = () => (
  <section id="skills" className="section-spacing">
    <SectionHeading
      eyebrow="Skills"
      title="Technology and craft across the UI lifecycle"
      description="A balanced toolkit for strategy, design execution, and frontend engineering."
    />

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {portfolioData.skillGroups.map((group, index) => (
        <SkillCard key={group.title} title={group.title} items={group.items} index={index} />
      ))}
    </div>
  </section>
);
