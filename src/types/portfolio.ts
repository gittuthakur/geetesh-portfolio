export type ThemeMode = 'light' | 'dark';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface ProjectItem {
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  years: string;
  location: string;
  phone: string;
  heroTagline: string;
  heroSummary: string;
  about: string;
  navItems: NavItem[];
  socials: SocialLink[];
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  services: ServiceItem[];
  testimonials: TestimonialItem[];
  resumeUrl: string;
  linkedinUrl: string;
  email: string;
}
