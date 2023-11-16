import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { ImageWithText } from './image-with-text';

/**
 * Featured Categories (`featured-categories`) Fields
 */
export interface FeaturedCategoriesFields {
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
   */
  customId?: EntryFields.Symbol;

  /**
   * Heading
   */
  heading: EntryFields.Symbol;

  /**
   * Subheading
   */
  subheading?: EntryFields.Symbol;

  /**
   * Links
   *
   * - **available content-types**:
   *   - image-with-text
   * - **control**: entryLinksEditor
   */
  categories?: EntryLink<ImageWithText>[];
}

export type FeaturedCategoriesId = 'featured-categories';

export interface FeaturedCategoriesSys {
  sys: {
    contentType: {
      sys: {
        id: FeaturedCategoriesId;
      };
    };
  };
}

/**
 * Featured Categories (`featured-categories`)
 *
 * A container for multiple images with text to feature items
 *
 * - **display field**: componentName
 */
export type FeaturedCategories = Entry<FeaturedCategoriesFields> &
  FeaturedCategoriesSys;
