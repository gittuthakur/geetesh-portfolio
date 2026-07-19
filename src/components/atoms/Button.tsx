import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

import { cn } from '@/utils/cn';

type CommonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const styles = {
  base: 'inline-flex items-center justify-center rounded-xl font-medium transition duration-300 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-60',
  variant: {
    primary:
      'bg-gradient-to-r from-brand-500 via-indigo-500 to-accent-500 text-white shadow-soft hover:-translate-y-0.5 hover:brightness-110 dark:text-white',
    secondary:
      'border border-slate-300 bg-white/80 text-slate-900 hover:-translate-y-0.5 hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800',
    ghost:
      'text-slate-700 hover:bg-slate-200/60 dark:text-slate-200 dark:hover:bg-slate-800/70'
  },
  size: {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-5 text-sm',
    lg: 'h-12 px-6 text-base'
  }
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', showIcon = true, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(styles.base, styles.variant[variant], styles.size[size], className)}
      {...props}
    >
      <span>{children}</span>
      {showIcon ? <FiArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /> : null}
    </button>
  )
);

Button.displayName = 'Button';

export const LinkButton = ({
  className,
  variant = 'primary',
  size = 'md',
  showIcon = true,
  children,
  ...props
}: LinkButtonProps) => (
  <a className={cn(styles.base, styles.variant[variant], styles.size[size], className)} {...props}>
    <span>{children}</span>
    {showIcon ? <FiArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /> : null}
  </a>
);
