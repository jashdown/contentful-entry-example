import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { ContributorPage } from './contributor-page';
import { ArticleTopicPage } from './articleTopicPage';
import { ArticleAuthorInformation } from './articleAuthorInformation';
import { ButtonEmbed } from './button-embed';
import { ContentEmbed } from './content-embed';
import { ExtendedRichText } from './extended-rich-text';
import { ImageEmbed } from './image-embed';
import { ProductSlider } from './product-slider';
import { Quote } from './quote';
import { RecommendedResource } from './recommendedResource';
import { TwoColumnTextAndMedia } from './two-column-text-and-media';
import { Download } from './download';

/**
 * Article Detail Page (`articleDetailPage`) Fields
 */
export interface ArticleDetailPageFields {
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
   * - **control**: singleLine
   */
  pageTitle: EntryFields.Symbol;

  /**
   * Meta Description
   *
   * - **localized**
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
   * Article Title
   *
   * - **localized**
   * - **control**: singleLine
   */
  articleTitle: EntryFields.Symbol;

  /**
   * Sub Title
   */
  subtitle?: EntryFields.Symbol;

  /**
   * Contributors
   *
   * - **available content-types**:
   *   - contributor-page
   * - **control**: entryLinksEditor
   */
  contributors?: EntryLink<ContributorPage>[];

  /**
   * Topics
   *
   * - **available content-types**:
   *   - articleTopicPage
   * - **control**: entryLinksEditor
   */
  topics?: EntryLink<ArticleTopicPage>[];

  /**
   * Hero Image
   *
   * - **pattern**: /^(ht|f)tps?://\w+([\.\-\w]+)?\.([a-z]{2,4}|travel)(:\d{2,5})?(/.*)?$/i
   * - **control**: urlEditor
   */
  heroImage?: EntryFields.Symbol;

  /**
   * Publication Date
   *
   * - **control**: datePicker
   */
  publicationDate: EntryFields.Date;

  /**
   * Page Blocks
   *
   * - **available content-types**:
   *   - articleAuthorInformation
   *   - button-embed
   *   - content-embed
   *   - extended-rich-text
   *   - image-embed
   *   - product-slider
   *   - quote
   *   - recommendedResource
   *   - two-column-text-and-media
   * - **control**: entryLinksEditor
   */
  pageBlocks?: EntryLink<
    | ArticleAuthorInformation
    | ButtonEmbed
    | ContentEmbed
    | ExtendedRichText
    | ImageEmbed
    | ProductSlider
    | Quote
    | RecommendedResource
    | TwoColumnTextAndMedia
  >[];

  /**
   * References
   *
   * - **localized**
   * - **control**: richTextEditor
   */
  references?: RT.Document;

  /**
   * Downloads
   *
   * - **available content-types**:
   *   - download
   * - **control**: entryLinksEditor
   */
  downloads?: EntryLink<Download>[];

  /**
   * Additional Promoted Products
   *
   * - **control**: tagEditor
   */
  additionalPromotedProducts?: EntryFields.Symbol[];

  /**
   * Route
   *
   * - **unique**
   * - **pattern**: /^(\/|(\/[\w\-.~!$&'()*+,;=:@%]+)+)$/i
   * - **control**: slugEditor
   */
  route: EntryFields.Symbol;
}

export type ArticleDetailPageId = 'articleDetailPage';

export interface ArticleDetailPageSys {
  sys: {
    contentType: {
      sys: {
        id: ArticleDetailPageId;
      };
    };
  };
}

/**
 * Article Detail Page (`articleDetailPage`)
 *
 * Article page that holds the content of a single article.
 *
 * - **display field**: componentName
 */
export type ArticleDetailPage = Entry<ArticleDetailPageFields> &
  ArticleDetailPageSys;
