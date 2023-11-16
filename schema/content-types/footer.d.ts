import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { FooterColumnsList } from './footer-columns-list';

/**
 * Footer (`footer`) Fields
 */
export interface FooterFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Upper Footer Columns List
   *
   * - **available content-types**:
   *   - footer-columns-list
   */
  upperfooter: EntryLink<FooterColumnsList>[];

  /**
   * Copyright Text
   */
  copyrightText: EntryFields.Symbol;
}

export type FooterId = 'footer';

export interface FooterSys {
  sys: {
    contentType: {
      sys: {
        id: FooterId;
      };
    };
  };
}

/**
 * Footer (`footer`)
 *
 * Footer content fields
 *
 * - **display field**: componentName
 */
export type Footer = Entry<FooterFields> & FooterSys;
