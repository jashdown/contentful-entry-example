import { EntryFields, Entry } from 'contentful';

/**
 * Two Column Text & Media > Image (`two-column-text-and-media-image`) Fields
 */
export interface TwoColumnTextAndMediaImageFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Title
   *
   * - **localized**
   */
  title?: EntryFields.Symbol;

  /**
   * Image URL
   *
   * - **control**: urlEditor
   */
  imageURL: EntryFields.Symbol;

  /**
   * Image Alt Text
   *
   * - **localized**
   * - **control**: singleLine
   */
  imageAltText?: EntryFields.Symbol;

  /**
   * Link URL for Image
   *
   * - **control**: urlEditor
   */
  imageLinkURL?: EntryFields.Symbol;

  /**
   * Turn OFF Rounded Corners?
   *
   * - **defaulted**
   * - **control**: boolean
   */
  roundedCornersOff?: EntryFields.Boolean;
}

export type TwoColumnTextAndMediaImageId = 'two-column-text-and-media-image';

export interface TwoColumnTextAndMediaImageSys {
  sys: {
    contentType: {
      sys: {
        id: TwoColumnTextAndMediaImageId;
      };
    };
  };
}

/**
 * Two Column Text & Media > Image (`two-column-text-and-media-image`)
 *
 * An image that is displayed in the Two Column Text & Media component
 *
 * - **display field**: componentName
 */
export type TwoColumnTextAndMediaImage =
  Entry<TwoColumnTextAndMediaImageFields> & TwoColumnTextAndMediaImageSys;
