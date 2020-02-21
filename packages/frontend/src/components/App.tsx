import * as React from 'react';
import { hot } from 'react-hot-loader';

export interface IAppProps { }


export const AppComponent = (props: IAppProps) => (
  <div>Hier könnte Ihre Werbung stehen</div>
);

export const App = hot(module)(AppComponent);