import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { ArticleTopicPage } from './articleTopicPage';

/**
 * Article Topic Page (`articleTopicPage`) Fields
 */
export interface ArticleTopicPageFields {
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
   * Parent Topic
   *
   * - **available content-types**:
   *   - articleTopicPage
   * - **control**: entryLinkEditor
   */
  parentTopic?: EntryLink<ArticleTopicPage>;

  /**
   * Topic Title
   *
   * - **control**: singleLine
   */
  topicTitle: EntryFields.Symbol;

  /**
   * Topic Description
   *
   * - **control**: multipleLine
   */
  topicDescription?: EntryFields.Text;

  /**
   * Resources
   *
   * - **control**: tagEditor
   */
  resources?: EntryFields.Symbol[];

  /**
   * Route
   *
   * - **unique**
   * - **pattern**: /^(\/|(\/[\w\-.~!$&'()*+,;=:@%]+)+)$/i
   * - **control**: slugEditor
   */
  route?: EntryFields.Symbol;
}

export type ArticleTopicPageId = 'articleTopicPage';

export interface ArticleTopicPageSys {
  sys: {
    contentType: {
      sys: {
        id: ArticleTopicPageId;
      };
    };
  };
}

/**
 * Article Topic Page (`articleTopicPage`)
 *
 * Article Topics/Categories
 *
 * - **display field**: componentName
 */
export type ArticleTopicPage = Entry<ArticleTopicPageFields> &
  ArticleTopicPageSys;
