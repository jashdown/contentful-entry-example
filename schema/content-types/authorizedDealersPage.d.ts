import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { HeadingTag } from './heading-tag';
import { ExtendedRichText } from './extended-rich-text';

/**
 * Authorized Dealers Page (`authorizedDealersPage`) Fields
 */
export interface AuthorizedDealersPageFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Meta Title
   *
   * - **localized**
   * - **size**: 0 - 100
   * - **control**: singleLine
   */
  pageTitle: EntryFields.Symbol;

  /**
   * Meta Description
   *
   * - **localized**
   * - **size**: 0 - 165
   * - **control**: multipleLine
   */
  description?: EntryFields.Text;

  /**
   * Social Media Image
   *
   * - **pattern**: /^(https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/
   * - **control**: urlEditor
   */
  socialMediaImage?: EntryFields.Symbol;

  /**
   * Social Media Description
   *
   * - **localized**
   * - **control**: multipleLine
   */
  socialMediaDescription?: EntryFields.Text;

  /**
   * Page Blocks (Above Dealer Search)
   *
   * - **available content-types**:
   *   - heading-tag
   *   - extended-rich-text
   * - **control**: entryLinksEditor
   */
  pageBlocksAbove?: EntryLink<HeadingTag | ExtendedRichText>[];

  /**
   * Page Blocks (Below Dealer Search)
   *
   * - **available content-types**:
   *   - heading-tag
   *   - extended-rich-text
   * - **control**: entryLinksEditor
   */
  pageBlocksBelow?: EntryLink<HeadingTag | ExtendedRichText>[];

  /**
   * Route
   *
   * - **unique**
   * - **pattern**: /^(\/|(\/[\w\-.~!$&'()*+,;=:@%]+)+)$/i
   * - **control**: slugEditor
   */
  route: EntryFields.Symbol;
}

export type AuthorizedDealersPageId = 'authorizedDealersPage';

export interface AuthorizedDealersPageSys {
  sys: {
    contentType: {
      sys: {
        id: AuthorizedDealersPageId;
      };
    };
  };
}

/**
 * Authorized Dealers Page (`authorizedDealersPage`)
 *
 * A page that allows customers to search for Lifeway authorized dealers by location.
 *
 * - **display field**: componentName
 */
export type AuthorizedDealersPage = Entry<AuthorizedDealersPageFields> &
  AuthorizedDealersPageSys;
