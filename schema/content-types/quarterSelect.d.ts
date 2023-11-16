import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { EmbeddedLink } from './embedded-link';

/**
 * Quarter Select (`quarterSelect`) Fields
 */
export interface QuarterSelectFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * quarters
   *
   * - **available content-types**:
   *   - embedded-link
   * - **control**: entryLinksEditor
   */
  quarters?: EntryLink<EmbeddedLink>[];
}

export type QuarterSelectId = 'quarterSelect';

export interface QuarterSelectSys {
  sys: {
    contentType: {
      sys: {
        id: QuarterSelectId;
      };
    };
  };
}

/**
 * Quarter Select (`quarterSelect`)
 *
 * - **display field**: componentName
 */
export type QuarterSelect = Entry<QuarterSelectFields> & QuarterSelectSys;
