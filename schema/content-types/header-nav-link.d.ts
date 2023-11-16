import { EntryFields, Entry } from 'contentful';

/**
 * Header Nav Link (`header-nav-link`) Fields
 */
export interface HeaderNavLinkFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Text
   */
  text: EntryFields.Symbol;

  /**
   * Type of Selection
   *
   * - **available values**:
   *   - title
   *   - link
   * - **default**: link
   */
  typeLink?: 'title' | 'link';

  /**
   * Url Link
   */
  urlLink?: EntryFields.Symbol;

  /**
   * Link Target
   *
   * - **available values**:
   *   - _self
   *   - _blank
   * - **default**: _self
   */
  linkTarget?: '_self' | '_blank';

  /**
   * Analytics Id Override
   */
  analyticsId?: EntryFields.Symbol;
}

export type HeaderNavLinkId = 'header-nav-link';

export interface HeaderNavLinkSys {
  sys: {
    contentType: {
      sys: {
        id: HeaderNavLinkId;
      };
    };
  };
}

/**
 * Header Nav Link (`header-nav-link`)
 *
 * Header Nav Link content fields
 *
 * - **display field**: componentName
 */
export type HeaderNavLink = Entry<HeaderNavLinkFields> & HeaderNavLinkSys;
