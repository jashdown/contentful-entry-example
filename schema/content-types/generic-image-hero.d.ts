import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';

/**
 * Generic Image Hero (`generic-image-hero`) Fields
 */
export interface GenericImageHeroFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Title
   *
   * - **localized**
   */
  title: EntryFields.Symbol;

  /**
   * Hide Title
   *
   * - **defaulted**
   */
  hideTitle?: EntryFields.Boolean;

  /**
   * Subtext
   *
   * - **localized**
   */
  subtext?: RT.Document;

  /**
   * Hide Subtext
   *
   * - **defaulted**
   */
  hideSubtext?: EntryFields.Boolean;

  /**
   * Background Color
   */
  backgroundColor?: EntryFields.Symbol;

  /**
   * Background Image URL
   */
  backgroundImageURL?: EntryFields.Symbol;

  /**
   * Mobile Background Image URL
   *
   * - **control**: urlEditor
   */
  mobileBackgroundImageURL?: EntryFields.Symbol;

  /**
   * Center Image URL
   */
  centerImage?: EntryFields.Symbol;

  /**
   * Center Image Alt Text
   *
   * - **localized**
   */
  centerImageAltText?: EntryFields.Symbol;

  /**
   * Dark Text
   *
   * - **defaulted**
   */
  darkText?: EntryFields.Boolean;

  /**
   * Enable Min Height
   *
   * - **defaulted**
   */
  enableMinHeight?: EntryFields.Boolean;
}

export type GenericImageHeroId = 'generic-image-hero';

export interface GenericImageHeroSys {
  sys: {
    contentType: {
      sys: {
        id: GenericImageHeroId;
      };
    };
  };
}

/**
 * Generic Image Hero (`generic-image-hero`)
 *
 * A generic hero image that is displayed on many pages
 *
 * - **display field**: componentName
 */
export type GenericImageHero = Entry<GenericImageHeroFields> &
  GenericImageHeroSys;
