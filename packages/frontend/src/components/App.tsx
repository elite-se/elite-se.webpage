import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router';
import { Router } from 'react-router-dom';
import history from '../util/history';
import { FeatureFlagsProvider } from 'elite-feature-flags';
import { Configuration } from 'elite-types';
import { getConfiguration } from 'elite-configuration';
import { getAllRegisteredAppRoutes } from '../util/routing';

// Files must be required (early!) for decorator to work
require('../components/pages/HomePage');
require('../components/pages/LinkPage');

const configuration: Configuration = getConfiguration();

export const AppComponent = () => (
  <FeatureFlagsProvider value={configuration.featureMap}>
    <Router history={history}>
      <Switch>
        {getAllRegisteredAppRoutes().map((routeProps, index) => (
          <Route key={index} {...routeProps} />
        ))}
        {/* Error 404 Fallback */}
        <Redirect to={'/home'} />
      </Switch>
    </Router>
  </FeatureFlagsProvider>
);

export const App = hot(module)(AppComponent);
