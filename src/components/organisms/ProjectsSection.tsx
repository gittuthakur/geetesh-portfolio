import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Card } from '@/components/atoms/Card';
import { Modal } from '@/components/atoms/Modal';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { portfolioData } from '@/data/portfolioData';
import { fadeUp, staggerContainer } from '@/utils/motion';

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<(typeof portfolioData.projects)[number] | null>(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateMatch = () => setIsMobile(mediaQuery.matches);

    updateMatch();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateMatch);
      return () => mediaQuery.removeEventListener('change', updateMatch);
    }

    mediaQuery.addListener(updateMatch);
    return () => mediaQuery.removeListener(updateMatch);
  }, []);

  return (
    <motion.section
      id="projects"
      className="section-spacing"
      variants={fadeUp}
      initial={isMobile ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionHeading
        eyebrow="Projects"
        title="Featured product experiences"
        description="Case-study-style projects blending visual polish, UX decisions, and scalable code."
      />

      <motion.div
        className="grid gap-5 lg:grid-cols-3"
        variants={staggerContainer(0.08, 0.05)}
        initial={isMobile ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {portfolioData.projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            onPreview={() => {
              setActiveProject(project);
            }}
          />
        ))}
      </motion.div>

      <Modal
        open={Boolean(activeProject)}
        title={activeProject?.title ?? 'Project Preview'}
        onClose={() => setActiveProject(null)}
      >
        {activeProject ? (
          <Card className="border-none bg-transparent p-0 shadow-none dark:bg-transparent">
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{activeProject.summary}</p>
            <p className="mt-3 text-sm font-medium text-brand-600 dark:text-brand-400">{activeProject.impact}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {activeProject.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-900/5 px-3 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ) : null}
      </Modal>
    </motion.section>
  );
};
