import { EntryFields, Entry } from 'contentful';

/**
 * Video Hero (`video-hero`) Fields
 */
export interface VideoHeroFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Video ID
   */
  videoId?: EntryFields.Symbol;
}

export type VideoHeroId = 'video-hero';

export interface VideoHeroSys {
  sys: {
    contentType: {
      sys: {
        id: VideoHeroId;
      };
    };
  };
}

/**
 * Video Hero (`video-hero`)
 *
 * A large video with overlaying text displayed on the home page
 *
 * - **display field**: componentName
 */
export type VideoHero = Entry<VideoHeroFields> & VideoHeroSys;
