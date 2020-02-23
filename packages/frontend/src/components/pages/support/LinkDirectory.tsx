import * as React from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTES, getLinkDisplayNameForPage, getLinkForPage } from '../../../util/approutes';

export const LinkDirectory = () => (
  <ul>
    {APP_ROUTES.map((route, index) => (
      <li key={index}>
        <Link to={getLinkForPage(route)}>{getLinkDisplayNameForPage(route)}</Link>
      </li>
    ))}
  </ul>
);
