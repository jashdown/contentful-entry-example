import { EntryFields, Entry } from 'contentful';

/**
 * Footer Column Links List (`footer-column-links-list`) Fields
 */
export interface FooterColumnLinksListFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Column Internal Url
   */
  columnInternalUrl?: EntryFields.Symbol;

  /**
   * Manual Link Target
   *
   * - **available values**:
   *   - _self
   *   - _blank
   * - **default**: _self
   */
  manualLinkTarget: '_self' | '_blank';

  /**
   * Column Link Text
   */
  columnLinkText: EntryFields.Symbol;

  /**
   * Open Chat Link
   */
  openChatLink?: EntryFields.Symbol;

  /**
   * Is Special Link
   *
   * - **defaulted**
   */
  isSpecialLink?: EntryFields.Boolean;
}

export type FooterColumnLinksListId = 'footer-column-links-list';

export interface FooterColumnLinksListSys {
  sys: {
    contentType: {
      sys: {
        id: FooterColumnLinksListId;
      };
    };
  };
}

/**
 * Footer Column Links List (`footer-column-links-list`)
 *
 * Footer Column Links List fields
 *
 * - **display field**: componentName
 */
export type FooterColumnLinksList = Entry<FooterColumnLinksListFields> &
  FooterColumnLinksListSys;
