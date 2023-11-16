import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';

/**
 * Recommended Resource (`recommendedResource`) Fields
 */
export interface RecommendedResourceFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Image
   *
   * - **pattern**: /^(ht|f)tps?://\w+([\.\-\w]+)?\.([a-z]{2,4}|travel)(:\d{2,5})?(/.*)?$/i
   * - **control**: urlEditor
   */
  image?: EntryFields.Symbol;

  /**
   * Link
   *
   * - **control**: urlEditor
   */
  link?: EntryFields.Symbol;

  /**
   * Text
   *
   * - **localized**
   * - **control**: richTextEditor
   */
  text?: RT.Document;

  /**
   * Background Color
   *
   * - **pattern**: /^#[0-9A-Fa-f]{6}$/
   * - **size**: 7 - 7
   */
  backgroundColor?: EntryFields.Symbol;
}

export type RecommendedResourceId = 'recommendedResource';

export interface RecommendedResourceSys {
  sys: {
    contentType: {
      sys: {
        id: RecommendedResourceId;
      };
    };
  };
}

/**
 * Recommended Resource (`recommendedResource`)
 *
 * - **display field**: componentName
 */
export type RecommendedResource = Entry<RecommendedResourceFields> &
  RecommendedResourceSys;
