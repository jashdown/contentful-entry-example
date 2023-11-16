import { EntryFields, Entry } from 'contentful';

/**
 * Cart Add On Offers (`cart-offers`) Fields
 */
export interface CartOffersFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Header Text
   *
   * - **localized**
   */
  headerText: EntryFields.Symbol;

  /**
   * Subheading Text
   *
   * - **localized**
   */
  subheadingText?: EntryFields.Symbol;

  /**
   * Product IDs
   */
  productIDs?: EntryFields.Symbol[];

  /**
   * enableTracking
   */
  enableTracking?: EntryFields.Boolean;
}

export type CartOffersId = 'cart-offers';

export interface CartOffersSys {
  sys: {
    contentType: {
      sys: {
        id: CartOffersId;
      };
    };
  };
}

/**
 * Cart Add On Offers (`cart-offers`)
 *
 * A selection of add on products
 *
 * - **display field**: componentName
 */
export type CartOffers = Entry<CartOffersFields> & CartOffersSys;
