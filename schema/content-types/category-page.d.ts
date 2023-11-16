import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { AddItemsBundle } from './add-items-bundle';
import { AudioPlayer } from './audio-player';
import { CategoryGrid } from './category-grid';
import { CustomSlider } from './custom-slider';
import { ExtendedRichText } from './extended-rich-text';
import { FaqAccordion } from './faq-accordion';
import { FeaturedCategorySlider } from './featured-category-slider';
import { Form } from './form';
import { HeadingTag } from './heading-tag';
import { ImageEmbed } from './image-embed';
import { MultiColumn } from './multi-column';
import { ProductListing } from './product-listing';
import { ProductSlider } from './product-slider';
import { PromoBanner } from './promo-banner';
import { PromoGrid } from './promo-grid';
import { TwoColumnTextAndMedia } from './two-column-text-and-media';

/**
 * Category Page (`category-page`) Fields
 */
export interface CategoryPageFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Meta Title
   *
   * - **localized**
   * - **size**: 0 - 100
   * - **control**: singleLine
   */
  pageTitle: EntryFields.Symbol;

  /**
   * Meta Description
   *
   * - **localized**
   * - **size**: 0 - 165
   * - **control**: multipleLine
   */
  description?: EntryFields.Text;

  /**
   * Social Media Image
   *
   * - **pattern**: /^(https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/
   * - **control**: urlEditor
   */
  socialMediaImage?: EntryFields.Symbol;

  /**
   * Social Media Description
   *
   * - **localized**
   * - **control**: multipleLine
   */
  socialMediaDescription?: EntryFields.Text;

  /**
   * Page Blocks
   *
   * - **available content-types**:
   *   - add-items-bundle
   *   - audio-player
   *   - category-grid
   *   - custom-slider
   *   - extended-rich-text
   *   - faq-accordion
   *   - featured-category-slider
   *   - form
   *   - heading-tag
   *   - image-embed
   *   - multi-column
   *   - product-listing
   *   - product-slider
   *   - promo-banner
   *   - promo-grid
   *   - two-column-text-and-media
   * - **control**: entryLinksEditor
   */
  pageBlocks?: EntryLink<
    | AddItemsBundle
    | AudioPlayer
    | CategoryGrid
    | CustomSlider
    | ExtendedRichText
    | FaqAccordion
    | FeaturedCategorySlider
    | Form
    | HeadingTag
    | ImageEmbed
    | MultiColumn
    | ProductListing
    | ProductSlider
    | PromoBanner
    | PromoGrid
    | TwoColumnTextAndMedia
  >[];

  /**
   * Route
   *
   * - **unique**
   * - **pattern**: /^(\/|(\/[\w\-.~!$&'()*+,;=:@%]+)+)$/i
   * - **control**: slugEditor
   */
  route: EntryFields.Symbol;
}

export type CategoryPageId = 'category-page';

export interface CategoryPageSys {
  sys: {
    contentType: {
      sys: {
        id: CategoryPageId;
      };
    };
  };
}

/**
 * Category Page (`category-page`)
 *
 * Category Page content fields
 *
 * - **display field**: componentName
 */
export type CategoryPage = Entry<CategoryPageFields> & CategoryPageSys;
