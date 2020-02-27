import { getConfiguration } from 'elite-configuration';
import { AppPath, Configuration } from 'elite-types';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import history from './util/history';
import { APP_ROUTES, getDisplayNameForRoute } from './util/routes';
import { ErrorBoundaryComponent, FeatureFlagsProvider } from 'elite-components';
import { Divider } from '@material-ui/core';
import { LinkDirectory } from './util/linkDirectory';
import { NavigationBar } from 'components/general/NavigationBar';

// Global bootstrap: load configuration
const configuration: Configuration = getConfiguration();

export const AppComponent = () => (
  <FeatureFlagsProvider value={configuration.featureMap}>
    <Router history={history}>
      <ErrorBoundaryComponent>
        <Switch>
          {APP_ROUTES.map((route, index) => (
            <>
              <NavigationBar title={getDisplayNameForRoute(route)} />
              <Route key={index} {...route} />
            </>
          ))}
          {/* Error 404 Fallback */}
          <Route path={AppPath.ERROR} render={() => <Redirect to={AppPath.HOME} />} />
        </Switch>
        <Divider />
        <LinkDirectory />
      </ErrorBoundaryComponent>
    </Router>
  </FeatureFlagsProvider>
);

export const App = hot(module)(AppComponent);
