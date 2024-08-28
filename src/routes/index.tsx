//src/routes/index.tsx
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from '../layout';
import ErrorPage from '../pages/helpers_pages/error';
import NotFound from '../pages/helpers_pages/not_found';
import { Page1_L, Page2_L } from './lazy_load';

const router: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Page1_L />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'page-2',
        element: <Page2_L />,
        errorElement: <ErrorPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

const routes = createBrowserRouter(router);

export default routes;
