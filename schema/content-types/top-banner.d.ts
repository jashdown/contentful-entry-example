import { EntryFields, Entry } from 'contentful';

/**
 * Top Banner Slide (`top-banner`) Fields
 */
export interface TopBannerFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Message
   */
  message: EntryFields.Symbol;

  /**
   * CTA
   *
   * - **control**: singleLine
   */
  cta?: EntryFields.Symbol;

  /**
   * Link Url
   *
   * - **control**: urlEditor
   */
  url?: EntryFields.Symbol;

  /**
   * Analytics Link Name
   */
  linkName?: EntryFields.Symbol;

  /**
   * Enable Tracking
   *
   * - **defaulted**
   */
  enableTracking?: EntryFields.Boolean;
}

export type TopBannerId = 'top-banner';

export interface TopBannerSys {
  sys: {
    contentType: {
      sys: {
        id: TopBannerId;
      };
    };
  };
}

/**
 * Top Banner Slide (`top-banner`)
 *
 * Top Banner Slide content fields
 *
 * - **display field**: componentName
 */
export type TopBanner = Entry<TopBannerFields> & TopBannerSys;
