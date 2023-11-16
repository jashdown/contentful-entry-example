import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';

/**
 * Rich Text (`rich-text`) Fields
 */
export interface RichTextFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Enable Custom Link Tracking
   *
   * - **defaulted**
   */
  enableTracking?: EntryFields.Boolean;

  /**
   * Name
   *
   * - **localized**
   */
  name?: EntryFields.Symbol;

  /**
   * Text
   *
   * - **localized**
   */
  text: RT.Document;
}

export type RichTextId = 'rich-text';

export interface RichTextSys {
  sys: {
    contentType: {
      sys: {
        id: RichTextId;
      };
    };
  };
}

/**
 * Rich Text (`rich-text`)
 *
 * A text editor for generating rich content
 *
 * - **display field**: componentName
 */
export type RichText = Entry<RichTextFields> & RichTextSys;
