import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { CategoryTile } from './category-tile';

/**
 * Category Grid (`category-grid`) Fields
 */
export interface CategoryGridFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Enable Tracking
   *
   * - **defaulted**
   * - **control**: boolean
   */
  enableTracking?: EntryFields.Boolean;

  /**
   * Center Align Tiles
   *
   * - **defaulted**
   * - **control**: boolean
   */
  centerTiles?: EntryFields.Boolean;

  /**
   * Category Tiles
   *
   * - **available content-types**:
   *   - category-tile
   * - **control**: entryLinksEditor
   */
  gridItems?: EntryLink<CategoryTile>[];
}

export type CategoryGridId = 'category-grid';

export interface CategoryGridSys {
  sys: {
    contentType: {
      sys: {
        id: CategoryGridId;
      };
    };
  };
}

/**
 * Category Grid (`category-grid`)
 *
 * Category Grid that holds caterogry tiles
 *
 * - **display field**: componentName
 */
export type CategoryGrid = Entry<CategoryGridFields> & CategoryGridSys;
