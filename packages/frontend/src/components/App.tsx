import * as React from 'react';
import { hot } from 'react-hot-loader';
import Button from '@material-ui/core/Button';

export interface IAppProps { }


export const AppComponent = (props: IAppProps) => (
  <Button variant="contained" color="primary">
    Hello World
  </Button>
);

export const App = hot(module)(AppComponent);