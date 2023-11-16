import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { ShoppingForOption } from './shopping-for-option';

/**
 * Shopping For (`shopping-for`) Fields
 */
export interface ShoppingForFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Enable Tracking
   */
  enableTracking?: EntryFields.Boolean;

  /**
   * Custom ID
   *
   * - **pattern**: /^[A-Za-z]+[\w\-\:\.]*$/
   */
  customId?: EntryFields.Symbol;

  /**
   * Header Text
   *
   * - **localized**
   */
  headerText: EntryFields.Symbol;

  /**
   * Subheader Text
   *
   * - **localized**
   */
  subheaderText?: EntryFields.Symbol;

  /**
   * Shopping Options
   *
   * - **available content-types**:
   *   - shopping-for-option
   */
  shoppingOptions?: EntryLink<ShoppingForOption>[];
}

export type ShoppingForId = 'shopping-for';

export interface ShoppingForSys {
  sys: {
    contentType: {
      sys: {
        id: ShoppingForId;
      };
    };
  };
}

/**
 * Shopping For (`shopping-for`)
 *
 * Tab component to show multiple options
 *
 * - **display field**: componentName
 */
export type ShoppingFor = Entry<ShoppingForFields> & ShoppingForSys;
