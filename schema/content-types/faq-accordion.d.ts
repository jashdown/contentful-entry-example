import * as RT from '@contentful/rich-text-types';
import { EntryFields, Entry } from 'contentful';
import { EntryLink } from '../_helpers';
import { AccordionPanel } from './accordion-panel';

/**
 * FAQ Accordion (`faq-accordion`) Fields
 */
export interface FaqAccordionFields {
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
   * Title
   */
  title?: EntryFields.Symbol;

  /**
   * Title Alignment
   *
   * - **available values**:
   *   - left
   *   - center
   *   - right
   * - **default**: left
   * - **pattern**: /^(left|center|right)$/
   */
  textAlign: 'left' | 'center' | 'right';

  /**
   * Content
   */
  content?: RT.Document;

  /**
   * Show Multiple Open Panels
   *
   * - **defaulted**
   */
  showMultipleOpenPanels?: EntryFields.Boolean;

  /**
   * Accordion Panels
   *
   * - **available content-types**:
   *   - accordion-panel
   * - **size**: 1 - _
   */
  panels: EntryLink<AccordionPanel>[];
}

export type FaqAccordionId = 'faq-accordion';

export interface FaqAccordionSys {
  sys: {
    contentType: {
      sys: {
        id: FaqAccordionId;
      };
    };
  };
}

/**
 * FAQ Accordion (`faq-accordion`)
 *
 * FAQ Accordion component
 *
 * - **display field**: componentName
 */
export type FaqAccordion = Entry<FaqAccordionFields> & FaqAccordionSys;
