import { Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { FeatureFlag } from 'elite-components';
import { AppPath, AppRoute } from 'elite-types';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

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
    <>
      <FeatureFlag featureName="under-construction-message">
        <Typography>Elite Sexyz is currently under construction. See discord #main for more information</Typography>
      </FeatureFlag>

      <Typography>Use burger menu in the top left to navigate to different pages</Typography>
    </>
  );
};
