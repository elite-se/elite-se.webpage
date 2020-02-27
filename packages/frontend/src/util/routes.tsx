import * as React from 'react';
import { HomePage } from '../components/pages/HomePage';
import { LinkPage } from '../components/pages/LinkPage';
import { registerAppRoute } from 'elite-routing';

export enum AppPaths {
  HOME = '/home',
  LINK = '/link',
}

export function registerRoutes() {
  registerAppRoute({
    path: AppPaths.HOME,
    displayName: 'Home',
    render: props => <HomePage {...props} />,
  });
  registerAppRoute({
    path: AppPaths.LINK,
    displayName: 'Useful Links',
    render: props => <LinkPage {...props} />,
  });
}
