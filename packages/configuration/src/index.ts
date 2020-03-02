import devConfig from './development.configuration';
import prodConfig from './production.configuration';
import { Configuration } from 'elite-types';

export function getBaseConfiguration(environment = process.env.NODE_ENV): Configuration {
  return environment === 'development' ? devConfig : prodConfig;
}
