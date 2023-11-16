import { EntryFields, Entry } from 'contentful';

/**
 * Authorized Dealer (`authorized-dealer`) Fields
 */
export interface AuthorizedDealerFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Store Name
   *
   * - **control**: singleLine
   */
  storeName: EntryFields.Symbol;

  /**
   * Latitude and Longitude
   *
   * - **control**: locationEditor
   */
  latitudeAndLongitude: EntryFields.Location;

  /**
   * Phone Number
   *
   * - **control**: singleLine
   */
  phone?: EntryFields.Symbol;

  /**
   * Address (line 1)
   *
   * - **control**: singleLine
   */
  address1: EntryFields.Symbol;

  /**
   * Address (line 2)
   *
   * - **control**: singleLine
   */
  address2?: EntryFields.Symbol;

  /**
   * Address (line 3)
   *
   * - **control**: singleLine
   */
  address3?: EntryFields.Symbol;

  /**
   * City
   *
   * - **control**: singleLine
   */
  city: EntryFields.Symbol;

  /**
   * State/Territory
   *
   * - **control**: singleLine
   */
  state?: EntryFields.Symbol;

  /**
   * Postal Code
   *
   * - **control**: singleLine
   */
  zip?: EntryFields.Symbol;

  /**
   * Country
   *
   * - **default**: United States of America (the)
   * - **control**: singleLine
   */
  country: EntryFields.Symbol;
}

export type AuthorizedDealerId = 'authorized-dealer';

export interface AuthorizedDealerSys {
  sys: {
    contentType: {
      sys: {
        id: AuthorizedDealerId;
      };
    };
  };
}

/**
 * Authorized Dealer (`authorized-dealer`)
 *
 * Name, location, and contact of dealer authorized to sell Lifeway products
 *
 * - **display field**: componentName
 */
export type AuthorizedDealer = Entry<AuthorizedDealerFields> &
  AuthorizedDealerSys;
