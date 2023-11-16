import { EntryFields, Entry } from 'contentful';

/**
 * Shopping Link (`shopping-for-link`) Fields
 */
export interface ShoppingForLinkFields {
  /**
   * Component Name
   */
  componentName?: EntryFields.Symbol;

  /**
   * Image URL
   *
   * - **control**: urlEditor
   */
  imageURL?: EntryFields.Symbol;

  /**
   * Link Text
   *
   * - **localized**
   */
  text?: EntryFields.Symbol;

  /**
   * Destination URL
   */
  destinationURL?: EntryFields.Symbol;
}

export type ShoppingForLinkId = 'shopping-for-link';

export interface ShoppingForLinkSys {
  sys: {
    contentType: {
      sys: {
        id: ShoppingForLinkId;
      };
    };
  };
}

/**
 * Shopping Link (`shopping-for-link`)
 *
 * Link for shopping option component
 *
 * - **display field**: componentName
 */
export type ShoppingForLink = Entry<ShoppingForLinkFields> & ShoppingForLinkSys;
