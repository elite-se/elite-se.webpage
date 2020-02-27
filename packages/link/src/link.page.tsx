import { List } from '@material-ui/core';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { LinkListItem } from 'elite-components';
import { AppPath, AppRoute } from 'elite-types';

export interface LinkPageProps extends RouteComponentProps {}

/**
 * Route for the Link page of this app
 */
export const LINK_ROUTE: AppRoute = {
  path: AppPath.LINK,
  displayName: 'Useful Links',
  render: props => (
    <>
      <LinkPage {...props} />
    </>
  ),
};

export const LinkPage = (props: LinkPageProps) => (
  <>
    {/* <NavigationBar /> */}
    <List>
      <LinkListItem href={'https://elite-se.informatik.uni-augsburg.de'} title={'Main Webpage'} />
      <LinkListItem href={'https://github.com/elite-se/elite-se.protokolle'} title={'Exam Protocols'} />
    </List>
  </>
);
