import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from 'presentation/pages/LoginPage';
import config from 'domain/config';
import HOME_ROUTES from 'domain/helpers/routes/home-routes';
import { getUser } from 'domain/helpers/storage';

export function RenderRoutes({ routes, setIsLoading, isLoading }) {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          key={route.key}
          element={
            route.isAuth ? (
              getUser() ? (
                <route.element
                  props={route}
                  routes={route.routes}
                  setIsLoading={setIsLoading}
                  isLoading={isLoading}
                  key={route.key}
                />
              ) : (
                <Navigate
                  to={{
                    pathname: config.routes.login.path,
                  }}
                />
              )
            ) : !getUser() ? (
              <route.element
                props={route}
                routes={route.routes}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                key={route.key}
              />
            ) : (
              <Navigate
                to={{
                  pathname: '/',
                }}
              />
            )
          }
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
