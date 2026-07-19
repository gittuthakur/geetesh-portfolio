import { SectionHeading } from '@/components/atoms/SectionHeading';
import { TestimonialCard } from '@/components/molecules/TestimonialCard';
import { portfolioData } from '@/data/portfolioData';

export const TestimonialsSection = () => (
  <section className="section-spacing" aria-label="Testimonials">
    <SectionHeading
      eyebrow="Testimonials"
      title="What collaborators say"
      description="A snapshot of outcomes and experiences from product and engineering stakeholders."
    />

    <div className="grid gap-4 md:grid-cols-2">
      {portfolioData.testimonials.map((item) => (
        <TestimonialCard key={item.name} {...item} />
      ))}
    </div>
  </section>
);
