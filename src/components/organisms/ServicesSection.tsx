import { SectionHeading } from '@/components/atoms/SectionHeading';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { portfolioData } from '@/data/portfolioData';

export const ServicesSection = () => (
  <section id="services" className="section-spacing">
    <SectionHeading
      eyebrow="Services"
      title="How I can help your team"
      description="Consulting and execution support for teams scaling premium frontend products."
    />

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {portfolioData.services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  </section>
);
