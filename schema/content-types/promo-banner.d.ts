import { EntryFields, Entry } from 'contentful';

/**
 * Promo Banner (`promo-banner`) Fields
 */
export interface PromoBannerFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Enable Tracking
   *
   * - **defaulted**
   */
  enableTracking?: EntryFields.Boolean;

  /**
   * Custom ID
   *
   * - **pattern**: /^[A-Za-z]+[\w\-\:\.]*$/
   */
  customId?: EntryFields.Symbol;

  /**
   * Header Text
   *
   * - **localized**
   */
  heading: EntryFields.Symbol;

  /**
   * Subtext
   *
   * - **localized**
   */
  subText?: EntryFields.Symbol;

  /**
   * Button Text
   *
   * - **localized**
   */
  buttonText: EntryFields.Symbol;

  /**
   * Text Block on Right Side
   *
   * - **defaulted**
   */
  switchTextAndImage?: EntryFields.Boolean;

  /**
   * Link URL
   *
   * - **control**: urlEditor
   */
  href: EntryFields.Symbol;

  /**
   * Link URL Target
   *
   * - **available values**:
   *   - _self
   *   - _blank
   * - **default**: _self
   */
  hrefTarget?: '_self' | '_blank';

  /**
   * Image URL
   *
   * - **control**: urlEditor
   */
  imageDesktopURL: EntryFields.Symbol;

  /**
   * Make Text Light
   *
   * - **defaulted**
   */
  colorInverse?: EntryFields.Boolean;

  /**
   * Text Background Color
   *
   * - **pattern**: /^#[0-9A-Fa-f]{6}$/
   * - **size**: 7 - 7
   */
  textBackgroundColor?: EntryFields.Symbol;

  /**
   * Button Color
   *
   * - **available values**:
   *   - white
   *   - gray-outline
   *   - white-outline
   *   - yellow
   *   - gray
   * - **default**: white
   * - **control**: dropdown
   */
  buttonColor?: 'white' | 'gray-outline' | 'white-outline' | 'yellow' | 'gray';
}

export type PromoBannerId = 'promo-banner';

export interface PromoBannerSys {
  sys: {
    contentType: {
      sys: {
        id: PromoBannerId;
      };
    };
  };
}

/**
 * Promo Banner (`promo-banner`)
 *
 * A generic promo banner
 *
 * - **display field**: componentName
 */
export type PromoBanner = Entry<PromoBannerFields> & PromoBannerSys;
