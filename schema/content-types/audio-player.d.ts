import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { AudioTrack } from './audio-track';

/**
 * Audio Player (`audio-player`) Fields
 */
export interface AudioPlayerFields {
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
   * Player Title
   *
   * - **control**: singleLine
   */
  heading?: EntryFields.Symbol;

  /**
   * Audio Tracks
   *
   * - **available content-types**:
   *   - audio-track
   */
  tracks?: EntryLink<AudioTrack>[];

  /**
   * Set playlist max-height
   *
   * - **defaulted**
   */
  playlistMaxHeight?: EntryFields.Boolean;
}

export type AudioPlayerId = 'audio-player';

export interface AudioPlayerSys {
  sys: {
    contentType: {
      sys: {
        id: AudioPlayerId;
      };
    };
  };
}

/**
 * Audio Player (`audio-player`)
 *
 * An audio player with a playlist. Also embeddable in multicolumn or 2-column components.
 *
 * - **display field**: componentName
 */
export type AudioPlayer = Entry<AudioPlayerFields> & AudioPlayerSys;
