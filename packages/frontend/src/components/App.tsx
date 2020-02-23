import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import { APP_ROUTES, ERROR_404_PAGE } from '../util/approutes';
import history from '../util/history';

export const AppComponent = () => (
  <Router history={history}>
    <Switch>
      {APP_ROUTES.map((routeProps, index) => <Route key={index} {...routeProps} />)}
      <Route {...ERROR_404_PAGE} />
    </Switch>
  </Router>
);

export const App = hot(module)(AppComponent);