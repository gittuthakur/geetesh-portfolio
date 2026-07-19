import { lazy } from 'react';
import { Helmet } from 'react-helmet-async';

import { PortfolioTemplate } from '@/components/templates/PortfolioTemplate';

const HeroSection = lazy(() => import('@/components/organisms/HeroSection').then((module) => ({ default: module.HeroSection })));
const AboutSection = lazy(() => import('@/components/organisms/AboutSection').then((module) => ({ default: module.AboutSection })));
const SkillsSection = lazy(() => import('@/components/organisms/SkillsSection').then((module) => ({ default: module.SkillsSection })));
const ExperienceSection = lazy(() =>
  import('@/components/organisms/ExperienceSection').then((module) => ({ default: module.ExperienceSection }))
);
const ProjectsSection = lazy(() => import('@/components/organisms/ProjectsSection').then((module) => ({ default: module.ProjectsSection })));
const ServicesSection = lazy(() => import('@/components/organisms/ServicesSection').then((module) => ({ default: module.ServicesSection })));
const TestimonialsSection = lazy(() =>
  import('@/components/organisms/TestimonialsSection').then((module) => ({ default: module.TestimonialsSection }))
);
const ResumeSection = lazy(() => import('@/components/organisms/ResumeSection').then((module) => ({ default: module.ResumeSection })));
const ContactSection = lazy(() => import('@/components/organisms/ContactSection').then((module) => ({ default: module.ContactSection })));

export const HomePage = () => (
  <>
    <Helmet>
      <title>Geetesh Ram | Senior UI Developer Portfolio</title>
      <meta
        name="description"
        content="Premium personal portfolio of a Senior UI Developer with 14+ years of experience in design systems, UI architecture, and frontend engineering."
      />
    </Helmet>

    <PortfolioTemplate>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ResumeSection />
      <ContactSection />
    </PortfolioTemplate>
  </>
);
