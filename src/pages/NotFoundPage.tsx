import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <main className="grid min-h-screen place-items-center bg-canvas-50 px-6 dark:bg-canvas-900">
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">404</p>
      <h1 className="mt-3 font-display text-4xl text-slate-900 dark:text-white">Page Not Found</h1>
      <Link
        to="/"
        className="mt-5 inline-flex rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600"
      >
        Go Home
      </Link>
    </div>
  </main>
);
