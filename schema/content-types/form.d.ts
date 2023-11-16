import { EntryFields, Entry } from 'contentful';

/**
 * Form (`form`) Fields
 */
export interface FormFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Form URL
   *
   * - **pattern**: /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/
   * - **control**: singleLine
   */
  formUrl: EntryFields.Symbol;

  /**
   * Redirect URL
   *
   * - **pattern**: /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/
   * - **control**: urlEditor
   */
  redirectUrl?: EntryFields.Symbol;

  /**
   * Custom ID
   *
   * - **control**: singleLine
   */
  customId?: EntryFields.Symbol;

  /**
   * Header
   *
   * - **localized**
   * - **control**: singleLine
   */
  header?: EntryFields.Symbol;

  /**
   * Sub Heading
   *
   * - **localized**
   * - **control**: multipleLine
   */
  subHeading?: EntryFields.Text;

  /**
   * Center Heading
   *
   * - **defaulted**
   * - **control**: boolean
   */
  centerHeading?: EntryFields.Boolean;

  /**
   * Background Color
   *
   * - **pattern**: /^#[0-9A-Fa-f]{6}$/
   * - **size**: 7 - 7
   * - **control**: singleLine
   */
  backgroundColor?: EntryFields.Symbol;
}

export type FormId = 'form';

export interface FormSys {
  sys: {
    contentType: {
      sys: {
        id: FormId;
      };
    };
  };
}

/**
 * Form (`form`)
 *
 * - **display field**: componentName
 */
export type Form = Entry<FormFields> & FormSys;
