import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { AddItemsBundle } from './add-items-bundle';
import { CustomSlider } from './custom-slider';
import { ExtendedRichText } from './extended-rich-text';
import { Form } from './form';
import { MultiColumn } from './multi-column';
import { ProductSlider } from './product-slider';
import { PromoGrid } from './promo-grid';
import { TwoColumnTextAndMedia } from './two-column-text-and-media';

/**
 * Contributor page (`contributor-page`) Fields
 */
export interface ContributorPageFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Meta Title
   *
   * - **localized**
   * - **size**: 0 - 100
   */
  pageTitle?: EntryFields.Symbol;

  /**
   * Meta Description
   *
   * - **localized**
   * - **size**: 0 - 165
   * - **control**: multipleLine
   */
  description?: EntryFields.Text;

  /**
   * Social Media Description
   *
   * - **localized**
   * - **control**: multipleLine
   */
  socialMediaDescription?: EntryFields.Text;

  /**
   * Social Media Image
   *
   * - **control**: urlEditor
   */
  socialMediaImage?: EntryFields.Symbol;

  /**
   * Display Name
   *
   * - **control**: singleLine
   */
  displayName: EntryFields.Symbol;

  /**
   * Image URL
   *
   * - **control**: urlEditor
   */
  imageUrl?: EntryFields.Symbol;

  /**
   * Biography
   *
   * - **localized**
   * - **control**: richTextEditor
   */
  biography?: RT.Document;

  /**
   * Page Blocks
   *
   * - **available content-types**:
   *   - add-items-bundle
   *   - custom-slider
   *   - extended-rich-text
   *   - form
   *   - multi-column
   *   - product-slider
   *   - promo-grid
   *   - two-column-text-and-media
   * - **control**: entryLinksEditor
   */
  pageBlocks?: EntryLink<
    | AddItemsBundle
    | CustomSlider
    | ExtendedRichText
    | Form
    | MultiColumn
    | ProductSlider
    | PromoGrid
    | TwoColumnTextAndMedia
  >[];

  /**
   * Is a Featured Author?
   *
   * - **defaulted**
   * - **control**: boolean
   */
  isFeaturedAuthor: EntryFields.Boolean;

  /**
   * Route
   *
   * - **unique**
   * - **pattern**: /^(\/|(\/[\w\-.~!$&'()*+,;=:@%]+)+)$/i
   * - **control**: slugEditor
   */
  route?: EntryFields.Symbol;
}

export type ContributorPageId = 'contributor-page';

export interface ContributorPageSys {
  sys: {
    contentType: {
      sys: {
        id: ContributorPageId;
      };
    };
  };
}

/**
 * Contributor page (`contributor-page`)
 *
 * Contributor Page content fields
 *
 * - **display field**: componentName
 */
export type ContributorPage = Entry<ContributorPageFields> & ContributorPageSys;
