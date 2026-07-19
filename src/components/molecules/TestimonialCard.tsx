import { Card } from '@/components/atoms/Card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export const TestimonialCard = ({ quote, name, role }: TestimonialCardProps) => (
  <Card className="h-full">
    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">“{quote}”</p>
    <div className="mt-5">
      <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{role}</p>
    </div>
  </Card>
);
