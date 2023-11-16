import { EntryFields, Entry } from 'contentful';

/**
 * Product Slider (`product-slider`) Fields
 */
export interface ProductSliderFields {
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
   * Custom ID
   *
   * - **pattern**: /^[A-Za-z]+[\w\-\:\.]*$/
   */
  customId?: EntryFields.Symbol;

  /**
   * Title
   *
   * - **localized**
   */
  title: EntryFields.Symbol;

  /**
   * Center Slider Title
   *
   * - **defaulted**
   */
  titleCenter?: EntryFields.Boolean;

  /**
   * Slider Logic
   *
   * - **available values**:
   *   - Manual
   *   - Trending Items
   * - **control**: dropdown
   */
  logic: 'Manual' | 'Trending Items';

  /**
   * Product IDs
   */
  productIDs?: EntryFields.Symbol[];

  /**
   * Algolia Title Override
   */
  algoliaTitle?: EntryFields.Symbol;

  /**
   * Trending Items Threshold
   *
   * - **control**: numberEditor
   */
  algoliaTrendingThreshold?: EntryFields.Number;

  /**
   * Background Color
   */
  backgroundColor?: EntryFields.Symbol;

  /**
   * Hide Product CTA
   *
   * - **defaulted**
   */
  hideProductCTA?: EntryFields.Boolean;
}

export type ProductSliderId = 'product-slider';

export interface ProductSliderSys {
  sys: {
    contentType: {
      sys: {
        id: ProductSliderId;
      };
    };
  };
}

/**
 * Product Slider (`product-slider`)
 *
 * This is the “Recommended for You“ and “Deals of the Week“ product lists on the homepage
 *
 * - **display field**: componentName
 */
export type ProductSlider = Entry<ProductSliderFields> & ProductSliderSys;
