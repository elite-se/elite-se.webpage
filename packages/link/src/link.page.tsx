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

// TODO: this is temporary as Henrik will provide a proper linkpage implementation in the future
// for now, this has to be bare-minimum functional at least
// TODO: Idea for @Henrik: categorize links visually, i.e., like tum.sexy
const links: LinkListItemProps[] = [
  {
    href: 'https://elite-se.informatik.uni-augsburg.de',
    title: 'Study Programm Homepage',
    description: 'Official webpage of the elite software engineering degree program',
  },
  {
    href: 'https://se-study-planner.herokuapp.com',
    title: 'SE Study Planner',
    description: 'Tool for planning which lectures to attend from the offered elite-se courses',
  },
  {
    href: 'https://github.com/elite-se/elite-se.protokolle',
    title: 'Exam Protocols',
    description: "Repository containing protocols from previous se-generation's exams",
  },
  {
    href: 'https://www.elitenetzwerk.bayern.de/elitenetzwerk-home/elitenetzwerk-home/',
    title: 'Elitenetzwerk Bayern Homepage',
    description: 'Homepage of the elite network of bavaria, which is involved with this degree program',
  },
  {
    href: 'https://campus.tum.de',
    title: 'TUM Online',
    description: 'TUM webapp for all things studying@TUM. Also known as TUM Offline',
  },
  {
    href: 'https://tools.db.in.tum.de',
    title: 'TUM DB Systems Tools',
    description: 'Useful collection of tools to practice for the Database Systems exam',
  },
  {
    href: 'https://digicampus.uni-augsburg.de/dispatch.php/my_courses',
    title: 'UNA Digicampus',
    description: 'Digital lecture system of University of Augsburg',
  },
  {
    href: 'https://vibs.uni-augsburg.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces?chco=y',
    title: 'UNA VIBS Portal',
    description: 'Study management system of University of Augsburg',
  },
  {
    href: 'https://webmail.rz.uni-augsburg.de/?_task=mail&_mbox=INBOX',
    title: 'UNA Webmail',
    description: 'Webmail client of University of Augsburg',
  },
  {
    href: 'https://studiswebstud.zv.uni-augsburg.de/',
    title: 'UNA STUDIS Portal',
    description: 'Exam management system of University of Augsburg',
  },
  {
    href: 'https://www.uni-muenchen.de/lmu-intern/index.html',
    title: 'LMU Webapps Overview',
    description: 'Overview over all available LMU Webapps',
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
