import * as React from 'react';
import { hot } from 'react-hot-loader';
import { HomePage } from './pages/HomePage';

export interface IAppProps { }


export const AppComponent = (props: IAppProps) => (
  <HomePage />
);

export const App = hot(module)(AppComponent);