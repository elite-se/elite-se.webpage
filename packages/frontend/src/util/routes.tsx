import * as React from 'react';
import { HomePage } from '../components/pages/HomePage';
import { LinkPage } from '../components/pages/LinkPage';
import { AppPath, AppRoute, LinkType } from 'elite-types';

/**
 * Route for the Home page of this app
 *
 * TODO: replace with imported version (except of path: property)
 * once HomePage is moved to different package
 */
const HOME_ROUTE: AppRouteProps = {
  path: AppPath.HOME,
  displayName: 'Home',
  render: props => <HomePage {...props} />,
};

/**
 * Route for the Link page of this app
 *
 * TODO: replace `with imported version (except of path: property
 * once LinkPage is moved to different package)
 */
const LINK_ROUTE: AppRouteProps = {
  path: AppPath.LINK,
  displayName: 'Useful Links',
  render: props => <LinkPage {...props} />,
};

export const APP_ROUTES: AppRouteProps[] = [HOME_ROUTE, LINK_ROUTE];

/**
 * Retrieves the url which other pages can use to link to a certain
 * app path
 *
 * @param route
 */
export function getLinkForRoute(route: AppRoute): LinkType {
  return route.link || route.path;
}

/**
 * Retrieves the url which other pages can use to link to a certain
 * app path
 *
 * @param path
 */
export function getLinkForPath(path: AppPath): LinkType {
  const route = APP_ROUTES.find(route => route.path == path);
  if (!route) return AppPath.ERROR;

  return getLinkForRoute(route);
}

/**
 * Retrieves the human readable link title/displayed name for
 * a given route
 *
 * @param route
 */
export function getDisplayNameForRoute(route: AppRoute): string {
  return route.displayName || getLinkForRoute(route);
}

/**
 * Retrieves the human readable link title/displayed name for
 * a given path
 *
 * @param path
 */
export function getDisplayNameForPath(path: AppPath): string {
  const route = APP_ROUTES.find(route => route.path == path);
  return route ? getDisplayNameForRoute(route) : 'Error';
}
