import { EntryFields, Entry } from 'contentful';

/**
 * Quote (`quote`) Fields
 */
export interface QuoteFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Enable Tracking
   *
   * - **defaulted**
   */
  enableTracking?: EntryFields.Boolean;

  /**
   * Custom ID
   *
   * - **pattern**: /^[A-Za-z]+[\w\-\:\.]*$/
   */
  customId?: EntryFields.Symbol;

  /**
   * Quoted Text
   */
  quotedText: EntryFields.Text;

  /**
   * Quoted Source
   *
   * - **control**: singleLine
   */
  quotedSource?: EntryFields.Symbol;

  /**
   * Quoted Context
   *
   * - **control**: singleLine
   */
  quotedContext?: EntryFields.Symbol;
}

export type QuoteId = 'quote';

export interface QuoteSys {
  sys: {
    contentType: {
      sys: {
        id: QuoteId;
      };
    };
  };
}

/**
 * Quote (`quote`)
 *
 * Quote component
 *
 * - **display field**: componentName
 */
export type Quote = Entry<QuoteFields> & QuoteSys;
