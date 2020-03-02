import { Link, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core';
import * as React from 'react';

export interface LinkListItemProps {
  readonly href: string;
  readonly title: string;
  readonly description?: string;
  readonly avatarSrcURL?: string;
}

export const LinkListItem = (props: LinkListItemProps) => {
  const { href, title, description, avatarSrcURL } = props;

  return (
    <ListItem button={true}>
      <ListItemIcon>
        <Paper elevation={0}>
          <img src={avatarSrcURL || `https://www.google.com/s2/favicons?domain=${href}`} height={50} width={50} />
        </Paper>
      </ListItemIcon>
      <ListItemText
        primary={
          <Link href={href} target={'_blank'}>
            {title}
          </Link>
        }
        secondary={description}
      />
    </ListItem>
  );
};
