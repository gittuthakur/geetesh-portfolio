import { RouterProvider } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import { appRouter } from '@/app/router';
import { AppProviders } from '@/app/providers/AppProviders';

export const App = () => (
  <AppProviders>
    <RouterProvider router={appRouter} />
    <Analytics />
  </AppProviders>
);
