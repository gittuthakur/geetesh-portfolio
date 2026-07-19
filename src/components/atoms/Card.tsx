import { HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export const Card = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'rounded-2xl border border-white/25 bg-white/70 p-6 shadow-glass backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-slate-900/55',
      className
    )}
    {...props}
  />
);
