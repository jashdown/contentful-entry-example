import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { ShoppingForLink } from './shopping-for-link';

/**
 * Shopping For Option (`shopping-for-option`) Fields
 */
export interface ShoppingForOptionFields {
  /**
   * Component Name
   */
  componentName?: EntryFields.Symbol;

  /**
   * Title
   *
   * - **localized**
   */
  title: EntryFields.Symbol;

  /**
   * Links
   *
   * - **available content-types**:
   *   - shopping-for-link
   * - **size**: 0 - 4
   */
  links?: EntryLink<ShoppingForLink>[];
}

export type ShoppingForOptionId = 'shopping-for-option';

export interface ShoppingForOptionSys {
  sys: {
    contentType: {
      sys: {
        id: ShoppingForOptionId;
      };
    };
  };
}

/**
 * Shopping For Option (`shopping-for-option`)
 *
 * Option for shopping for component
 *
 * - **display field**: componentName
 */
export type ShoppingForOption = Entry<ShoppingForOptionFields> &
  ShoppingForOptionSys;
