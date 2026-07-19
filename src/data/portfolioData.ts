import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  name: 'Geeta Ram',
  role: 'Senior Front-End Developer | UI/UX Designer',
  years: '14+ years',
  location: 'Chandigarh, Mohali, Delhi NCR',
  phone: '+91 7307521100',
  heroTagline: 'React.js | JavaScript | Figma | Design Systems',
  heroSummary:
    'Results-driven Senior Front-End Developer and UI/UX Designer with 14+ years of experience designing and developing responsive web applications, enterprise portals, SaaS platforms, CMS solutions, and customer-centric digital products.',
  about:
    'Expert in React.js, JavaScript, TypeScript, HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap, Figma, and Adobe XD. Proven ability to convert business requirements and UI/UX designs into pixel-perfect, accessible, high-performance, and cross-browser compatible applications. Experienced in reusable UI components, design systems, REST API integrations, and scalable frontend architecture across Banking, Finance, Telecom, Insurance, Real Estate, E-commerce, and Technology domains. Education includes BCA (Maharaja Agrasen Himalayan Garhwal University), Senior Secondary (HPBOSE), and Diploma in Web Designing (VM Multimedia Institute). Languages: English, Hindi, Punjabi.',
  navItems: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ],
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/geeta-ram-5220512a',
      ariaLabel: 'Visit LinkedIn profile'
    },
    {
      label: 'Email',
      href: 'mailto:gittuthakur@gmail.com.com',
      ariaLabel: 'Send email to Geeta Ram'
    },
    {
      label: 'Phone',
      href: 'tel:+917307521100',
      ariaLabel: 'Call Geeta Ram'
    }
  ],
  skillGroups: [
    {
      title: 'Frontend Technologies',
      items: [
        'HTML5',
        'CSS3',
        'SASS/SCSS',
        'Bootstrap',
        'Material UI',
        'Tailwind CSS',
        'JavaScript',
        'jQuery',
        'React.js',
        'Angular',
        'WordPress'
      ]
    },
    {
      title: 'UI/UX and Design',
      items: [
        'Responsive Web Design',
        'UI/UX Design',
        'User-Centered Design',
        'Wireframing',
        'Prototyping',
        'Design Systems',
        'Figma',
        'Adobe XD',
        'Adobe Photoshop',
        'Adobe Illustrator'
      ]
    },
    {
      title: 'Development Practices and Tools',
      items: [
        'Component-Based Architecture',
        'Cross-Browser Compatibility',
        'Performance Optimization',
        'Web Accessibility (WCAG)',
        'REST API Integration',
        'Git',
        'GitHub',
        'GitLab',
        'Jira',
        'Agile Scrum'
      ]
    },
    {
      title: 'Professional Strengths',
      items: [
        'Team Collaboration',
        'Requirement Analysis',
        'Design-to-Development Handoff',
        'Code Reviews',
        'Mentoring',
        'Quality-Driven Delivery'
      ]
    }
  ],
  experience: [
    {
      role: 'Senior Front-End Developer | UX/UI Designer',
      company: 'Netsmartz',
      period: '07/2012 - Present',
      location: 'Chandigarh, Mohali',
      achievements: [
        'Architected and developed responsive enterprise applications using React.js, TypeScript, HTML5, CSS3, SCSS, Bootstrap, Tailwind CSS, Material UI, and Angular.',
        'Translated Figma and Adobe XD designs into pixel-perfect, cross-browser compatible, and WCAG-compliant interfaces.',
        'Built reusable UI components, responsive layouts, and design system libraries to improve consistency and speed.',
        'Integrated REST APIs and delivered interactive dashboards, forms, and customer-facing enterprise portals.',
        'Mentored junior developers, conducted code reviews, and maintained coding standards and UI best practices.'
      ]
    },
    {
      role: 'Front-End Developer',
      company: 'Classic Informatics',
      period: '01/2011 - 07/2012',
      location: 'Chandigarh',
      achievements: [
        'Delivered responsive websites, custom web applications, and CMS-based solutions for domestic and international clients.',
        'Converted PSD and design mockups into production-ready web pages with strong UI accuracy and responsiveness.',
        'Developed reusable frontend components and optimized performance, browser compatibility, and overall UX.'
      ]
    }
  ],
  projects: [
    {
      title: 'Telstra - Network Platforms',
      summary:
        'Designed high-fidelity UI mockups and developed responsive enterprise telecom interfaces with reusable components.',
      impact: 'Delivered accessible, cross-browser compatible solutions in collaboration with portal teams.',
      stack: ['Adobe XD', 'Photoshop', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'Angular'],
      href: 'https://www.telstra.com'
    },
    {
      title: 'InsureTech Partners - Motor Insurance Contact Center Platform',
      summary:
        'Built production-ready React interfaces from Figma using HeroUI, Tailwind CSS, and SCSS for enterprise workflows.',
      impact: 'Integrated REST APIs and communication APIs with Redux-based scalable state management.',
      stack: ['Figma', 'React.js', 'HeroUI', 'Tailwind CSS', 'SCSS', 'Redux'],
      href: 'https://example.com/insuretech'
    },
    {
      title: 'Bank of America',
      summary:
        'Contributed to responsive digital banking interfaces by converting Adobe XD designs into reusable React components.',
      impact: 'Delivered accessible and high-performance enterprise web experiences.',
      stack: ['Adobe XD', 'React.js', 'Material UI', 'HTML5', 'CSS3', 'SCSS'],
      href: 'https://www.bankofamerica.com'
    },
    {
      title: 'Skyfive Arabia - In-Flight Connectivity Platform',
      summary:
        'Designed UI/UX prototypes and developed responsive frontend interfaces with reusable, production-ready components.',
      impact: 'Improved consistency and usability across connected platform experiences.',
      stack: ['Figma', 'React.js', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap'],
      href: 'https://www.skyfive.world'
    },
    {
      title: 'Constl Telecom Communication',
      summary:
        'Translated Figma wireframes and screen designs into reusable React.js and Liferay components for B2B telecom portals.',
      impact: 'Improved performance, usability, and design consistency in enterprise portal workflows.',
      stack: ['Figma', 'React.js', 'Liferay', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap'],
      href: 'https://example.com/constl'
    },
    {
      title: 'Africa Data Centres (ADC)',
      summary:
        'Created responsive portal interfaces from Adobe XD designs and implemented reusable React.js and Liferay components.',
      impact: 'Maintained design consistency and resolved UI issues across enterprise modules.',
      stack: ['Adobe XD', 'React.js', 'Liferay', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap'],
      href: 'https://www.africadatacentres.com'
    },
    {
      title: 'CloudSmartz Website',
      summary: 'Modern website UI with polished styling and responsive implementation.',
      impact: 'Improved visual consistency and responsive behavior across pages.',
      stack: ['React.js', 'Responsive UI', 'Frontend Implementation'],
      href: 'https://cloudsmartz.com/'
    },
    {
      title: 'Balneario',
      summary: 'Responsive front-end sections and clean user-focused layouts.',
      impact: 'Enhanced usability and mobile presentation.',
      stack: ['HTML5', 'CSS3', 'JavaScript'],
      href: 'https://balneario.co.uk/'
    },
    {
      title: 'CashKaro',
      summary: 'Frontend and UI implementation for a high-traffic cashback and deals platform.',
      impact: 'Improved scalable UI delivery for high user traffic scenarios.',
      stack: ['Frontend UI', 'Responsive Design', 'Performance'],
      href: 'https://cashkaro.com/'
    },
    {
      title: "Donna's Naturals",
      summary: 'Responsive ecommerce-style pages with brand-aligned UI.',
      impact: 'Delivered polished and conversion-focused page experiences.',
      stack: ['Ecommerce UI', 'Responsive Frontend'],
      href: 'https://donnasnaturals.ca/'
    },
    {
      title: 'Cardknox',
      summary: 'Responsive frontend interfaces for a secure payment-processing platform.',
      impact: 'Enhanced trust-focused UX and responsive payment workflows.',
      stack: ['Frontend UI', 'Payments', 'Responsive Design'],
      href: '#'
    },
    {
      title: 'Capstera',
      summary:
        'Capability-mapping web interfaces for an enterprise business architecture platform.',
      impact: 'Improved discoverability and visual clarity for capability insights.',
      stack: ['Enterprise UI', 'Information Architecture'],
      href: '#'
    },
    {
      title: 'Clyde Property',
      summary: 'Responsive UI for property listings and real estate management workflows.',
      impact: 'Streamlined property discovery and browsing experience.',
      stack: ['Real Estate UI', 'Responsive Frontend'],
      href: '#'
    },
    {
      title: 'Udenom Banken',
      summary: 'Frontend UI development for a digital banking platform.',
      impact: 'Delivered consistent, secure-feeling banking interaction patterns.',
      stack: ['Banking UI', 'Frontend Engineering'],
      href: '#'
    },
    {
      title: 'The Market Mogul',
      summary: 'Frontend architecture for a financial news and media platform.',
      impact: 'Supported scalable UI delivery for content-rich financial experiences.',
      stack: ['Media UI', 'Frontend Architecture'],
      href: '#'
    },
    {
      title: 'MMC Web',
      summary: 'Corporate website frontend designed and developed from the ground up.',
      impact: 'Delivered complete responsive implementation with polished UI execution.',
      stack: ['Corporate Website', 'End-to-End Frontend'],
      href: '#'
    }
  ],
  services: [
    {
      title: 'Increased User Engagement',
      description: 'Achieved a 30% increase in user engagement through optimized UI/UX design.'
    },
    {
      title: 'Optimized Page Load',
      description:
        'Reduced page load time by 40% using performance optimization techniques and frontend best practices.'
    },
    {
      title: 'Mentorship and Design Systems',
      description:
        'Trained 10+ junior team members and developed 100+ responsive UI components for consistency and delivery speed.'
    }
  ],
  testimonials: [
    {
      quote:
        'Combines strong design sense, clean frontend coding, responsive implementation, and quality-driven delivery to create polished and maintainable interfaces.',
      name: 'Professional Value',
      role: 'Frontend and UI/UX Leadership'
    },
    {
      quote:
        'Delivered enterprise-grade solutions across Telecom, Banking, Healthcare, SaaS, Insurance, and Digital Commerce domains.',
      name: 'Domain Impact',
      role: 'Enterprise Product Delivery'
    }
  ],
  resumeUrl: '/resume/Geeta-Ram-Resume.pdf',
  linkedinUrl: 'https://www.linkedin.com/in/geeta-ram-5220512a',
  email: 'gittuthakur@gmail.com.com'
};
