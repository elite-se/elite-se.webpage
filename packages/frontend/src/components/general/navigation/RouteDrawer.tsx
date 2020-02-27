import { createStyles, List, ListItem, ListItemText, makeStyles, SwipeableDrawer, Theme } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTES, getLinkForRoute, getDisplayNameForRoute } from 'util/routes';

export interface RouteDrawerProps {
  readonly isOpen: boolean;
  readonly onOpen: () => void;
  readonly onClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }),
);

export const RouteDrawer = (props: RouteDrawerProps) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer anchor={'bottom'} open={props.isOpen} onClose={props.onClose} onOpen={props.onOpen}>
      <div className={classes.fullList} role={'presentation'} onClick={props.onClose} onKeyDown={props.onClose}>
        <List>
          {APP_ROUTES.map(route => (
            <ListItem button={true} key={getLinkForRoute(route)}>
              <Link to={getLinkForRoute(route)}>
                <ListItemText primary={getDisplayNameForRoute(route)} />
              </Link>
            </ListItem>
          ))}
        </List>
        {/** TODO: bellow is testing code */}
        {/* <Divider />
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button={true} key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </div>
    </SwipeableDrawer>
  );
};
