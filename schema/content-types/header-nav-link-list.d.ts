import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { HeaderNavLink } from './header-nav-link';

/**
 * Header Nav Link List (`header-nav-link-list`) Fields
 */
export interface HeaderNavLinkListFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Header Nav Link
   *
   * - **available content-types**:
   *   - header-nav-link
   */
  linkList: EntryLink<HeaderNavLink>[];
}

export type HeaderNavLinkListId = 'header-nav-link-list';

export interface HeaderNavLinkListSys {
  sys: {
    contentType: {
      sys: {
        id: HeaderNavLinkListId;
      };
    };
  };
}

/**
 * Header Nav Link List (`header-nav-link-list`)
 *
 * Header Nav Link List content fields
 *
 * - **display field**: componentName
 */
export type HeaderNavLinkList = Entry<HeaderNavLinkListFields> &
  HeaderNavLinkListSys;
