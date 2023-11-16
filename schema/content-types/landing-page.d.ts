import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { GenericImageHero } from './generic-image-hero';
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
import { VideoEmbed } from './video-embed';
import { ContentEmbed } from './content-embed';
import { ButtonEmbed } from './button-embed';

/**
 * Landing Page (`landing-page`) Fields
 */
export interface LandingPageFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Meta Title
   *
   * - **localized**
   * - **size**: 0 - 100
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
   * Hero
   *
   * - **available content-types**:
   *   - generic-image-hero
   */
  hero?: EntryLink<GenericImageHero>;

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
   *   - video-embed
   *   - content-embed
   *   - button-embed
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
    | VideoEmbed
    | ContentEmbed
    | ButtonEmbed
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

export type LandingPageId = 'landing-page';

export interface LandingPageSys {
  sys: {
    contentType: {
      sys: {
        id: LandingPageId;
      };
    };
  };
}

/**
 * Landing Page (`landing-page`)
 *
 * Landing Page content fields
 *
 * - **display field**: componentName
 */
export type LandingPage = Entry<LandingPageFields> & LandingPageSys;
