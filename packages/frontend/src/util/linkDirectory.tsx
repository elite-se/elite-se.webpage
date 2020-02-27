import * as React from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTES, getDisplayNameForRoute, getLinkForRoute } from './routes';

export const LinkDirectory = () => (
  <ul>
    {APP_ROUTES.map((route, index) => (
      <li key={index}>
        <Link to={getLinkForRoute(route)}>{getDisplayNameForRoute(route)}</Link>
      </li>
    ))}
  </ul>
);
