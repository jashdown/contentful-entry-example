import { EntryFields, Entry } from 'contentful';

/**
 * Header Nav Image (`header-nav-image`) Fields
 */
export interface HeaderNavImageFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Title
   */
  title?: EntryFields.Symbol;

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
   * - **default**: _blank
   */
  linkTarget?: '_self' | '_blank';

  /**
   * Image Url
   */
  imageUrl?: EntryFields.Symbol;

  /**
   * Analytics Id
   */
  analyticsId?: EntryFields.Symbol;

  /**
   * Bottom Text
   */
  bottomText?: EntryFields.Symbol;

  /**
   * Image Alt Text
   *
   * - **control**: singleLine
   */
  imageAltText: EntryFields.Symbol;
}

export type HeaderNavImageId = 'header-nav-image';

export interface HeaderNavImageSys {
  sys: {
    contentType: {
      sys: {
        id: HeaderNavImageId;
      };
    };
  };
}

/**
 * Header Nav Image (`header-nav-image`)
 *
 * Header Nav Image content fields
 *
 * - **display field**: componentName
 */
export type HeaderNavImage = Entry<HeaderNavImageFields> & HeaderNavImageSys;
