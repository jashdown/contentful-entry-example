import { EntryFields, Entry } from 'contentful';

/**
 * Bundled Product Item (`bundled-product-item`) Fields
 */
export interface BundledProductItemFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Product sku code
   *
   * - **control**: singleLine
   */
  skuCode: EntryFields.Symbol;

  /**
   * Item Quantity
   */
  quantity: EntryFields.Integer;

  /**
   * Hide Quantity
   *
   * - **defaulted**
   */
  hideQuantity?: EntryFields.Boolean;

  /**
   * Product Title (override)
   *
   * - **localized**
   */
  title?: EntryFields.Symbol;

  /**
   * Product Image URL (override)
   *
   * - **control**: urlEditor
   */
  imageUrl?: EntryFields.Symbol;

  /**
   * Image alt
   */
  imageAlt?: EntryFields.Symbol;

  /**
   * Link URL (override)
   *
   * - **control**: urlEditor
   */
  link?: EntryFields.Symbol;
}

export type BundledProductItemId = 'bundled-product-item';

export interface BundledProductItemSys {
  sys: {
    contentType: {
      sys: {
        id: BundledProductItemId;
      };
    };
  };
}

/**
 * Bundled Product Item (`bundled-product-item`)
 *
 * Product Item to be used in the Add Items to Cart Bundle
 *
 * - **display field**: componentName
 */
export type BundledProductItem = Entry<BundledProductItemFields> &
  BundledProductItemSys;
