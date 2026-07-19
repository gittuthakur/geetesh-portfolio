import { PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from '@/features/theme/ThemeProvider';
import { ToastProvider } from '@/features/toast/ToastProvider';

export const AppProviders = ({ children }: PropsWithChildren) => (
  <HelmetProvider>
    <ThemeProvider>
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  </HelmetProvider>
);
