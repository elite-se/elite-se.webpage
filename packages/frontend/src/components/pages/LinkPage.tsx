import { Divider, List, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { LinkListItem } from '../general/LinkListItem';
import { LinkDirectory } from './support/LinkDirectory';

export interface LinkPageProps extends RouteComponentProps {}

export const LinkPage = (props: LinkPageProps) => (
  <>
    <h1>Useful Links List</h1>

    <Autocomplete
      autoHighlight
      options={["Meme", "Test"]}
      renderInput={params => (
        <TextField {...params} label="autoHighlight" margin="normal" fullWidth />
      )}
    />

    <List>
      <LinkListItem href={'https://elite-se.informatik.uni-augsburg.de'} title={'Main Webpage'} />
      <LinkListItem href={'https://github.com/elite-se/elite-se.protokolle'} title={'Exam Protocols'} />
    </List>

    <Divider />

    <LinkDirectory />
  </>
);
