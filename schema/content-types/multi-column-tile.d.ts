import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { ButtonEmbed } from './button-embed';

/**
 * Multi Column > Tile (`multi-column-tile`) Fields
 */
export interface MultiColumnTileFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Column Heading
   */
  columnHeading?: EntryFields.Symbol;

  /**
   * Light Text (Card Tile Only)
   *
   * - **defaulted**
   * - **control**: boolean
   */
  textLight?: EntryFields.Boolean;

  /**
   * Text Background Color (Card Tile Only)
   *
   * - **pattern**: /^#[0-9A-Fa-f]{6}$/
   * - **size**: 7 - 7
   */
  textBackgroundColor?: EntryFields.Symbol;

  /**
   * Column Text
   */
  columnText?: RT.Document;

  /**
   * Image URL
   *
   * - **control**: urlEditor
   */
  imageURL?: EntryFields.Symbol;

  /**
   * Link URL for Image
   *
   * - **size**: 0 - 5000
   * - **control**: urlEditor
   */
  imageLinkURL?: EntryFields.Text;

  /**
   * Link URL Target for Image
   *
   * - **available values**:
   *   - _self
   *   - _blank
   * - **default**: _self
   */
  imageLinkTarget?: '_self' | '_blank';

  /**
   * Image Link Title
   *
   * - **control**: singleLine
   */
  imageLinkTitle?: EntryFields.Symbol;

  /**
   * Image Alt Text
   */
  imageAltText?: EntryFields.Symbol;

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
   * - **control**: multipleLine
   */
  embedScriptContent?: EntryFields.Text;

  /**
   * Buttons
   *
   * - **available content-types**:
   *   - button-embed
   * - **control**: entryLinksEditor
   */
  buttons?: EntryLink<ButtonEmbed>[];
}

export type MultiColumnTileId = 'multi-column-tile';

export interface MultiColumnTileSys {
  sys: {
    contentType: {
      sys: {
        id: MultiColumnTileId;
      };
    };
  };
}

/**
 * Multi Column > Tile (`multi-column-tile`)
 *
 * A tile of an image or media embed to display in the multi column grid
 *
 * - **display field**: componentName
 */
export type MultiColumnTile = Entry<MultiColumnTileFields> & MultiColumnTileSys;
