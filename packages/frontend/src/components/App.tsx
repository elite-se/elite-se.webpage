import { getConfiguration } from 'elite-configuration';
import { FeatureFlagsProvider } from 'elite-feature-flags';
import { Configuration } from 'elite-types';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import history from '../util/history';
import { AppPath, APP_ROUTES } from '../util/routes';

// Global bootstrap: install subsystems and load configuration
const configuration: Configuration = getConfiguration();

export const AppComponent = () => (
  <FeatureFlagsProvider value={configuration.featureMap}>
    <Router history={history}>
      <Switch>
        {APP_ROUTES.map((routeProps, index) => (
          <Route key={index} {...routeProps} />
        ))}
        {/* Error 404 Fallback */}
        <Redirect to={AppPath.HOME} />
      </Switch>
    </Router>
  </FeatureFlagsProvider>
);

export const App = hot(module)(AppComponent);
