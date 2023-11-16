import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';

/**
 * Article Author Information (`articleAuthorInformation`) Fields
 */
export interface ArticleAuthorInformationFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Author Name
   *
   * - **control**: singleLine
   */
  authorName: EntryFields.Symbol;

  /**
   * Author Information
   *
   * - **localized**
   * - **control**: richTextEditor
   */
  authorInformation: RT.Document;
}

export type ArticleAuthorInformationId = 'articleAuthorInformation';

export interface ArticleAuthorInformationSys {
  sys: {
    contentType: {
      sys: {
        id: ArticleAuthorInformationId;
      };
    };
  };
}

/**
 * Article Author Information (`articleAuthorInformation`)
 *
 * - **display field**: componentName
 */
export type ArticleAuthorInformation = Entry<ArticleAuthorInformationFields> &
  ArticleAuthorInformationSys;
