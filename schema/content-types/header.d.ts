import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { EmbeddedLink } from './embedded-link';
import { TopBanner } from './top-banner';
import { MainNavigation } from './main-navigation';

/**
 * Main Header (`header`) Fields
 */
export interface HeaderFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Logged In Menu Links
   *
   * - **available content-types**:
   *   - embedded-link
   */
  loggedInLinks: EntryLink<EmbeddedLink>[];

  /**
   * Additional Logged Out Menu Links
   *
   * - **available content-types**:
   *   - embedded-link
   */
  loggedOutLinks: EntryLink<EmbeddedLink>[];

  /**
   * Top Banner
   *
   * - **available content-types**:
   *   - top-banner
   */
  topBanner?: EntryLink<TopBanner>[];

  /**
   * Mobile Top Banner Links
   *
   * - **available content-types**:
   *   - embedded-link
   */
  mobileTopBannerLinks: EntryLink<EmbeddedLink>[];

  /**
   * Main Navigation Menu Items
   *
   * - **available content-types**:
   *   - main-navigation
   */
  mainNav: EntryLink<MainNavigation>[];
}

export type HeaderId = 'header';

export interface HeaderSys {
  sys: {
    contentType: {
      sys: {
        id: HeaderId;
      };
    };
  };
}

/**
 * Main Header (`header`)
 *
 * Header content fields
 *
 * - **display field**: componentName
 */
export type Header = Entry<HeaderFields> & HeaderSys;
