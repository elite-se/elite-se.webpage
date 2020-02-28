import { FeatureFlag } from 'elite-components';
import { AppPath, AppRoute } from 'elite-types';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import HomeIcon from '@material-ui/icons/Home';

export interface HomePageProps extends RouteComponentProps {}

/**
 * Route for the Home page of this app
 */
export const HOME_ROUTE: AppRoute = {
  path: AppPath.HOME,
  displayName: 'Home',
  icon: <HomeIcon />,
  render: props => <HomePage {...props} />,
};

export const HomePage = (props: HomePageProps) => {
  return (
    <FeatureFlag featureName="under-construction-message">
      Elite Sexyz is currently under construction. See discord main channel for more information
    </FeatureFlag>
  );
};
