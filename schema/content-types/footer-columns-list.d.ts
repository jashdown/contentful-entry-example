import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { FooterColumnLinksList } from './footer-column-links-list';

/**
 * Footer Columns List (`footer-columns-list`) Fields
 */
export interface FooterColumnsListFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Column Title
   */
  columnTitle: EntryFields.Symbol;

  /**
   * Columns List
   *
   * - **available content-types**:
   *   - footer-column-links-list
   */
  columnLinksList: EntryLink<FooterColumnLinksList>[];
}

export type FooterColumnsListId = 'footer-columns-list';

export interface FooterColumnsListSys {
  sys: {
    contentType: {
      sys: {
        id: FooterColumnsListId;
      };
    };
  };
}

/**
 * Footer Columns List (`footer-columns-list`)
 *
 * Footer Columns List fields
 *
 * - **display field**: componentName
 */
export type FooterColumnsList = Entry<FooterColumnsListFields> &
  FooterColumnsListSys;
