import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  name: 'Geetesh Ram',
  role: 'Senior UI Developer',
  years: '14+ years',
  location: 'India',
  heroTagline: 'Designing elegant interfaces and engineering scalable frontend systems.',
  heroSummary:
    'I partner with product teams to craft premium digital experiences that balance visual excellence, usability, and measurable business outcomes.',
  about:
    'Over the last 14+ years, I have led UI architecture, design system strategy, and front-end implementation across fintech, SaaS, and e-commerce products. I focus on accessibility-first design, resilient component systems, and fast, delightful user interactions.',
  navItems: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com', ariaLabel: 'Visit GitHub profile' },
    { label: 'LinkedIn', href: 'https://linkedin.com', ariaLabel: 'Visit LinkedIn profile' },
    { label: 'Dribbble', href: 'https://dribbble.com', ariaLabel: 'Visit Dribbble profile' }
  ],
  skillGroups: [
    {
      title: 'Frontend Architecture',
      items: ['React', 'TypeScript', 'Next.js', 'Micro-frontends', 'State Management']
    },
    {
      title: 'Design Systems',
      items: ['Figma Tokens', 'Atomic Design', 'Tailwind CSS', 'Storybook', 'Accessibility']
    },
    {
      title: 'Animation & Interaction',
      items: ['Framer Motion', 'SVG Motion', 'Micro-interactions', 'Interaction Design']
    }
  ],
  experience: [
    {
      role: 'Senior UI Developer',
      company: 'Global SaaS Platform',
      period: '2020 - Present',
      location: 'Remote',
      achievements: [
        'Led a design system migration that reduced UI defects by 37%.',
        'Improved performance and brought key pages to 95+ Lighthouse scores.',
        'Mentored a 9-person frontend guild on accessibility and architecture.'
      ]
    },
    {
      role: 'Lead Frontend Engineer',
      company: 'Fintech Product Studio',
      period: '2016 - 2020',
      location: 'Bengaluru',
      achievements: [
        'Shipped enterprise dashboard suite used by 120k monthly users.',
        'Standardized reusable component patterns across 6 product teams.',
        'Introduced CI quality gates for linting, testing, and bundle budgets.'
      ]
    },
    {
      role: 'UI Developer',
      company: 'Digital Agency',
      period: '2012 - 2016',
      location: 'Hyderabad',
      achievements: [
        'Delivered responsive websites for 40+ global clients.',
        'Built interactive marketing experiences that raised engagement by 22%.',
        'Created maintainable CSS architecture adopted company-wide.'
      ]
    }
  ],
  projects: [
    {
      title: 'Aurora Analytics Suite',
      summary: 'Enterprise analytics platform with a robust token-driven UI system.',
      impact: 'Reduced feature delivery time by 28% through reusable components.',
      stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      href: 'https://example.com/project-aurora'
    },
    {
      title: 'Velocity Commerce UI',
      summary: 'High-conversion storefront optimized for mobile-first commerce journeys.',
      impact: 'Increased checkout completion by 17% after UX iteration.',
      stack: ['Vite', 'React Router', 'A/B Testing', 'Design Tokens'],
      href: 'https://example.com/project-velocity'
    },
    {
      title: 'Pulse Admin Framework',
      summary: 'Scalable admin template with role-based dashboards and smart components.',
      impact: 'Cut onboarding time for new engineers from weeks to days.',
      stack: ['React', 'Zod', 'Tailwind', 'Accessibility'],
      href: 'https://example.com/project-pulse'
    }
  ],
  services: [
    {
      title: 'UI Architecture Consulting',
      description:
        'Design scalable component systems and frontend architecture for growing products.'
    },
    {
      title: 'Design System Implementation',
      description: 'Build and operationalize token-driven design systems for consistency and speed.'
    },
    {
      title: 'UX-Driven Frontend Development',
      description: 'Translate product strategy into fast, accessible, and refined user experiences.'
    }
  ],
  testimonials: [
    {
      quote:
        'Geetesh elevated our product quality with a design system that made our team dramatically faster.',
      name: 'Priya Nair',
      role: 'Head of Product, SaaS Company'
    },
    {
      quote:
        'Rare mix of deep engineering and design craftsmanship. Every release felt premium and thoughtful.',
      name: 'Arjun Malhotra',
      role: 'Engineering Director, Fintech'
    }
  ],
  resumeUrl: '/data/cv.json',
  email: 'hello@geetesh.dev'
};
