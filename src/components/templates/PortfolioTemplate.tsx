import { ReactNode, Suspense } from 'react';

import { BackToTopButton } from '@/components/atoms/BackToTopButton';
import { ScrollProgressBar } from '@/components/atoms/ScrollProgressBar';
import { Footer } from '@/components/organisms/Footer';
import { Navbar } from '@/components/organisms/Navbar';

interface PortfolioTemplateProps {
  children: ReactNode;
}

export const PortfolioTemplate = ({ children }: PortfolioTemplateProps) => (
  <div className="min-h-screen bg-canvas-50 text-slate-900 transition-colors dark:bg-canvas-900 dark:text-slate-100">
    <ScrollProgressBar />
    <Navbar />
    <main className="mx-auto w-[min(1100px,92vw)] pb-16">
      <Suspense fallback={<p className="py-20 text-sm text-slate-500">Loading section...</p>}>{children}</Suspense>
    </main>
    <Footer />
    <BackToTopButton />
  </div>
);
