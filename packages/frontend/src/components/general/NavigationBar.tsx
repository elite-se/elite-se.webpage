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
  readonly title: string;
}

export const NavigationBar = (props: NavigationBarProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position={'static'}>
        <Toolbar>
          <IconButton edge={'start'} className={classes.menuButton} color={'inherit'} aria-label={'open drawer'}>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant={'h6'} noWrap>
            {props.title}
          </Typography>
          <Button color={'inherit'}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
