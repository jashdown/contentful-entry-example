import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { Quote } from './quote';

/**
 * Product (`product`) Fields
 */
export interface ProductFields {
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
   * Custom ID
   *
   * - **pattern**: /^[A-Za-z]+[\w\-\:\.]*$/
   */
  customId?: EntryFields.Symbol;

  /**
   * Product Code
   *
   * - **pattern**: /^(([Pp]\d{9}|[Mm]\d{8})([-|.]?(\d{4}(-[A-z]{3}|-\d{2}(-\d{2})?)?)?))/
   */
  productCode: EntryFields.Symbol;

  /**
   * Quote
   *
   * - **available content-types**:
   *   - quote
   * - **size**: _ - 1
   */
  quote?: EntryLink<Quote>[];
}

export type ProductId = 'product';

export interface ProductSys {
  sys: {
    contentType: {
      sys: {
        id: ProductId;
      };
    };
  };
}

/**
 * Product (`product`)
 *
 * Product component
 *
 * - **display field**: componentName
 */
export type Product = Entry<ProductFields> & ProductSys;
