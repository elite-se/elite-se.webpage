import devConfig from './development.configuration';
import prodConfig from './production.configuration';
import { Configuration } from 'elite-types';

export function getConfiguration(): Configuration {
  return process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
}
