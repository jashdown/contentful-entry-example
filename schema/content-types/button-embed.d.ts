import { EntryFields, Entry } from 'contentful';

/**
 * Button (`button-embed`) Fields
 */
export interface ButtonEmbedFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Enable Tracking
   *
   * - **defaulted**
   * - **control**: boolean
   */
  enableTracking?: EntryFields.Boolean;

  /**
   * Custom ID
   *
   * - **pattern**: /^[A-Za-z]+[\w\-\:\.]*$/
   * - **control**: singleLine
   */
  customId?: EntryFields.Symbol;

  /**
   * Button Text
   *
   * - **control**: singleLine
   */
  buttonText: EntryFields.Symbol;

  /**
   * Button Aria Label
   *
   * - **control**: singleLine
   */
  buttonAriaLabel?: EntryFields.Symbol;

  /**
   * Button URL
   *
   * - **size**: 0 - 5000
   * - **control**: urlEditor
   */
  buttonURL: EntryFields.Text;

  /**
   * Button Link Target
   *
   * - **available values**:
   *   - _self
   *   - _blank
   * - **default**: _self
   * - **control**: dropdown
   */
  buttonLinkTarget?: '_self' | '_blank';

  /**
   * Button Color
   *
   * - **available values**:
   *   - yellow
   *   - gray-outline
   *   - white-outline
   *   - white
   *   - gray
   * - **default**: yellow
   * - **control**: dropdown
   */
  buttonColor?: 'yellow' | 'gray-outline' | 'white-outline' | 'white' | 'gray';

  /**
   * Button Size
   *
   * - **available values**:
   *   - Medium
   *   - Large
   * - **default**: Medium
   * - **control**: dropdown
   */
  buttonSize?: 'Medium' | 'Large';

  /**
   * Align Center
   *
   * - **defaulted**
   * - **control**: boolean
   */
  alignCenter?: EntryFields.Boolean;

  /**
   * Top Spacing
   *
   * - **available values**:
   *   - None
   *   - Small
   *   - Medium
   *   - Large
   * - **default**: Small
   * - **control**: dropdown
   */
  topSpacing?: 'None' | 'Small' | 'Medium' | 'Large';

  /**
   * Bottom Spacing
   *
   * - **available values**:
   *   - None
   *   - Small
   *   - Medium
   *   - Large
   * - **default**: Small
   * - **control**: dropdown
   */
  bottomSpacing?: 'None' | 'Small' | 'Medium' | 'Large';
}

export type ButtonEmbedId = 'button-embed';

export interface ButtonEmbedSys {
  sys: {
    contentType: {
      sys: {
        id: ButtonEmbedId;
      };
    };
  };
}

/**
 * Button (`button-embed`)
 *
 * A button link to embed in rich text, multicolumn, or 2-column components.
 *
 * - **display field**: componentName
 */
export type ButtonEmbed = Entry<ButtonEmbedFields> & ButtonEmbedSys;
