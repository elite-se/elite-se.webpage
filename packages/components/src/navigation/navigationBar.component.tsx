import * as React from 'react';
import { AppBar, Toolbar, makeStyles, IconButton, Theme, createStyles, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { RouteDrawer } from './routeDrawer.component';
import { AppRoute } from 'elite-types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export interface NavigationBarProps {
  /** Title displayed by in navigation bar */
  readonly title: string;

  /** Callback used by navigation bar to navigate to a route */
  readonly onNavigateTo: (route: AppRoute) => void;

  /** Routes that the user may navigate to */
  readonly routes: AppRoute[];
}

/**
 * NavigationBar displays a material-ui AppBar in combination with a Drawer
 * component which the User can use to navigate the available routes
 *
 * @param props See NavigationBarProps
 */
export const NavigationBar = (props: NavigationBarProps) => {
  const classes = useStyles();
  const [routeDrawerOpen, setRouteDrawerOpen] = React.useState(false);

  const title = props.title;

  return (
    <>
      <div className={classes.root}>
        <AppBar position={'static'}>
          <Toolbar>
            <IconButton
              edge={'start'}
              className={classes.menuButton}
              color={'inherit'}
              aria-label={'open drawer'}
              onClick={() => setRouteDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant={'h6'} noWrap>
              {title}
            </Typography>
            <Button color={'inherit'}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>

      <RouteDrawer
        routes={props.routes}
        onNavigateTo={props.onNavigateTo}
        isOpen={routeDrawerOpen}
        onOpen={() => setRouteDrawerOpen(true)}
        onClose={() => setRouteDrawerOpen(false)}
      />
    </>
  );
};
