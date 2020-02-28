import { HOME_ROUTE } from 'elite-home';
import { LINK_ROUTE } from 'elite-link';
import { AppPath, AppRoute, LinkType, getLinkForRoute, getDisplayNameForRoute } from 'elite-types';

export const APP_ROUTES: AppRoute[] = [HOME_ROUTE, LINK_ROUTE];

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
 * a given path
 *
 * @param path
 */
export function getDisplayNameForPath(path: AppPath): string {
  const route = APP_ROUTES.find(route => route.path == path);
  return route ? getDisplayNameForRoute(route) : 'Error';
}
