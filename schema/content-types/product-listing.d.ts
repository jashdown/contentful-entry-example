import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { QuarterSelect } from './quarterSelect';

/**
 * Product Listing (`product-listing`) Fields
 */
export interface ProductListingFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Listing Title
   *
   * - **localized**
   * - **control**: singleLine
   */
  title: EntryFields.Symbol;

  /**
   * Index Type
   *
   * - **available values**:
   *   - Products
   *   - Articles
   *   - Events
   * - **default**: Products
   * - **control**: dropdown
   */
  indexType: 'Products' | 'Articles' | 'Events';

  /**
   * Category Filter
   *
   * - **control**: singleLine
   */
  category?: EntryFields.Symbol;

  /**
   * Additional Filters
   *
   * - **control**: 7ek22esW2z9i1kdmevLJXd (app)
   */
  additionalFilters?: EntryFields.Object;

  /**
   * Logical operator for additional filter search
   *
   * - **defaulted**
   * - **control**: boolean
   */
  logicalOperator?: EntryFields.Boolean;

  /**
   * Default to Grid View or List View?
   *
   * - **defaulted**
   * - **control**: boolean
   */
  defaultToGrid: EntryFields.Boolean;

  /**
   * Sort by CHO Sort ID
   *
   * - **defaulted**
   * - **control**: boolean
   */
  sortByChoSortId: EntryFields.Boolean;

  /**
   * CHO Quarter
   *
   * - **control**: singleLine
   */
  choQuarter?: EntryFields.Symbol;

  /**
   * quarter-select
   *
   * - **available content-types**:
   *   - quarterSelect
   * - **control**: entryLinkEditor
   */
  quarterSelect?: EntryLink<QuarterSelect>;
}

export type ProductListingId = 'product-listing';

export interface ProductListingSys {
  sys: {
    contentType: {
      sys: {
        id: ProductListingId;
      };
    };
  };
}

/**
 * Product Listing (`product-listing`)
 *
 * A listing of products, articles or events from Algolia search
 *
 * - **display field**: componentName
 */
export type ProductListing = Entry<ProductListingFields> & ProductListingSys;
