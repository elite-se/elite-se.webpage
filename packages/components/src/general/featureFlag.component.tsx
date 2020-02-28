import React, { PureComponent, createContext, Context } from 'react';
import { FeatureMap } from 'elite-types';

const FeatureFlags: Context<FeatureMap> = createContext<FeatureMap>({});

export interface FeatureToggleProperties {
  readonly inverted?: boolean;
  readonly featureName: string;
}

export class FeatureFlag extends PureComponent<FeatureToggleProperties> {
  render() {
    const { children, inverted, featureName } = this.props;

    return (
      <FeatureFlags.Consumer>
        {(featureMap: FeatureMap) => {
          if ((featureMap[featureName] && !inverted) || (!featureMap[featureName] && inverted)) {
            return children;
          } else {
            return null;
          }
        }}
      </FeatureFlags.Consumer>
    );
  }
}

export const FeatureFlagsProvider = FeatureFlags.Provider;
