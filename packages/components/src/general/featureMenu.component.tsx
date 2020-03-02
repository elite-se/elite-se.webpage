import { FormControlLabel, IconButton, Menu, MenuItem, Switch, Typography } from '@material-ui/core';
import FeatureMenuIcon from '@material-ui/icons/Build';
import * as React from 'react';
import { FeatureFlagsConsumer } from './featureFlag.component';

export interface FeatureMenuProps {}

export const FeatureMenu = (props: FeatureMenuProps) => {
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <IconButton aria-controls={'feature-menu'} aria-haspopup={'true'} color={'inherit'} onClick={handleClick}>
        <FeatureMenuIcon />
      </IconButton>
      <Menu
        id={'feature-menu'}
        anchorEl={anchorElement}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted={true}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorElement)}
        onClose={handleClose}
      >
        <MenuItem>
          <Typography variant={'h6'}>Feature Flags</Typography>
        </MenuItem>

        <FeatureFlagsConsumer>
          {({ featureMap, setFeatureEnabled }) =>
            Object.keys(featureMap).map(featureKey => (
              <MenuItem key={featureKey}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={featureMap[featureKey]}
                      onChange={() => setFeatureEnabled(featureKey, !featureMap[featureKey])}
                      color={'primary'}
                    />
                  }
                  label={featureKey}
                />
              </MenuItem>
            ))
          }
        </FeatureFlagsConsumer>
      </Menu>
    </>
  );
};
