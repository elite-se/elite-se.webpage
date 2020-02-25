import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { LinkDirectory } from './support/LinkDirectory';
import { Divider } from '@material-ui/core';
import { FeatureFlag } from 'elite-feature-flags';

export interface HomePageProps extends RouteComponentProps {}

export const HomePage = (props: HomePageProps) => (
  <>
    <h1>Main Page</h1>
    <FeatureFlag featureName="under-construction-message">
      Elite Sexyz is currently under construction. See discord main channel for more information
    </FeatureFlag>
    <Divider />
    <LinkDirectory />
  </>
);
