import { Divider, List } from '@material-ui/core';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Routed } from 'elite-routing';
import { AppPaths } from '../../util/routes';
import { LinkListItem } from '../general/LinkListItem';
import { LinkDirectory } from './support/LinkDirectory';

export interface LinkPageProps extends RouteComponentProps {}

@Routed({ path: AppPaths.LINK, displayName: 'Useful Links' })
export class LinkPage extends React.PureComponent<LinkPageProps> {
  render() {
    return (
      <>
        <h1>Useful Links List</h1>
        <List>
          <LinkListItem href={'https://elite-se.informatik.uni-augsburg.de'} title={'Main Webpage'} />
          <LinkListItem href={'https://github.com/elite-se/elite-se.protokolle'} title={'Exam Protocols'} />
        </List>

        <Divider />

        <LinkDirectory />
      </>
    );
  }
}
