import { EntryFields, Entry } from 'contentful';

/**
 * Category Tile (`category-tile`) Fields
 */
export interface CategoryTileFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Title
   *
   * - **control**: singleLine
   */
  title: EntryFields.Symbol;

  /**
   * Image URL
   *
   * - **control**: urlEditor
   */
  imageUrl?: EntryFields.Symbol;

  /**
   * Image Alt Text
   *
   * - **localized**
   * - **control**: singleLine
   */
  imageAltText?: EntryFields.Symbol;

  /**
   * Link URL
   *
   * - **size**: 0 - 5000
   * - **control**: urlEditor
   */
  link: EntryFields.Text;

  /**
   * Link Url Target
   *
   * - **available values**:
   *   - _self
   *   - _blank
   * - **default**: _self
   * - **control**: dropdown
   */
  linkTarget?: '_self' | '_blank';

  /**
   * Background Color
   *
   * - **pattern**: /^#[0-9A-Fa-f]{6}$/
   * - **size**: 7 - 7
   * - **control**: singleLine
   */
  backgroundColor?: EntryFields.Symbol;

  /**
   * Make Text Light
   *
   * - **defaulted**
   * - **control**: boolean
   */
  textLight?: EntryFields.Boolean;
}

export type CategoryTileId = 'category-tile';

export interface CategoryTileSys {
  sys: {
    contentType: {
      sys: {
        id: CategoryTileId;
      };
    };
  };
}

/**
 * Category Tile (`category-tile`)
 *
 * Category Tile used for Featured Category Slider
 *
 * - **display field**: componentName
 */
export type CategoryTile = Entry<CategoryTileFields> & CategoryTileSys;
