import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { ImageEmbed } from './image-embed';

/**
 * Header Nav Link Image Group (`header-nav-link-image-group`) Fields
 */
export interface HeaderNavLinkImageGroupFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Sub Title
   */
  subTitle: EntryFields.Symbol;

  /**
   * Image Group
   *
   * - **available content-types**:
   *   - image-embed
   * - **size**: _ - 4
   */
  imageGroup: EntryLink<ImageEmbed>[];
}

export type HeaderNavLinkImageGroupId = 'header-nav-link-image-group';

export interface HeaderNavLinkImageGroupSys {
  sys: {
    contentType: {
      sys: {
        id: HeaderNavLinkImageGroupId;
      };
    };
  };
}

/**
 * Header Nav Link Image Group (`header-nav-link-image-group`)
 *
 * Header Nav Link Image Group content fields
 *
 * - **display field**: componentName
 */
export type HeaderNavLinkImageGroup = Entry<HeaderNavLinkImageGroupFields> &
  HeaderNavLinkImageGroupSys;
