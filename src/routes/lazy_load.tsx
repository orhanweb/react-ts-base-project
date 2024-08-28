//src/routes/lazy_load.tsx
import React, { lazy, Suspense } from 'react';
import Loader from '../components/loader';

// Helper function to wrap components with Suspense and lazy loading
const Loadable =
  <P extends object>(Component: React.FC<P>) =>
  (props: P) => (
    <Suspense fallback={<Loader isLoading={true} />}>
      <Component {...props} />
    </Suspense>
  );

// Using Loadable helper function to lazy load components
export const Page1_L = Loadable(lazy(() => import('../pages/page_1')));
export const Page2_L = Loadable(lazy(() => import('../pages/page_2')));
