import * as React from 'react';
import { HomePage } from '../components/pages/HomePage';
import { LinkPage } from '../components/pages/LinkPage';
import { RouteProps } from 'react-router';

// If necessary, add support for: H.LocationDescriptor | ((location: H.Location) => H.LocationDescriptor);
type LinkType = string;

/**
 * Each Approute can have a specific link (i.e., path with filled parameter placeholders),
 * a display Name, i.e., text of the link and a nonoptional (!) path
 *
 * TODO: move to types package to be able to move app routes to their own
 * individual packages
 */
export interface AppRouteProps extends RouteProps {
  // Use this if the link target differs from the path specification,
  // i.e., if the path url contains paramter specifications etc
  readonly link?: LinkType;

  // link text (Human readable!)
  readonly displayName?: string;

  // AppRoutes must have a path - deoptionalize this property
  readonly path: AppPath;
}

/**
 * All available paths in this app
 */
export enum AppPath {
  HOME = '/home',
  LINK = '/link',
  ERROR = '/',
}

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
export function getLinkForRoute(route: AppRouteProps): LinkType {
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
export function getDisplayNameForRoute(route: AppRouteProps): string {
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
