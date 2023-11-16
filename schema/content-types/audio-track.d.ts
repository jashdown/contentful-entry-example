import { EntryFields, Entry } from 'contentful';

/**
 * Audio Track (`audio-track`) Fields
 */
export interface AudioTrackFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Audio Track Title
   */
  trackTitle: EntryFields.Symbol;

  /**
   * Audio Track/File URL
   */
  fileUrl: EntryFields.Symbol;

  /**
   * Audio duration (minutes)
   *
   * - **control**: numberEditor
   */
  durationMinutes?: EntryFields.Integer;

  /**
   * Audio duration (seconds)
   *
   * - **control**: numberEditor
   */
  durationSeconds?: EntryFields.Integer;
}

export type AudioTrackId = 'audio-track';

export interface AudioTrackSys {
  sys: {
    contentType: {
      sys: {
        id: AudioTrackId;
      };
    };
  };
}

/**
 * Audio Track (`audio-track`)
 *
 * Audio track that can be added to the Audio Player.
 *
 * - **display field**: componentName
 */
export type AudioTrack = Entry<AudioTrackFields> & AudioTrackSys;
