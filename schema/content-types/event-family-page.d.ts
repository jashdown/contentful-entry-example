import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { GenericImageHero } from './generic-image-hero';
import { ImageHero } from './image-hero';
import { AddItemsBundle } from './add-items-bundle';
import { ButtonEmbed } from './button-embed';
import { CategoryGrid } from './category-grid';
import { ContentEmbed } from './content-embed';
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
import { Quote } from './quote';
import { TwoColumnTextAndMedia } from './two-column-text-and-media';
import { VideoEmbed } from './video-embed';

/**
 * Event Family Page (`event-family-page`) Fields
 */
export interface EventFamilyPageFields {
  /**
   * Component Name
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
   * Hero
   *
   * - **available content-types**:
   *   - generic-image-hero
   *   - image-hero
   */
  hero?: EntryLink<GenericImageHero | ImageHero>;

  /**
   * Page Blocks
   *
   * - **available content-types**:
   *   - add-items-bundle
   *   - button-embed
   *   - category-grid
   *   - content-embed
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
   *   - quote
   *   - two-column-text-and-media
   *   - video-embed
   */
  pageBlocks?: EntryLink<
    | AddItemsBundle
    | ButtonEmbed
    | CategoryGrid
    | ContentEmbed
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
    | Quote
    | TwoColumnTextAndMedia
    | VideoEmbed
  >[];

  /**
   * Route
   *
   * - **unique**
   * - **pattern**: /^(\/|(\/[\w\-.~!$&'()*+,;=:@%]+)+)$/i
   */
  route: EntryFields.Symbol;
}

export type EventFamilyPageId = 'event-family-page';

export interface EventFamilyPageSys {
  sys: {
    contentType: {
      sys: {
        id: EventFamilyPageId;
      };
    };
  };
}

/**
 * Event Family Page (`event-family-page`)
 *
 * Event Family Page content fields
 *
 * - **display field**: componentName
 */
export type EventFamilyPage = Entry<EventFamilyPageFields> & EventFamilyPageSys;
