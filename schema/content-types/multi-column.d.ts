import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { MultiColumnTile } from './multi-column-tile';
import { Form } from './form';
import { ArticleDetailPage } from './articleDetailPage';
import { EventPriceTile } from './event-price-tile';

/**
 * Multi Column (`multi-column`) Fields
 */
export interface MultiColumnFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Enable Custom Link Tracking
   *
   * - **defaulted**
   * - **control**: boolean
   */
  enableTracking?: EntryFields.Boolean;

  /**
   * Custom ID
   *
   * - **pattern**: /^[A-Za-z]+[\w\-\:\.]*$/
   * - **control**: singleLine
   */
  customId?: EntryFields.Symbol;

  /**
   * Heading
   *
   * - **localized**
   * - **control**: singleLine
   */
  heading?: EntryFields.Symbol;

  /**
   * Align Heading Center
   *
   * - **defaulted**
   * - **control**: boolean
   */
  alignHeadingCenter?: EntryFields.Boolean;

  /**
   * Subtext
   *
   * - **localized**
   * - **control**: richTextEditor
   */
  subtext?: RT.Document;

  /**
   * Align Subtext Center
   *
   * - **defaulted**
   * - **control**: boolean
   */
  alignSubtextCenter?: EntryFields.Boolean;

  /**
   * Background Image
   *
   * - **control**: urlEditor
   */
  backgroundImage?: EntryFields.Symbol;

  /**
   * Background Color
   *
   * - **control**: singleLine
   */
  backgroundColor?: EntryFields.Symbol;

  /**
   * Text Color Light
   *
   * - **defaulted**
   * - **control**: boolean
   */
  textColorLight?: EntryFields.Boolean;

  /**
   * Text Small
   *
   * - **defaulted**
   * - **control**: boolean
   */
  textSmall?: EntryFields.Boolean;

  /**
   * Number Of Columns
   *
   * - **available values**:
   *   - 2
   *   - 3
   *   - 4
   *   - 5
   *   - 6
   * - **control**: dropdown
   */
  numberOfColumns: 2 | 3 | 4 | 5 | 6;

  /**
   * Tile Layout
   *
   * - **available values**:
   *   - Default Tile
   *   - Card Tile
   *   - Image & Text Side-by-side
   * - **default**: Default Tile
   * - **control**: dropdown
   */
  tileLayout?: 'Default Tile' | 'Card Tile' | 'Image & Text Side-by-side';

  /**
   * Media Sizing
   *
   * - **available values**:
   *   - fixedShort
   *   - fixedMedium
   *   - fixedTall
   *   - square
   *   - video
   * - **control**: dropdown
   */
  mediaSizing?: 'fixedShort' | 'fixedMedium' | 'fixedTall' | 'square' | 'video';

  /**
   * Turn OFF Rounded Corners on Media?
   *
   * - **defaulted**
   * - **control**: boolean
   */
  roundedImageOff?: EntryFields.Boolean;

  /**
   * Align Columns Center
   *
   * - **defaulted**
   * - **control**: boolean
   */
  alignColumnsCenter?: EntryFields.Boolean;

  /**
   * Align Column Content Center
   *
   * - **defaulted**
   * - **control**: boolean
   */
  alignCenter?: EntryFields.Boolean;

  /**
   * Grid Items
   *
   * - **available content-types**:
   *   - multi-column-tile
   *   - form
   *   - articleDetailPage
   *   - event-price-tile
   * - **control**: entryLinksEditor
   */
  gridItems?: EntryLink<
    MultiColumnTile | Form | ArticleDetailPage | EventPriceTile
  >[];
}

export type MultiColumnId = 'multi-column';

export interface MultiColumnSys {
  sys: {
    contentType: {
      sys: {
        id: MultiColumnId;
      };
    };
  };
}

/**
 * Multi Column (`multi-column`)
 *
 * A multi column container for displaying components in a grid
 *
 * - **display field**: componentName
 */
export type MultiColumn = Entry<MultiColumnFields> & MultiColumnSys;
