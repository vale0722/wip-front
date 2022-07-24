import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'presentation/pages/LoginPage';
import config from 'domain/config';
import HOME_ROUTES from 'domain/helpers/routes/home-routes';

export function RenderRoutes({ routes }) {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          key={route.key}
          element={<route.element props={route} routes={route.routes} />}
        />
      ))}
    </Routes>
  );
}

export const ROUTES = [
  {
    path: config.routes.login.path,
    key: 'login',
    element: LoginPage,
  },
  HOME_ROUTES,
];
