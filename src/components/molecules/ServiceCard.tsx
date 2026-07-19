import { Card } from '@/components/atoms/Card';

interface ServiceCardProps {
  title: string;
  description: string;
}

export const ServiceCard = ({ title, description }: ServiceCardProps) => (
  <Card className="h-full">
    <h3 className="font-display text-xl text-slate-950 dark:text-white">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
  </Card>
);
