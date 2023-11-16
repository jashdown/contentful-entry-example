import { EntryFields, Entry } from 'contentful';

/**
 * Article Block Quote (`articleBlockQuote`) Fields
 */
export interface ArticleBlockQuoteFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Quote Text
   *
   * - **localized**
   * - **control**: multipleLine
   */
  quoteText: EntryFields.Text;

  /**
   * Quote Author
   *
   * - **control**: singleLine
   */
  quoteAuthor?: EntryFields.Symbol;

  /**
   * Source Title
   *
   * - **localized**
   * - **control**: singleLine
   */
  sourceTitle?: EntryFields.Symbol;

  /**
   * Alignment
   *
   * - **available values**:
   *   - Default
   *   - Left
   *   - Right
   * - **default**: Default
   * - **control**: dropdown
   */
  alignment?: 'Default' | 'Left' | 'Right';

  /**
   * Show Social Share
   *
   * - **control**: boolean
   */
  showSocialShare?: EntryFields.Boolean;
}

export type ArticleBlockQuoteId = 'articleBlockQuote';

export interface ArticleBlockQuoteSys {
  sys: {
    contentType: {
      sys: {
        id: ArticleBlockQuoteId;
      };
    };
  };
}

/**
 * Article Block Quote (`articleBlockQuote`)
 *
 * - **display field**: componentName
 */
export type ArticleBlockQuote = Entry<ArticleBlockQuoteFields> &
  ArticleBlockQuoteSys;
