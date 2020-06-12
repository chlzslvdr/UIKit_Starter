import React, { Suspense } from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  RouteProps,
  RedirectProps,
  Redirect,
} from 'react-router-dom';
import publicRoutes from './routes/public';
import publicRedirects from './redirects/public';
import Loading from '../components/Loading';
import Layout from '../components/Layout';

const AppRoot = () => {
  return (
    <BrowserRouter>
      {publicRedirects.map((redirect: RedirectProps, index: number) => (
        <Redirect
          from={redirect.from}
          to={redirect.to}
          exact={redirect.exact}
          key={String(index)}
        />
      ))}
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>
            {publicRoutes.map((route: RouteProps, index: number) => (
              <Route
                path={route.path}
                component={route.component}
                key={String(index)}
              />
            ))}
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoot;
