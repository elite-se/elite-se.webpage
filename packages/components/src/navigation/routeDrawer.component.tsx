import {
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  SwipeableDrawer,
  Theme,
} from '@material-ui/core';
import { AppRoute, getDisplayNameForRoute, getLinkForRoute } from 'elite-types';
import * as React from 'react';

export interface RouteDrawerProps {
  /** Routes displayed as options in the drawer list */
  readonly routes: AppRoute[];

  /** Callback used by route drawer to navigate to a route */
  readonly onNavigateTo: (route: AppRoute) => void;

  /** Whether or not the drawer is open */
  readonly isOpen: boolean;

  /** Callback used by the drawer to signify it should open */
  readonly onOpen: () => void;

  /** Callback used by the drawer to signify it should close */
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
          {props.routes.map(route => (
            <ListItem button={true} key={getLinkForRoute(route)} onClick={() => props.onNavigateTo(route)}>
              {route.icon && <ListItemIcon>{route.icon}</ListItemIcon>}
              <ListItemText primary={getDisplayNameForRoute(route)} />
            </ListItem>
          ))}
        </List>
      </div>
    </SwipeableDrawer>
  );
};
