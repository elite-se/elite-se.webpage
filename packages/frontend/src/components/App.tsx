import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import { APP_ROUTES, ERROR_404_PAGE } from '../util/approutes';
import history from '../util/history';
import { FeatureFlagsProvider } from 'elite-feature-flags';
import { Configuration } from 'elite-types';
import { getConfiguration } from 'elite-configuration';
import { ErrorBoundary } from './general/ErrorBoundary';

const configuration: Configuration = getConfiguration();

export const AppComponent = () => (
  <FeatureFlagsProvider value={configuration.featureMap}>
    <Router history={history}>
      <Switch>
        {APP_ROUTES.map((routeProps, index) => (
          <ErrorBoundary>
            <Route key={index} {...routeProps} />
          </ErrorBoundary>
        ))}
        <Route {...ERROR_404_PAGE} />
      </Switch>
    </Router>
  </FeatureFlagsProvider>
);

export const App = hot(module)(AppComponent);
