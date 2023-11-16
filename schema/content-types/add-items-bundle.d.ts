import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { BundledProductItem } from './bundled-product-item';

/**
 * Add Items Bundle (`add-items-bundle`) Fields
 */
export interface AddItemsBundleFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Enable Tracking
   *
   * - **defaulted**
   */
  enableTracking?: EntryFields.Boolean;

  /**
   * Bundle Title
   *
   * - **localized**
   */
  bundledTitle?: EntryFields.Symbol;

  /**
   * Bundle Description
   *
   * - **localized**
   */
  bundledDescription?: RT.Document;

  /**
   * Bundle Price
   */
  bundledPrice: EntryFields.Number;

  /**
   * Regular Price
   */
  regularPrice?: EntryFields.Number;

  /**
   * Number Of Columns
   *
   * - **available values**:
   *   - 2
   *   - 3
   *   - 4
   *   - 5
   *   - 6
   * - **defaulted**
   */
  numberOfColumns: 2 | 3 | 4 | 5 | 6;

  /**
   * Bundled Product Items
   *
   * - **available content-types**:
   *   - bundled-product-item
   */
  products: EntryLink<BundledProductItem>[];

  /**
   * Content Alignment
   *
   * - **available values**:
   *   - left
   *   - center
   *   - right
   * - **default**: left
   * - **pattern**: /^(left|center|right)$/
   */
  textAlign: 'left' | 'center' | 'right';

  /**
   * Background Color
   *
   * - **default**: #FFFFFF
   * - **pattern**: /^#[0-9A-Fa-f]{6}$/
   * - **size**: 7 - 7
   */
  backgroundColor: EntryFields.Symbol;
}

export type AddItemsBundleId = 'add-items-bundle';

export interface AddItemsBundleSys {
  sys: {
    contentType: {
      sys: {
        id: AddItemsBundleId;
      };
    };
  };
}

/**
 * Add Items Bundle (`add-items-bundle`)
 *
 * Component of product items that are bundled together.
 *
 * - **display field**: componentName
 */
export type AddItemsBundle = Entry<AddItemsBundleFields> & AddItemsBundleSys;
