import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';

/**
 * Extended Rich Text (`extended-rich-text`) Fields
 */
export interface ExtendedRichTextFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Enable Custom Link Tracking
   *
   * - **defaulted**
   */
  enableTracking: EntryFields.Boolean;

  /**
   * Custom ID
   *
   * - **pattern**: /^[A-Za-z]+[\w\-\:\.]*$/
   */
  customId?: EntryFields.Symbol;

  /**
   * Content
   *
   * - **localized**
   */
  content: RT.Document;

  /**
   * Content Alignment
   *
   * - **available values**:
   *   - left
   *   - center
   *   - right
   * - **default**: left
   * - **pattern**: /^(left|center|right)$/
   */
  textAlign: 'left' | 'center' | 'right';

  /**
   * Smaller Max-Width
   *
   * - **defaulted**
   * - **control**: boolean
   */
  maxWidthSmall?: EntryFields.Boolean;

  /**
   * Background Color
   *
   * - **defaulted**
   * - **pattern**: /^#[0-9A-Fa-f]{6}$/
   * - **size**: 7 - 7
   */
  backgroundColor?: EntryFields.Symbol;

  /**
   * Light Text
   *
   * - **defaulted**
   */
  lightText?: EntryFields.Boolean;

  /**
   * Full Width Background?
   *
   * - **defaulted**
   */
  fullWidthBg?: EntryFields.Boolean;
}

export type ExtendedRichTextId = 'extended-rich-text';

export interface ExtendedRichTextSys {
  sys: {
    contentType: {
      sys: {
        id: ExtendedRichTextId;
      };
    };
  };
}

/**
 * Extended Rich Text (`extended-rich-text`)
 *
 * Extended text editor for generating rich content
 *
 * - **display field**: componentName
 */
export type ExtendedRichText = Entry<ExtendedRichTextFields> &
  ExtendedRichTextSys;
