interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <header className="mb-8 max-w-3xl">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
      {eyebrow}
    </p>
    <h2 className="font-display text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
    ) : null}
  </header>
);
