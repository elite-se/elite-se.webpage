import React, { PureComponent, createContext, ReactNode } from 'react';
import { FeatureMap, FeatureSetterFunction } from 'elite-types';

const FeatureFlags = createContext<{ featureMap: FeatureMap } & { setFeatureEnabled: FeatureSetterFunction }>({
  featureMap: {},
  setFeatureEnabled: () => {
    throw new Error("Unimplemented functionality 'setFeatureEnabled' in FeatureFlagsProvider value");
  },
});

export interface FeatureToggleProperties {
  readonly inverted?: boolean;
  readonly featureName: string;
}

export class FeatureFlag extends PureComponent<FeatureToggleProperties> {
  render() {
    const { children, inverted, featureName } = this.props;

    return (
      <FeatureFlags.Consumer>
        {({ featureMap }) => {
          if ((featureMap[featureName] && !inverted) || (!featureMap[featureName] && inverted)) {
            return children;
          }
          return null;
        }}
      </FeatureFlags.Consumer>
    );
  }
}

export const FeatureFlagsConsumer = FeatureFlags.Consumer;
export const FeatureFlagsProvider = FeatureFlags.Provider;
