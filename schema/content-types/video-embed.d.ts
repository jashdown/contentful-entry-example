import { EntryFields, Entry } from 'contentful';

/**
 * Video (`video-embed`) Fields
 */
export interface VideoEmbedFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Custom ID
   *
   * - **pattern**: /^[A-Za-z]+[\w\-\:\.]*$/
   * - **control**: singleLine
   */
  customId?: EntryFields.Symbol;

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
   * Turn OFF Rounded Corners?
   *
   * - **defaulted**
   * - **control**: boolean
   */
  roundedCornersOff?: EntryFields.Boolean;
}

export type VideoEmbedId = 'video-embed';

export interface VideoEmbedSys {
  sys: {
    contentType: {
      sys: {
        id: VideoEmbedId;
      };
    };
  };
}

/**
 * Video (`video-embed`)
 *
 * A component to embed single videos or a video player with a playlist directly into a page
 *
 * - **display field**: componentName
 */
export type VideoEmbed = Entry<VideoEmbedFields> & VideoEmbedSys;
