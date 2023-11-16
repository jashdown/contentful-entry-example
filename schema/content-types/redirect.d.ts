import { EntryFields, Entry } from 'contentful';

/**
 * Redirect (`redirect`) Fields
 */
export interface RedirectFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * Source
   *
   * - **pattern**: /^(\/|(\/[\w\-.~!$&'()*+,;=:@%]+)+)$/i
   * - **control**: singleLine
   */
  source: EntryFields.Symbol;

  /**
   * Destination
   *
   * - **pattern**: /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/
   * - **control**: urlEditor
   */
  destination: EntryFields.Symbol;
}

export type RedirectId = 'redirect';

export interface RedirectSys {
  sys: {
    contentType: {
      sys: {
        id: RedirectId;
      };
    };
  };
}

/**
 * Redirect (`redirect`)
 *
 * Permanently redirect one url to another.
 *
 * - **display field**: componentName
 */
export type Redirect = Entry<RedirectFields> & RedirectSys;
