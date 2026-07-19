import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FiCode, FiDownload, FiMail, FiPenTool, FiPhone } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';

import { LinkButton } from '@/components/atoms/Button';
import { portfolioData } from '@/data/portfolioData';

export const HeroSection = () => {
  const roles = useMemo(
    () =>
      portfolioData.role
        .split('|')
        .map((item) => item.trim())
        .filter(Boolean),
    []
  );

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeRole = roles[roleIndex] ?? '';
    const speed = isDeleting ? 45 : 95;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < activeRole.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          window.setTimeout(() => setIsDeleting(true), 900);
        }
      } else if (charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => window.clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const typedRole = (roles[roleIndex] ?? '').slice(0, charIndex);
  const activeRole = roles[roleIndex]?.toLowerCase() ?? '';
  const isFrontendRole = activeRole.includes('front-end') || activeRole.includes('frontend');
  const isUiUxRole =
    activeRole.includes('ui/ux') || activeRole.includes('ui | ux') || activeRole.includes('designer');

  return (
    <section
      id="home"
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden border-y border-white/20 bg-gradient-to-br from-brand-500/15 via-indigo-500/10 to-accent-500/15 py-16 backdrop-blur dark:border-white/10 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute right-[-2rem] top-10 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent dark:from-slate-900/30" />
      </div>

      <div className="mx-auto w-[min(1320px,94vw)]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-slate-900 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white dark:border-white/20 dark:bg-white/10 md:text-xs">
            <HiSparkles className="h-3.5 w-3.5 text-white" aria-hidden="true" />
            Designing SaaS, AI &amp; Enterprise Digital Products
          </p>

          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight text-slate-950 dark:text-white md:text-6xl">
            Hi, I&apos;m {portfolioData.name}
          </h1>

          <p className="mx-auto mt-3 min-h-[2rem] max-w-4xl text-sm font-semibold leading-tight text-slate-900 dark:text-slate-100 md:min-h-[2.5rem] md:text-[22px]">
            <span className="mr-2 inline-flex align-middle text-brand-500 dark:text-brand-300">
              {isFrontendRole ? (
                <FiCode className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
              ) : isUiUxRole ? (
                <FiPenTool className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
              ) : null}
            </span>
            <span className="bg-gradient-to-r from-brand-500 via-indigo-500 to-accent-500 bg-clip-text text-transparent">
              {typedRole}
            </span>
            <span className="ml-1 inline-block animate-pulse text-brand-500 dark:text-brand-300">|</span>
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-[13px] leading-5 text-slate-700 dark:text-slate-300 md:text-sm md:leading-6">
            {portfolioData.heroSummary}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href="#projects" className="min-w-[11rem]" showIcon={false}>
              View My Work
            </LinkButton>
            <LinkButton
              variant="secondary"
              href="/resume/GeetaRamResume.pdf"
              download="Geeta-Ram-Resume.pdf"
              showIcon={false}
            >
              <>
                <FiDownload className="mr-2 inline-block h-4 w-4" aria-hidden="true" />
                Download Resume
              </>
            </LinkButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {portfolioData.socials.slice(0, 5).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.ariaLabel}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/80 bg-white/75 text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-500/50 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/75 dark:text-slate-200 dark:hover:border-brand-400/50 dark:hover:text-brand-300"
              >
                {social.label.toLowerCase().includes('linkedin') ? (
                  <FaLinkedinIn className="h-4.5 w-4.5" aria-hidden="true" />
                ) : social.label.toLowerCase().includes('email') ? (
                  <FiMail className="h-4.5 w-4.5" aria-hidden="true" />
                ) : social.label.toLowerCase().includes('phone') ? (
                  <FiPhone className="h-4.5 w-4.5" aria-hidden="true" />
                ) : (
                  <HiSparkles className="h-4.5 w-4.5" aria-hidden="true" />
                )}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
