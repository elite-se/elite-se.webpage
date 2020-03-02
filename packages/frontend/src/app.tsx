import { ErrorBoundaryComponent, FeatureFlagsProvider, NavigationBar } from 'elite-components';
import { getBaseConfiguration } from 'elite-configuration';
import { AppPath, getDisplayNameForRoute, getLinkForRoute, FeatureMap, FeatureSetterFunction } from 'elite-types';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import history from './util/history';
import { APP_ROUTES } from './util/routes';

const AppComponent = () => {
  const baseConfiguration = getBaseConfiguration();
  const [featureMap, setFeatureMap] = React.useState(baseConfiguration.featureMap);
  const featureFlagsValue: { featureMap: FeatureMap; setFeatureEnabled: FeatureSetterFunction } = {
    featureMap,
    setFeatureEnabled: (feature: string, enabled: boolean) => setFeatureMap({ ...featureMap, [feature]: enabled }),
  };

  return (
    <FeatureFlagsProvider value={featureFlagsValue}>
      <Router history={history}>
        <ErrorBoundaryComponent>
          <Switch>
            {APP_ROUTES.map((route, index) => (
              <Route
                key={index}
                {...route}
                render={props => (
                  <>
                    <NavigationBar
                      routes={APP_ROUTES}
                      title={getDisplayNameForRoute(route)}
                      onNavigateTo={r => history.push(getLinkForRoute(r))}
                    />
                    {route.render(props)}
                  </>
                )}
              />
            ))}
            {/* Error 404 Fallback */}
            <Route path={AppPath.ERROR} render={() => <Redirect to={AppPath.HOME} />} />
          </Switch>
        </ErrorBoundaryComponent>
      </Router>
    </FeatureFlagsProvider>
  );
};

export const App = hot(module)(AppComponent);
