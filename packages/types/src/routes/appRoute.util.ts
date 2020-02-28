import { AppRoute } from './appRoute.type';
import { LinkType } from './link.type';

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
 * Retrieves the human readable link title/displayed name for
 * a given route
 *
 * @param route
 */
export function getDisplayNameForRoute(route: AppRoute): string {
  return route.displayName || getLinkForRoute(route);
}
