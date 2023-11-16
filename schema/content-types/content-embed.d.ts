import { EntryFields, Entry } from 'contentful';

/**
 * Content Embed (`content-embed`) Fields
 */
export interface ContentEmbedFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Custom ID
   *
   * - **pattern**: /^[A-Za-z]+[\w\-\:\.]*$/
   */
  customId?: EntryFields.Symbol;

  /**
   * Embed Content
   *
   * - **control**: multipleLine
   */
  embedContent?: EntryFields.Text;

  /**
   * Turn OFF Rounded Corners?
   *
   * - **defaulted**
   * - **control**: boolean
   */
  roundedCornersOff?: EntryFields.Boolean;
}

export type ContentEmbedId = 'content-embed';

export interface ContentEmbedSys {
  sys: {
    contentType: {
      sys: {
        id: ContentEmbedId;
      };
    };
  };
}

/**
 * Content Embed (`content-embed`)
 *
 * A component to embed single videos or a video player with a playlist directly into a page
 *
 * - **display field**: componentName
 */
export type ContentEmbed = Entry<ContentEmbedFields> & ContentEmbedSys;
