// src/routes/routes.js
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
const IndexPage = lazy(() => import('../pages/index'));
const NotFoundPage = lazy(() => import('../pages/not-found'));
const routes = [
  {
    path: '/',
    element: <Navigate to="/index" />,
  },
  {
    path: '/index',
    element: (
      <IndexPage></IndexPage>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
