import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { getLinkForPage, LINK_PAGE } from '../../util/approutes';

export interface HomePageProps extends RouteComponentProps { }

export const HomePage = (props: HomePageProps) => (
  <div>
    This page is under construction
    <br />
    <ul>
      <li>
        <Link to={getLinkForPage(LINK_PAGE)}>Collection of Useful Links</Link>
      </li>
    </ul>
  </div>
);