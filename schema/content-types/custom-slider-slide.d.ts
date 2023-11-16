import { EntryFields, Entry } from 'contentful';

/**
 * Custom Slider Slide (`custom-slider-slide`) Fields
 */
export interface CustomSliderSlideFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Image Url
   *
   * - **control**: urlEditor
   */
  imageUrl: EntryFields.Symbol;

  /**
   * Slide Title
   */
  text: EntryFields.Symbol;

  /**
   * Slide Subtext
   *
   * - **control**: multipleLine
   */
  subtext?: EntryFields.Text;

  /**
   * Image Alt
   *
   * - **control**: singleLine
   */
  imageAlt?: EntryFields.Symbol;

  /**
   * Slide Link URL
   *
   * - **control**: urlEditor
   */
  link: EntryFields.Symbol;

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
   * Text Background Color
   *
   * - **pattern**: /^#[0-9A-Fa-f]{6}$/
   * - **size**: 7 - 7
   * - **control**: singleLine
   */
  backgroundColor?: EntryFields.Symbol;

  /**
   * Make text color light
   *
   * - **defaulted**
   * - **control**: boolean
   */
  textLight?: EntryFields.Boolean;

  /**
   * Contain image on this slide
   *
   * - **defaulted**
   * - **control**: boolean
   */
  imageContain?: EntryFields.Boolean;

  /**
   * Button Text
   *
   * - **control**: singleLine
   */
  buttonText?: EntryFields.Symbol;

  /**
   * Button Color
   *
   * - **available values**:
   *   - gray-outline
   *   - white-outline
   *   - white
   *   - yellow
   * - **defaulted**
   * - **control**: dropdown
   */
  buttonColor?: 'gray-outline' | 'white-outline' | 'white' | 'yellow';
}

export type CustomSliderSlideId = 'custom-slider-slide';

export interface CustomSliderSlideSys {
  sys: {
    contentType: {
      sys: {
        id: CustomSliderSlideId;
      };
    };
  };
}

/**
 * Custom Slider Slide (`custom-slider-slide`)
 *
 * Individual slides for the slider (non product slides)
 *
 * - **display field**: componentName
 */
export type CustomSliderSlide = Entry<CustomSliderSlideFields> &
  CustomSliderSlideSys;
