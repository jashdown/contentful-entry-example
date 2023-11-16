import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { TwoColumnTextAndMediaImage } from './two-column-text-and-media-image';

/**
 * Two Column Text & Media > Image Slider (`two-column-text-and-media-image-slider`) Fields
 */
export interface TwoColumnTextAndMediaImageSliderFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Image Slider
   *
   * - **localized**
   */
  title?: EntryFields.Symbol;

  /**
   * Images
   *
   * - **available content-types**:
   *   - two-column-text-and-media-image
   */
  images: EntryLink<TwoColumnTextAndMediaImage>[];

  /**
   * Turn OFF Rounded Corners?
   *
   * - **defaulted**
   * - **control**: boolean
   */
  roundedCornersOff?: EntryFields.Boolean;
}

export type TwoColumnTextAndMediaImageSliderId =
  'two-column-text-and-media-image-slider';

export interface TwoColumnTextAndMediaImageSliderSys {
  sys: {
    contentType: {
      sys: {
        id: TwoColumnTextAndMediaImageSliderId;
      };
    };
  };
}

/**
 * Two Column Text & Media > Image Slider (`two-column-text-and-media-image-slider`)
 *
 * An image slider that is displayed in the Two Column Text & Media component
 *
 * - **display field**: componentName
 */
export type TwoColumnTextAndMediaImageSlider =
  Entry<TwoColumnTextAndMediaImageSliderFields> &
    TwoColumnTextAndMediaImageSliderSys;
