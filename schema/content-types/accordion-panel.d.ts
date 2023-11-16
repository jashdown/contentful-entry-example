import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';

/**
 * Accordion Panel (`accordion-panel`) Fields
 */
export interface AccordionPanelFields {
  /**
   * Component Name
   */
  componentName: EntryFields.Symbol;

  /**
   * Custom ID
   *
   * - **pattern**: /^[A-Za-z]+[\w\-\:\.]*$/
   */
  customId?: EntryFields.Symbol;

  /**
   * Title Text
   */
  title: EntryFields.Symbol;

  /**
   * Content
   */
  content: RT.Document;

  /**
   * Is Open
   *
   * - **defaulted**
   */
  isExpanded?: EntryFields.Boolean;
}

export type AccordionPanelId = 'accordion-panel';

export interface AccordionPanelSys {
  sys: {
    contentType: {
      sys: {
        id: AccordionPanelId;
      };
    };
  };
}

/**
 * Accordion Panel (`accordion-panel`)
 *
 * Single panel for an accordion
 *
 * - **display field**: componentName
 */
export type AccordionPanel = Entry<AccordionPanelFields> & AccordionPanelSys;
