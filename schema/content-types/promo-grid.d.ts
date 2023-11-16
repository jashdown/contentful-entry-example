import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { ImageWithText } from './image-with-text';

/**
 * Promo Grid (`promo-grid`) Fields
 */
export interface PromoGridFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Enable Custom Link Tracking
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
   * Number of Columns
   *
   * - **control**: numberEditor
   */
  numberOfColumns: EntryFields.Integer;

  /**
   * Header Text
   *
   * - **localized**
   */
  headerText?: EntryFields.Symbol;

  /**
   * Subheading Text
   */
  subheadingText?: EntryFields.Symbol;

  /**
   * Images with Text
   *
   * - **available content-types**:
   *   - image-with-text
   * - **control**: entryLinksEditor
   */
  gridItems?: EntryLink<ImageWithText>[];
}

export type PromoGridId = 'promo-grid';

export interface PromoGridSys {
  sys: {
    contentType: {
      sys: {
        id: PromoGridId;
      };
    };
  };
}

/**
 * Promo Grid (`promo-grid`)
 *
 * A grid that displays a group of promo image cards with text
 *
 * - **display field**: componentName
 */
export type PromoGrid = Entry<PromoGridFields> & PromoGridSys;
