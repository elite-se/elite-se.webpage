import * as React from 'react';
import { ListItem, ListItemIcon, ListItemText, Link } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';

export interface LinkListItemProps {
  readonly href: string;
  readonly title: string;
}

export const LinkListItem = (props: LinkListItemProps) => (
  <ListItem button>
    <ListItemIcon>
      <LinkIcon />
    </ListItemIcon>
    <ListItemText primary={
      <Link href={props.href} target={"_blank"}>
        {props.title}
      </Link>} />
  </ListItem>
);