import * as React from 'react';
import { Link } from 'react-router-dom';
import { getLinkForRoute, getDisplayNameForRoute, getAllRegisteredAppRoutes } from '../../../util/routing';

export const LinkDirectory = () => (
  <ul>
    {getAllRegisteredAppRoutes().map((route, index) => (
      <li key={index}>
        <Link to={getLinkForRoute(route)}>{getDisplayNameForRoute(route)}</Link>
      </li>
    ))}
  </ul>
);
