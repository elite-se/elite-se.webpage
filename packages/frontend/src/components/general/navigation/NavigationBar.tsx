import * as React from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  fade,
  IconButton,
  Theme,
  createStyles,
  Typography,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { RouteDrawer } from './RouteDrawer';
import h from '../../../util/history';
import { getLinkForPath } from 'util/routes';
import { AppPath } from 'elite-types';

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
  readonly title?: string;
}

export const NavigationBar = (props: NavigationBarProps) => {
  const classes = useStyles();
  const [routeDrawerOpen, setRouteDrawerOpen] = React.useState(false);
  const title = props.title || getLinkForPath(h.location.pathname as AppPath);

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
        isOpen={routeDrawerOpen}
        onOpen={() => setRouteDrawerOpen(true)}
        onClose={() => setRouteDrawerOpen(false)}
      />
    </>
  );
};
