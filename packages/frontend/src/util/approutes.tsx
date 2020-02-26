import * as React from 'react';
import { RouteProps, Redirect } from 'react-router';
import { HomePage } from '../components/pages/HomePage';
import { LinkPage } from '../components/pages/LinkPage';
import { BelbinMatcherPage } from 'elite-belbin-matcher';

// If necessary, add support for: H.LocationDescriptor | ((location: H.Location) => H.LocationDescriptor);
type LinkType = string;

export interface AppRouteProps extends RouteProps {
  // Use this if the link target differs from the path specification,
  // i.e., if the path url contains paramter specifications etc
  readonly link?: LinkType;

  // link text (Human readable!)
  readonly linkDisplayName?: string;

  // AppRoutes must have a path - deoptionalize this property
  readonly path: string;
}

/**
 * Retrieves the url which other pages can use
 * to link to a certain route
 * @param route the route to link to
 */
export function getLinkForPage(route: AppRouteProps): LinkType {
  return route.link || route.path;
}

/**
 * Retrieves the humand readable link title/displayed name
 * for a given route
 *
 * @param route
 */
export function getLinkDisplayNameForPage(route: AppRouteProps): string {
  return route.linkDisplayName || getLinkForPage(route);
}

/**
 * Specify all pages in this file by defining
 * a pages route props and adding it to the
 * available APP_ROUTES array
 */

// Landing/Home page
export const HOME_PAGE: AppRouteProps = {
  path: '/home',
  linkDisplayName: 'Home',
  render: props => <HomePage {...props} />,
};

// Page with searchable, useful links for elite-se-degree program
export const LINK_PAGE: AppRouteProps = {
  path: '/links',
  linkDisplayName: 'Useful Links',
  render: props => <LinkPage {...props} />,
};

// Belbin matching tool
export const BELBIN_PAGE: AppRouteProps = {
  path: '/belbin',
  linkDisplayName: 'Belbin Matching Tool',
  render: props => <BelbinMatcherPage {...props} />,
};

// Simply redirect to the main page on 404
export const ERROR_404_PAGE: AppRouteProps = {
  path: '/',
  render: () => <Redirect to={getLinkForPage(HOME_PAGE)} />,
};

export const APP_ROUTES: AppRouteProps[] = [HOME_PAGE, LINK_PAGE, BELBIN_PAGE];
