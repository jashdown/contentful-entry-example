import { EntryFields, Entry } from 'contentful';

/**
 * Two Column Text & Media > Media Embed (`two-column-text-and-media-embed`) Fields
 */
export interface TwoColumnTextAndMediaEmbedFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Title
   *
   * - **localized**
   */
  title?: EntryFields.Symbol;

  /**
   * Brightcove Video ID
   *
   * - **control**: singleLine
   */
  videoId?: EntryFields.Symbol;

  /**
   * Brightcove Playlist ID
   *
   * - **control**: singleLine
   */
  playlistId?: EntryFields.Symbol;

  /**
   * Embed Content
   *
   * - **localized**
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

export type TwoColumnTextAndMediaEmbedId = 'two-column-text-and-media-embed';

export interface TwoColumnTextAndMediaEmbedSys {
  sys: {
    contentType: {
      sys: {
        id: TwoColumnTextAndMediaEmbedId;
      };
    };
  };
}

/**
 * Two Column Text & Media > Media Embed (`two-column-text-and-media-embed`)
 *
 * A textarea that embeds media in the Two Column Text & Media component
 *
 * - **display field**: componentName
 */
export type TwoColumnTextAndMediaEmbed =
  Entry<TwoColumnTextAndMediaEmbedFields> & TwoColumnTextAndMediaEmbedSys;
