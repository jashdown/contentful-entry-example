import { EntryFields, Entry } from 'contentful';

/**
 * Image (`image-embed`) Fields
 */
export interface ImageEmbedFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Enable Tracking
   *
   * - **defaulted**
   * - **control**: boolean
   */
  enableTracking?: EntryFields.Boolean;

  /**
   * Custom ID
   *
   * - **pattern**: /^[A-Za-z]+[\w\-\:\.]*$/
   * - **control**: singleLine
   */
  customId?: EntryFields.Symbol;

  /**
   * Image Url
   *
   * - **control**: urlEditor
   */
  imageUrl: EntryFields.Symbol;

  /**
   * Mobile Image Url
   *
   * - **control**: urlEditor
   */
  imageUrlMobile?: EntryFields.Symbol;

  /**
   * Image Alt Text
   *
   * - **localized**
   * - **control**: singleLine
   */
  imageAltText?: EntryFields.Symbol;

  /**
   * Link Url
   *
   * - **control**: urlEditor
   */
  linkUrl?: EntryFields.Symbol;

  /**
   * Link Url Target
   *
   * - **available values**:
   *   - _self
   *   - _blank
   * - **default**: _self
   * - **control**: dropdown
   */
  linkTarget?: '_self' | '_blank';

  /**
   * Background Color
   *
   * - **pattern**: /^#[0-9A-Fa-f]{6}$/
   * - **size**: 7 - 7
   * - **control**: singleLine
   */
  backgroundColor?: EntryFields.Symbol;

  /**
   * Image Size
   *
   * - **available values**:
   *   - Small
   *   - Medium
   *   - Large
   *   - X-Large
   * - **defaulted**
   * - **control**: dropdown
   */
  imageSize?: 'Small' | 'Medium' | 'Large' | 'X-Large';

  /**
   * Image Placement
   *
   * - **available values**:
   *   - Centered
   *   - Left
   *   - Right
   * - **defaulted**
   * - **control**: dropdown
   */
  imagePlacement?: 'Centered' | 'Left' | 'Right';

  /**
   * Turn OFF Rounded Corners?
   *
   * - **defaulted**
   * - **control**: boolean
   */
  roundedCorners?: EntryFields.Boolean;
}

export type ImageEmbedId = 'image-embed';

export interface ImageEmbedSys {
  sys: {
    contentType: {
      sys: {
        id: ImageEmbedId;
      };
    };
  };
}

/**
 * Image (`image-embed`)
 *
 * An image component to use as a banner link, section header, or just a figure image with text or other content
 *
 * - **display field**: componentName
 */
export type ImageEmbed = Entry<ImageEmbedFields> & ImageEmbedSys;
