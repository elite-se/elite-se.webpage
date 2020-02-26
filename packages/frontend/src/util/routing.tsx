import * as React from 'react';
import { RouteProps } from 'react-router';

// TODO: move to separate package

/**
 * The Routed decorator automatically creates a route for
 * the annotated top level page component
 *
 * @param props route properties
 */
export function Routed(props: AppRouteProps) {
  console.log('producing route decorator:', props);
  return (constructor: any) => {
    APP_ROUTES.push({
      render: p => React.createElement(constructor, p),
      ...props,
    });
    console.log('added route for', constructor.name);
    return constructor;
  };
}

// If necessary, add support for: H.LocationDescriptor | ((location: H.Location) => H.LocationDescriptor);
type LinkType = string;

// TODO: Add documentation
export interface AppRouteProps extends RouteProps {
  // Use this if the link target differs from the path specification,
  // i.e., if the path url contains paramter specifications etc
  readonly link?: LinkType;

  // link text (Human readable!)
  readonly displayName?: string;

  // AppRoutes must have a path - deoptionalize this property
  readonly path: string;
}

// TODO: replace with proper container/service class
/**
 * Retrieves the url which other pages can use
 * to link to a certain route
 * @param route the route to link to
 */
export function getLinkForPage(route: AppRouteProps): LinkType {
  return route.link || route.path;
}

// TODO: replace with proper container/service class
/**
 * Retrieves the humand readable link title/displayed name
 * for a given route
 *
 * @param route
 */
export function getLinkDisplayNameForPage(route: AppRouteProps): string {
  return route.displayName || getLinkForPage(route);
}

// TODO: replace with proper container/service class
export const APP_ROUTES: AppRouteProps[] = [];
