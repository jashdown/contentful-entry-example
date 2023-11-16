import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { ImageEmbed } from './image-embed';
import { ButtonEmbed } from './button-embed';
import { ArticleDetailPage } from './articleDetailPage';
import { CustomSlider } from './custom-slider';

/**
 * Article Landing Page (`articleLandingPage`) Fields
 */
export interface ArticleLandingPageFields {
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
   * Hero Image(s)
   *
   * - **available content-types**:
   *   - image-embed
   * - **size**: 1 - 2
   */
  heroImages: EntryLink<ImageEmbed>[];

  /**
   * Header Title
   *
   * - **control**: singleLine
   */
  headerTitle: EntryFields.Symbol;

  /**
   * Button
   *
   * - **available content-types**:
   *   - button-embed
   * - **control**: entryLinkEditor
   */
  button: EntryLink<ButtonEmbed>;

  /**
   * Trending Articles Slider
   *
   * - **available content-types**:
   *   - articleDetailPage
   * - **control**: entryLinksEditor
   */
  trendingArticles: EntryLink<ArticleDetailPage>[];

  /**
   * Topics Section
   *
   * - **available content-types**:
   *   - custom-slider
   * - **control**: entryLinkEditor
   */
  topicsSection: EntryLink<CustomSlider>;

  /**
   * Sermons Slider
   *
   * - **available content-types**:
   *   - articleDetailPage
   * - **control**: entryLinksEditor
   */
  sermonsSlider: EntryLink<ArticleDetailPage>[];
}

export type ArticleLandingPageId = 'articleLandingPage';

export interface ArticleLandingPageSys {
  sys: {
    contentType: {
      sys: {
        id: ArticleLandingPageId;
      };
    };
  };
}

/**
 * Article Landing Page (`articleLandingPage`)
 *
 * Main landing page for articles.
 *
 * - **display field**: componentName
 */
export type ArticleLandingPage = Entry<ArticleLandingPageFields> &
  ArticleLandingPageSys;
