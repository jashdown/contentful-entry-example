import { EntryFields, Entry } from 'contentful';

/**
 * Image Hero (`image-hero`) Fields
 */
export interface ImageHeroFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Enable Custom Link Tracking
   *
   * - **defaulted**
   */
  enableTracking?: EntryFields.Boolean;

  /**
   * Header Text
   *
   * - **localized**
   */
  headerText: EntryFields.Symbol;

  /**
   * Dark Text
   */
  darkText?: EntryFields.Boolean;

  /**
   * Subheading Text
   */
  subheadingText?: EntryFields.Symbol;

  /**
   * Button Text
   */
  ctaText?: EntryFields.Symbol;

  /**
   * Button Color
   *
   * - **available values**:
   *   - blue
   *   - yellow
   *   - white
   *   - gray
   * - **default**: yellow
   */
  buttonColor?: 'blue' | 'yellow' | 'white' | 'gray';

  /**
   * CTA URL
   *
   * - **control**: urlEditor
   */
  ctaURL?: EntryFields.Symbol;

  /**
   * Hero Image
   *
   * - **control**: urlEditor
   */
  image: EntryFields.Symbol;

  /**
   * Hero Image Mobile
   *
   * - **control**: urlEditor
   */
  imageMobile: EntryFields.Symbol;
}

export type ImageHeroId = 'image-hero';

export interface ImageHeroSys {
  sys: {
    contentType: {
      sys: {
        id: ImageHeroId;
      };
    };
  };
}

/**
 * Image Hero (`image-hero`)
 *
 * A large hero image that is displayed on the home page
 *
 * - **display field**: componentName
 */
export type ImageHero = Entry<ImageHeroFields> & ImageHeroSys;
