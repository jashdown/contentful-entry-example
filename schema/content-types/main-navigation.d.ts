import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { HeaderNavLinkList } from './header-nav-link-list';
import { HeaderNavLinkImageGroup } from './header-nav-link-image-group';
import { HeaderNavImage } from './header-nav-image';

/**
 * Main Navigation Menu (`main-navigation`) Fields
 */
export interface MainNavigationFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Bolded Menu Item
   *
   * - **defaulted**
   */
  boldedMenuItem?: EntryFields.Boolean;

  /**
   * Title
   *
   * - **control**: singleLine
   */
  title: EntryFields.Symbol;

  /**
   * Analytics Id
   */
  itemId: EntryFields.Symbol;

  /**
   * Mobile Analytics Id
   */
  itemIdMobile: EntryFields.Symbol;

  /**
   * Show Shop All Button
   *
   * - **defaulted**
   */
  showShopAll?: EntryFields.Boolean;

  /**
   * Header Link
   *
   * - **control**: singleLine
   */
  headerLink?: EntryFields.Symbol;

  /**
   * Header Link Target
   *
   * - **available values**:
   *   - _self
   *   - _blank
   * - **default**: _self
   */
  headerLinkTarget?: '_self' | '_blank';

  /**
   * Shop All Button Text
   *
   * - **control**: singleLine
   */
  shopAllButtonText?: EntryFields.Symbol;

  /**
   * Shop All Analytics Id
   */
  shopAllId?: EntryFields.Symbol;

  /**
   * No Header Menu
   *
   * - **defaulted**
   */
  headerNoMenu?: EntryFields.Boolean;

  /**
   * No Menu Analytics Id
   */
  noMenuLinkId?: EntryFields.Symbol;

  /**
   * Link Icon
   */
  linkIcon?: EntryFields.Symbol;

  /**
   * Left Menu items
   *
   * - **available content-types**:
   *   - header-nav-link-list
   *   - header-nav-link-image-group
   *   - header-nav-image
   * - **size**: _ - 8
   */
  leftComponents?: EntryLink<
    HeaderNavLinkList | HeaderNavLinkImageGroup | HeaderNavImage
  >[];

  /**
   * Right Menu items
   *
   * - **available content-types**:
   *   - header-nav-link-list
   *   - header-nav-image
   * - **size**: _ - 2
   */
  rightComponents?: EntryLink<HeaderNavLinkList | HeaderNavImage>[];

  /**
   * More Mobile links
   *
   * - **available content-types**:
   *   - header-nav-link-list
   * - **size**: _ - 1
   */
  moreMobileComponents?: EntryLink<HeaderNavLinkList>[];
}

export type MainNavigationId = 'main-navigation';

export interface MainNavigationSys {
  sys: {
    contentType: {
      sys: {
        id: MainNavigationId;
      };
    };
  };
}

/**
 * Main Navigation Menu (`main-navigation`)
 *
 * Main Navigation Menu content fields
 *
 * - **display field**: componentName
 */
export type MainNavigation = Entry<MainNavigationFields> & MainNavigationSys;
