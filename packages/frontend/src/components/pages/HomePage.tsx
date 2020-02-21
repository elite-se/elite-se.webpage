import * as React from 'react';
import { List } from '@material-ui/core';
import { LinkListItem } from '../general/LinkListItem';

export const HomePage = () => (
  <List>
    <LinkListItem href={"https://elite-se.informatik.uni-augsburg.de"} title={"Main Webpage"} />
    <LinkListItem href={"https://github.com/elite-se/elite-se.protokolle"} title={"Exam Protocols"} />
  </List>
);