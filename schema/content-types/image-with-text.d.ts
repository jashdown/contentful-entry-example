import { EntryFields, Entry } from 'contentful';

/**
 * Image w/Text (`image-with-text`) Fields
 */
export interface ImageWithTextFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Header Text
   *
   * - **localized**
   */
  headerText?: EntryFields.Symbol;

  /**
   * Image URL
   *
   * - **pattern**: /^(ht|f)tps?://\w+([\.\-\w]+)?\.([a-z]{2,4}|travel)(:\d{2,5})?(/.*)?$/i
   * - **control**: urlEditor
   */
  imageURL?: EntryFields.Symbol;

  /**
   * Destination URL
   *
   * - **pattern**: /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/
   * - **control**: urlEditor
   */
  URL?: EntryFields.Symbol;

  /**
   * Link Title
   *
   * - **localized**
   */
  linkTitle?: EntryFields.Symbol;

  /**
   * New Promo
   */
  newPromo?: EntryFields.Boolean;

  /**
   * Subheader Text
   *
   * - **localized**
   */
  subheaderText?: EntryFields.Symbol;

  /**
   * Image Alt Text
   *
   * - **localized**
   */
  imageAltText?: EntryFields.Symbol;
}

export type ImageWithTextId = 'image-with-text';

export interface ImageWithTextSys {
  sys: {
    contentType: {
      sys: {
        id: ImageWithTextId;
      };
    };
  };
}

/**
 * Image w/Text (`image-with-text`)
 *
 * A promo card with an image and text displayed in a grid
 *
 * - **display field**: componentName
 */
export type ImageWithText = Entry<ImageWithTextFields> & ImageWithTextSys;
