import React from 'react';
import DashboardPage from 'presentation/pages/DashboardPage';
import Layout from 'presentation/layouts/Layout';
import { RenderRoutes } from 'domain/helpers/routes';
import config from 'domain/config';
import NoFoundPage from 'presentation/pages/NoFoundPage';
import grades from 'domain/helpers/routes/grade-routes';
import teachers from 'domain/helpers/routes/teacher-routes';

function HomeRoutes({ routes, setIsLoading, isLoading }) {
  return (
    <Layout setIsLoading={setIsLoading}>
      <RenderRoutes
        routes={routes}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
    </Layout>
  );
}

export default {
  path: '*',
  key: 'home',
  isAuth: true,
  element: HomeRoutes,
  routes: [
    {
      isAuth: true,
      path: config.routes.auth.dashboard.path,
      key: 'DASHBOARD',
      element: DashboardPage,
    },
    {
      isAuth: true,
      path: '*',
      key: 'NOTFOUND',
      element: NoFoundPage,
    },
  ]
    .concat(grades)
    .concat(teachers),
};
