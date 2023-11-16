import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { TwoColumnTextAndMediaEmbed } from './two-column-text-and-media-embed';
import { TwoColumnTextAndMediaImageSlider } from './two-column-text-and-media-image-slider';
import { TwoColumnTextAndMediaImage } from './two-column-text-and-media-image';
import { AudioPlayer } from './audio-player';
import { ButtonEmbed } from './button-embed';

/**
 * Two Column Text & Media (`two-column-text-and-media`) Fields
 */
export interface TwoColumnTextAndMediaFields {
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
   * Custom ID
   *
   * - **pattern**: /^[A-Za-z]+[\w\-\:\.]*$/
   */
  customId?: EntryFields.Symbol;

  /**
   * Heading
   *
   * - **localized**
   */
  heading?: EntryFields.Symbol;

  /**
   * Align Heading Left
   *
   * - **defaulted**
   * - **control**: boolean
   */
  alignHeadingLeft?: EntryFields.Boolean;

  /**
   * Body Text
   *
   * - **localized**
   */
  bodyText?: RT.Document;

  /**
   * Fixed Background Image
   *
   * - **defaulted**
   * - **control**: boolean
   */
  fixedBackground?: EntryFields.Boolean;

  /**
   * Background Image
   *
   * - **pattern**: /(http(s)?):\/\/(www.)?[a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/ig
   * - **control**: urlEditor
   */
  backgroundImage?: EntryFields.Symbol;

  /**
   * Background Color
   */
  backgroundColor?: EntryFields.Symbol;

  /**
   * Make Text Color Light
   *
   * - **defaulted**
   * - **control**: boolean
   */
  textColorLight?: EntryFields.Boolean;

  /**
   * Media Column Size
   *
   * - **available values**:
   *   - small
   *   - medium
   *   - large
   * - **default**: large
   */
  mediaColumnSize?: 'small' | 'medium' | 'large';

  /**
   * Swap Columns
   *
   * - **defaulted**
   * - **control**: boolean
   */
  swapColumns?: EntryFields.Boolean;

  /**
   * Media Content
   *
   * - **available content-types**:
   *   - two-column-text-and-media-embed
   *   - two-column-text-and-media-image-slider
   *   - two-column-text-and-media-image
   *   - audio-player
   */
  mediaContent?: EntryLink<
    | TwoColumnTextAndMediaEmbed
    | TwoColumnTextAndMediaImageSlider
    | TwoColumnTextAndMediaImage
    | AudioPlayer
  >;

  /**
   * Text Column Buttons
   *
   * - **available content-types**:
   *   - button-embed
   */
  buttons?: EntryLink<ButtonEmbed>[];
}

export type TwoColumnTextAndMediaId = 'two-column-text-and-media';

export interface TwoColumnTextAndMediaSys {
  sys: {
    contentType: {
      sys: {
        id: TwoColumnTextAndMediaId;
      };
    };
  };
}

/**
 * Two Column Text & Media (`two-column-text-and-media`)
 *
 * A 2-column container for text and media components
 *
 * - **display field**: componentName
 */
export type TwoColumnTextAndMedia = Entry<TwoColumnTextAndMediaFields> &
  TwoColumnTextAndMediaSys;
