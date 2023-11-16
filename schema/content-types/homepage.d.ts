import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { ImageHero } from './image-hero';
import { VideoHero } from './video-hero';
import { PromoBanner } from './promo-banner';
import { PromoGrid } from './promo-grid';
import { MultiColumn } from './multi-column';
import { ProductSlider } from './product-slider';
import { TwoColumnTextAndMedia } from './two-column-text-and-media';
import { RichText } from './rich-text';
import { ShoppingFor } from './shopping-for';
import { FeaturedCategories } from './featured-categories';

/**
 * Home Page (`homepage`) Fields
 */
export interface HomepageFields {
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
   * Google Site Verification Meta Tag
   *
   * - **control**: multipleLine
   */
  googleSiteVerificationMetaTag?: EntryFields.Text;

  /**
   * Logged In Hero
   *
   * - **available content-types**:
   *   - image-hero
   *   - video-hero
   */
  loggedInHero?: EntryLink<ImageHero | VideoHero>;

  /**
   * Logged Out Hero
   *
   * - **available content-types**:
   *   - image-hero
   *   - video-hero
   */
  loggedOutHero?: EntryLink<ImageHero | VideoHero>;

  /**
   * Page Blocks
   *
   * - **available content-types**:
   *   - promo-banner
   *   - promo-grid
   *   - multi-column
   *   - product-slider
   *   - two-column-text-and-media
   *   - rich-text
   *   - shopping-for
   *   - featured-categories
   */
  pageBlocks?: EntryLink<
    | PromoBanner
    | PromoGrid
    | MultiColumn
    | ProductSlider
    | TwoColumnTextAndMedia
    | RichText
    | ShoppingFor
    | FeaturedCategories
  >[];
}

export type HomepageId = 'homepage';

export interface HomepageSys {
  sys: {
    contentType: {
      sys: {
        id: HomepageId;
      };
    };
  };
}

/**
 * Home Page (`homepage`)
 *
 * Home Page content fields
 *
 * - **display field**: componentName
 */
export type Homepage = Entry<HomepageFields> & HomepageSys;
