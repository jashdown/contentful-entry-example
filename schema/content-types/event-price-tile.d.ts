import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';

/**
 * Event Price Tile (`event-price-tile`) Fields
 */
export interface EventPriceTileFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Title
   *
   * - **localized**
   * - **control**: singleLine
   */
  title?: EntryFields.Symbol;

  /**
   * Price
   *
   * - **control**: numberEditor
   */
  price?: EntryFields.Number;

  /**
   * Price "per" label
   *
   * - **localized**
   * - **default**: per ticket
   * - **control**: singleLine
   */
  pricePerLabel?: EntryFields.Symbol;

  /**
   * Price Details
   *
   * - **localized**
   * - **control**: richTextEditor
   */
  priceDetails?: RT.Document;

  /**
   * Button text
   *
   * - **localized**
   * - **default**: Register Now
   * - **control**: singleLine
   */
  buttonText?: EntryFields.Symbol;

  /**
   * Registration URL
   *
   * - **control**: urlEditor
   */
  registrationUrl?: EntryFields.Symbol;

  /**
   * Registration Url Target
   *
   * - **available values**:
   *   - _self
   *   - _blank
   * - **default**: _blank
   * - **control**: dropdown
   */
  registrationUrlTarget?: '_self' | '_blank';

  /**
   * Item Number
   *
   * - **control**: singleLine
   */
  itemNumber?: EntryFields.Symbol;
}

export type EventPriceTileId = 'event-price-tile';

export interface EventPriceTileSys {
  sys: {
    contentType: {
      sys: {
        id: EventPriceTileId;
      };
    };
  };
}

/**
 * Event Price Tile (`event-price-tile`)
 *
 * Component to add event pricing details with a registration button.
 *
 * - **display field**: componentName
 */
export type EventPriceTile = Entry<EventPriceTileFields> & EventPriceTileSys;
