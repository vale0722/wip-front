import React from 'react';
import DashboardPage from 'presentation/pages/DashboardPage';
import Layout from 'presentation/layouts/Layout';
import { RenderRoutes } from 'domain/helpers/routes';
import config from 'domain/config';
import GradesPage from 'presentation/pages/GradesPage';
import NoFoundPage from 'presentation/pages/NoFoundPage';

function HomeRoutes({ routes }) {
  return (
    <Layout>
      <RenderRoutes routes={routes} />
    </Layout>
  );
}

export default {
  path: '*',
  key: 'home',
  element: HomeRoutes,
  routes: [
    {
      path: config.routes.auth.dashboard.path,
      key: 'DASHBOARD',
      exact: true,
      element: DashboardPage,
    },
    {
      path: config.routes.auth.grades.path,
      exact: true,
      key: 'GRADES',
      element: GradesPage,
    },
    {
      path: '*',
      exact: true,
      key: 'NOTFOUND',
      element: NoFoundPage,
    },
  ],
};
