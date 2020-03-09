import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { LinkDirectory } from './support/LinkDirectory';
import { Divider } from '@material-ui/core';

export interface HomePageProps extends RouteComponentProps {}

export const HomePage = (props: HomePageProps) => (
  <>
    <h1>Main Page</h1>
    Elite Sexyz is sexy.
    <Divider />
    <LinkDirectory />
  </>
);
