import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { CategoryTile } from './category-tile';

/**
 * Featured Category Slider (`featured-category-slider`) Fields
 */
export interface FeaturedCategorySliderFields {
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
   * Category Slides
   *
   * - **available content-types**:
   *   - category-tile
   */
  slides?: EntryLink<CategoryTile>[];
}

export type FeaturedCategorySliderId = 'featured-category-slider';

export interface FeaturedCategorySliderSys {
  sys: {
    contentType: {
      sys: {
        id: FeaturedCategorySliderId;
      };
    };
  };
}

/**
 * Featured Category Slider (`featured-category-slider`)
 *
 * A slider with featured categories for sub category page
 *
 * - **display field**: componentName
 */
export type FeaturedCategorySlider = Entry<FeaturedCategorySliderFields> &
  FeaturedCategorySliderSys;
