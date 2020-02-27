import { LinkType } from './link.type';
import { AppPath } from './appPath.type';
import { RouteProps } from 'react-router';

/**
 * Each Approute can have a specific link (i.e., path with filled parameter placeholders),
 * a display Name, i.e., text of the link and a nonoptional (!) path
 */
export interface AppRoute extends RouteProps {
  // Use this if the link target differs from the path specification,
  // i.e., if the path url contains paramter specifications etc
  readonly link?: LinkType;

  // link text (Human readable!)
  readonly displayName?: string;

  // optional icon displayed next to the link name
  readonly icon?: JSX.Element;

  // AppRoutes must have a path - deoptionalize this property
  readonly path: AppPath;
}
