import { SectionHeading } from '@/components/atoms/SectionHeading';
import { portfolioData } from '@/data/portfolioData';

export const AboutSection = () => (
  <section id="about" className="section-spacing">
    <SectionHeading
      eyebrow="About"
      title="Bridging product thinking and frontend excellence"
      description={portfolioData.about}
    />
  </section>
);
