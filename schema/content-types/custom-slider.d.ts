import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { CustomSliderSlide } from './custom-slider-slide';

/**
 * Custom Slider (`custom-slider`) Fields
 */
export interface CustomSliderFields {
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
  customId: EntryFields.Symbol;

  /**
   * Slider Title
   */
  title: EntryFields.Symbol;

  /**
   * Featured Spot Text
   *
   * - **control**: singleLine
   */
  featureSpotText?: EntryFields.Symbol;

  /**
   * Featured Spot Image URL
   *
   * - **control**: urlEditor
   */
  featureSpotImageUrl?: EntryFields.Symbol;

  /**
   * Featured Spot Image Alt Text
   */
  featureSpotImageAlt?: EntryFields.Symbol;

  /**
   * Featured Spot Link URL
   *
   * - **control**: urlEditor
   */
  featureSpotLinkUrl?: EntryFields.Symbol;

  /**
   * Featured Spot Link URL Target
   *
   * - **available values**:
   *   - _self
   *   - _blank
   * - **default**: _self
   * - **control**: dropdown
   */
  featureSpotLinkTarget?: '_self' | '_blank';

  /**
   * Slider Tile Layout
   *
   * - **available values**:
   *   - DEFAULT
   *   - LOGO
   *   - CARD
   *   - LARGE CARD
   * - **default**: DEFAULT
   * - **control**: dropdown
   */
  tileLayout?: 'DEFAULT' | 'LOGO' | 'CARD' | 'LARGE CARD';

  /**
   * Contain all slide images
   *
   * - **defaulted**
   * - **control**: boolean
   */
  imageContain?: EntryFields.Boolean;

  /**
   * Slides
   *
   * - **available content-types**:
   *   - custom-slider-slide
   */
  slides?: EntryLink<CustomSliderSlide>[];
}

export type CustomSliderId = 'custom-slider';

export interface CustomSliderSys {
  sys: {
    contentType: {
      sys: {
        id: CustomSliderId;
      };
    };
  };
}

/**
 * Custom Slider (`custom-slider`)
 *
 * A custom slider for non product slides
 *
 * - **display field**: componentName
 */
export type CustomSlider = Entry<CustomSliderFields> & CustomSliderSys;
