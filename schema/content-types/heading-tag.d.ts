import { EntryFields, Entry } from 'contentful';

/**
 * Heading Tag (`heading-tag`) Fields
 */
export interface HeadingTagFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Enable Tracking
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
   * Visually Hide Heading
   *
   * - **defaulted**
   * - **control**: boolean
   */
  visuallyHidden?: EntryFields.Boolean;

  /**
   * Type of Heading
   *
   * - **available values**:
   *   - H1
   *   - H2
   *   - H3
   *   - H4
   *   - H5
   *   - H6
   * - **default**: H1
   * - **control**: dropdown
   */
  headingType: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';

  /**
   * Heading Text
   *
   * - **localized**
   */
  headingText: EntryFields.Symbol;

  /**
   * Link URL
   *
   * - **control**: urlEditor
   */
  linkUrl?: EntryFields.Symbol;

  /**
   * Link Text
   *
   * - **localized**
   */
  linkText?: EntryFields.Symbol;

  /**
   * Link URL Target
   *
   * - **available values**:
   *   - _self
   *   - _blank
   * - **default**: _self
   */
  linkTarget?: '_self' | '_blank';

  /**
   * Show Arrow Icon on Link
   *
   * - **defaulted**
   */
  linkArrowOn?: EntryFields.Boolean;

  /**
   * Bottom Spacing
   *
   * - **available values**:
   *   - None
   *   - Small
   *   - Medium
   * - **default**: None
   */
  bottomSpacing?: 'None' | 'Small' | 'Medium';
}

export type HeadingTagId = 'heading-tag';

export interface HeadingTagSys {
  sys: {
    contentType: {
      sys: {
        id: HeadingTagId;
      };
    };
  };
}

/**
 * Heading Tag (`heading-tag`)
 *
 * A heading tag for the Page name or title of a page section or subsection.
 *
 * - **display field**: componentName
 */
export type HeadingTag = Entry<HeadingTagFields> & HeadingTagSys;
