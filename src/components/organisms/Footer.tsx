import { FiArrowUpRight } from 'react-icons/fi';

import { portfolioData } from '@/data/portfolioData';

export const Footer = () => (
  <footer className="border-t border-slate-200/80 py-8 dark:border-slate-800/80">
    <div className="mx-auto flex w-[min(1100px,92vw)] flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} {portfolioData.name}. Crafted with care.
      </p>
      <div className="flex items-center gap-4">
        {portfolioData.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.ariaLabel}
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            {social.label} <FiArrowUpRight />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
