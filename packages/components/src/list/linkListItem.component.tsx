import { Avatar, Link, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';

export interface LinkListItemProps {
  readonly href: string;
  readonly title: string;
  readonly description?: string;
  readonly faviconURL?: string;
}

export const LinkListItem = (props: LinkListItemProps) => {
  const { href, title, description, faviconURL } = props;

  return (
    <ListItem button={true}>
      <ListItemIcon>
        <Avatar variant={'square'} src={faviconURL || `https://www.google.com/s2/favicons?domain=${href}`}>
          Icon
        </Avatar>
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
