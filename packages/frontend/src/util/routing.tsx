import * as React from 'react';
import { RouteProps } from 'react-router';

// If necessary, add support for: H.LocationDescriptor | ((location: H.Location) => H.LocationDescriptor);
type LinkType = string;

/**
 * Each Approute can have a specific link (i.e., path with filled parameter placeholders),
 * a display Name, i.e., text of the link and a nonoptional (!) path
 */
export interface AppRouteProps extends RouteProps {
  // Use this if the link target differs from the path specification,
  // i.e., if the path url contains paramter specifications etc
  readonly link?: LinkType;

  // link text (Human readable!)
  readonly displayName?: string;

  // AppRoutes must have a path - deoptionalize this property
  readonly path: string;
}

/**
 * The Routed decorator automatically creates a route for
 * the annotated top level page component
 *
 * @param props route properties
 */
export function Routed<T extends React.Component<P> & { render: () => any }, P = any>(
  props: AppRouteProps,
): (c: new (props: any) => T) => new (props: any) => T {
  return constructor => (
    registerAppRoute({
      render: p => React.createElement(constructor, p),
      ...props,
    }),
    constructor
  );
}

/**
 * Container for all registered app routes
 */
const appRoutes: { [path: string]: AppRouteProps } = {};

/**
 * Function to retrieve all currently registered app routes
 */
export function getAllRegisteredAppRoutes() {
  return Object.values(appRoutes);
}

/**
 * Function for registering a new App route
 * @param props AppRouteProps. Note that a render() function must be provided
 */
export function registerAppRoute(props: AppRouteProps & Required<Pick<AppRouteProps, 'render'>>) {
  if (appRoutes[props.path]) {
    throw new Error(`ERROR: detected illegal duplicate app route ${props.path}`);
  }

  appRoutes[props.path] = props;
  console.log('added route ', props.path);
}

// TODO: replace with proper container/service class
/**
 * Retrieves the url which other pages can use
 * to link to a certain route
 * @param route the route to link to
 */
export function getLinkForRoute(route: AppRouteProps): LinkType {
  return route.link || route.path;
}

// TODO: replace with proper container/service class
/**
 * Retrieves the humand readable link title/displayed name
 * for a given route
 *
 * @param route
 */
export function getDisplayNameForRoute(route: AppRouteProps): string {
  return route.displayName || getLinkForRoute(route);
}
