import { RouterProvider } from 'react-router-dom';

import { appRouter } from '@/app/router';
import { AppProviders } from '@/app/providers/AppProviders';

export const App = () => (
  <AppProviders>
    <RouterProvider router={appRouter} />
  </AppProviders>
);
