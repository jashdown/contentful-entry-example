import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { ContributorPage } from './contributor-page';
import { GenericImageHero } from './generic-image-hero';
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
import { ProductSlider } from './product-slider';
import { PromoBanner } from './promo-banner';
import { PromoGrid } from './promo-grid';
import { Quote } from './quote';
import { TwoColumnTextAndMedia } from './two-column-text-and-media';
import { VideoEmbed } from './video-embed';

/**
 * Event Detail Page (`event-detail-page`) Fields
 */
export interface EventDetailPageFields {
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
  description: EntryFields.Text;

  /**
   * Event Image / Social Media Image
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
   * Event Title
   *
   * - **localized**
   * - **control**: singleLine
   */
  eventTitle: EntryFields.Symbol;

  /**
   * Event Start Date
   *
   * - **control**: datePicker
   */
  startDate: EntryFields.Date;

  /**
   * Event End Date
   *
   * - **control**: datePicker
   */
  endDate: EntryFields.Date;

  /**
   * Price
   */
  price: EntryFields.Number;

  /**
   * Make price "Starting at"
   *
   * - **defaulted**
   * - **control**: boolean
   */
  startingAt: EntryFields.Boolean;

  /**
   * Event Type
   *
   * - **available values**:
   *   - In-Person
   *   - Online
   * - **control**: dropdown
   */
  eventType: 'In-Person' | 'Online';

  /**
   * Event Status
   *
   * - **available values**:
   *   - Sold Out
   *   - Coming soon
   *   - Cancelled
   * - **control**: dropdown
   */
  eventStatus?: 'Sold Out' | 'Coming soon' | 'Cancelled';

  /**
   * City
   *
   * - **control**: singleLine
   */
  city?: EntryFields.Symbol;

  /**
   * State
   *
   * - **control**: singleLine
   */
  state?: EntryFields.Symbol;

  /**
   * Venue Name
   *
   * - **control**: singleLine
   */
  venueName?: EntryFields.Symbol;

  /**
   * Registration URL
   *
   * - **pattern**: /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/
   * - **control**: singleLine
   */
  registrationUrl?: EntryFields.Symbol;

  /**
   * Contributors
   *
   * - **available content-types**:
   *   - contributor-page
   * - **control**: entryLinksEditor
   */
  contributors?: EntryLink<ContributorPage>[];

  /**
   * Hero
   *
   * - **available content-types**:
   *   - generic-image-hero
   * - **control**: entryLinkEditor
   */
  hero?: EntryLink<GenericImageHero>;

  /**
   * Page Blocks
   *
   * - **available content-types**:
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
   *   - product-slider
   *   - promo-banner
   *   - promo-grid
   *   - quote
   *   - two-column-text-and-media
   *   - video-embed
   * - **control**: entryLinksEditor
   */
  pageBlocks?: EntryLink<
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
   * - **control**: slugEditor
   */
  route?: EntryFields.Symbol;
}

export type EventDetailPageId = 'event-detail-page';

export interface EventDetailPageSys {
  sys: {
    contentType: {
      sys: {
        id: EventDetailPageId;
      };
    };
  };
}

/**
 * Event Detail Page (`event-detail-page`)
 *
 * Event page that holds the content of a single event.
 *
 * - **display field**: componentName
 */
export type EventDetailPage = Entry<EventDetailPageFields> & EventDetailPageSys;
