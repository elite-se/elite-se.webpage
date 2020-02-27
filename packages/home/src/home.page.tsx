import { FeatureFlag } from 'elite-components';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { AppPath, AppRoute } from 'elite-types';

export interface HomePageProps extends RouteComponentProps {}

/**
 * Route for the Home page of this app
 */
export const HOME_ROUTE: AppRoute = {
  path: AppPath.HOME,
  displayName: 'Home',
  render: props => <HomePage {...props} />,
};

export const HomePage = (props: HomePageProps) => (
  <>
    <h1>Main Page</h1>
    <FeatureFlag featureName="under-construction-message">
      Elite Sexyz is currently under construction. See discord main channel for more information
    </FeatureFlag>
  </>
);
