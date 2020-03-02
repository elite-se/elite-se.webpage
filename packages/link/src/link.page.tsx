import { List } from '@material-ui/core';
import { LinkListItem, LinkListItemProps } from 'elite-components';
import { AppPath, AppRoute } from 'elite-types';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import LinkIcon from '@material-ui/icons/Link';

export interface LinkPageProps extends RouteComponentProps {}

/**
 * Route for the Link page of this app
 */
export const LINK_ROUTE: AppRoute = {
  path: AppPath.LINK,
  displayName: 'Useful Links',
  icon: <LinkIcon />,
  render: props => <LinkPage {...props} />,
};

// TODO: this is temporary as Henrik will provide a proper linkpage implementation
// TODO: Idea for @Henrik: categorize links visually, i.e., like tum.sexy
const links: LinkListItemProps[] = [
  {
    href: 'https://elite-se.informatik.uni-augsburg.de',
    title: 'Study Programm Homepage',
  },
  {
    href: 'https://se-study-planner.herokuapp.com',
    title: 'SE Study Planner',
  },
  {
    href: 'https://github.com/elite-se/elite-se.protokolle',
    title: 'Exam Protocols',
  },
  {
    href: 'https://www.elitenetzwerk.bayern.de/elitenetzwerk-home/elitenetzwerk-home/',
    title: 'Elitenetzwerk Bayern Homepage',
  },
  {
    href: 'https://campus.tum.de',
    title: 'TUM Offline',
  },
  {
    href: 'https://tools.db.in.tum.de',
    title: 'TUM DB Systems Tools',
  },
  {
    href: 'https://digicampus.uni-augsburg.de/dispatch.php/my_courses',
    title: 'UNA Digicampus',
  },
  {
    href: 'https://vibs.uni-augsburg.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces?chco=y',
    title: 'UNA VIBS Portal',
  },
  {
    href: 'https://webmail.rz.uni-augsburg.de/?_task=mail&_mbox=INBOX',
    title: 'UNA Webmail',
  },
  {
    href: 'https://studiswebstud.zv.uni-augsburg.de/',
    title: 'UNA STUDIS Portal',
  },
  {
    href: 'https://www.uni-muenchen.de/lmu-intern/index.html',
    title: 'LMU Webapps Overview',
  },
];
//.sort((a, b) => (a.title < b.title ? -1 : b.title < a.title ? 1 : 0));

export const LinkPage = (props: LinkPageProps) => (
  <List>
    {links.map(link => (
      <LinkListItem {...link} />
    ))}
  </List>
);
