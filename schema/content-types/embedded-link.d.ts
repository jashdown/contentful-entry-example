import { EntryFields, Entry } from 'contentful';

/**
 * Embedded Link (`embedded-link`) Fields
 */
export interface EmbeddedLinkFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Link URL
   *
   * - **size**: 0 - 5000
   */
  href: EntryFields.Text;

  /**
   * Link Text
   */
  linkText: EntryFields.Symbol;

  /**
   * Target
   *
   * - **available values**:
   *   - _self
   *   - _blank
   * - **default**: _self
   */
  target: '_self' | '_blank';

  /**
   * Title
   */
  title?: EntryFields.Symbol;

  /**
   * Aria Label
   */
  ariaLabel?: EntryFields.Symbol;
}

export type EmbeddedLinkId = 'embedded-link';

export interface EmbeddedLinkSys {
  sys: {
    contentType: {
      sys: {
        id: EmbeddedLinkId;
      };
    };
  };
}

/**
 * Embedded Link (`embedded-link`)
 *
 * Custom embedded hyperlink for rich text fields that allows for custom HTML attributes
 *
 * - **display field**: componentName
 */
export type EmbeddedLink = Entry<EmbeddedLinkFields> & EmbeddedLinkSys;
