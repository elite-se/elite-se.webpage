import * as H from 'history';
import * as React from 'react';
import { RouteProps, Redirect } from 'react-router';
import { HomePage } from '../components/pages/HomePage';
import { LinkPage } from '../components/pages/LinkPage';

// If necessary, add support for: H.LocationDescriptor | ((location: H.Location) => H.LocationDescriptor);
type LinkType = string;

export interface AppRouteProps extends RouteProps {
  // Use this if the link target differs from the path specification,
  // i.e., if the path url contains paramter specifications etc
  readonly link?: LinkType;

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
 * Specify all pages in this file by defining
 * a pages route props and adding it to the
 * available APP_ROUTES array
 */

// Landing/Home page
export const HOME_PAGE: AppRouteProps = {
  path: '/home',
  render: props => <HomePage {...props} />
};

// Page with searchable, useful links for elite-se-degree program
export const LINK_PAGE: AppRouteProps = {
  path: '/links',
  render: props => <LinkPage {...props} />
};

// Simply redirect to the main page on 404
export const ERROR_404_PAGE: AppRouteProps = {
  path: '/',
  render: () => <Redirect to={getLinkForPage(HOME_PAGE)} />,
};

export const APP_ROUTES: AppRouteProps[] = [
  HOME_PAGE,
  LINK_PAGE
];