import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/atoms/Button';
import { portfolioData } from '@/data/portfolioData';
import { useToast } from '@/features/toast/ToastProvider';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email.'),
  company: z.string().min(2, 'Please enter your company name.'),
  subject: z.string().min(4, 'Please enter a subject.'),
  message: z.string().min(20, 'Message must be at least 20 characters long.')
});

type ContactFormFields = z.infer<typeof schema>;

export const ContactForm = () => {
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (values: ContactFormFields) => {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 300);
    });

    const subject = encodeURIComponent(`${values.subject} | ${values.company}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company}\n\nMessage:\n${values.message}`
    );
    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;

    showToast('Your email app has opened with a pre-filled contact draft.', 'success');
    reset();
  };

  return (
    <form className="space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="h-11 w-full rounded-xl border border-slate-300 bg-white/90 px-4 text-sm text-slate-900 outline-none ring-brand-400/30 transition focus:ring dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
          {...register('name')}
        />
        {errors.name ? <p className="mt-1 text-xs text-rose-500">{errors.name.message}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="h-11 w-full rounded-xl border border-slate-300 bg-white/90 px-4 text-sm text-slate-900 outline-none ring-brand-400/30 transition focus:ring dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
          {...register('email')}
        />
        {errors.email ? <p className="mt-1 text-xs text-rose-500">{errors.email.message}</p> : null}
      </div>

      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Company
        </label>
        <input
          id="company"
          type="text"
          className="h-11 w-full rounded-xl border border-slate-300 bg-white/90 px-4 text-sm text-slate-900 outline-none ring-brand-400/30 transition focus:ring dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
          {...register('company')}
        />
        {errors.company ? <p className="mt-1 text-xs text-rose-500">{errors.company.message}</p> : null}
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className="h-11 w-full rounded-xl border border-slate-300 bg-white/90 px-4 text-sm text-slate-900 outline-none ring-brand-400/30 transition focus:ring dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
          {...register('subject')}
        />
        {errors.subject ? <p className="mt-1 text-xs text-rose-500">{errors.subject.message}</p> : null}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none ring-brand-400/30 transition focus:ring dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
          {...register('message')}
        />
        {errors.message ? <p className="mt-1 text-xs text-rose-500">{errors.message.message}</p> : null}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Preparing...' : 'Contact Me'}
      </Button>
    </form>
  );
};
