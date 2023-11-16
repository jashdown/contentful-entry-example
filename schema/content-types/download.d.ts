import { EntryFields, Entry } from 'contentful';

/**
 * Download (`download`) Fields
 */
export interface DownloadFields {
  /**
   * Component Name
   *
   * - **control**: singleLine
   */
  componentName: EntryFields.Symbol;

  /**
   * URL of Download File
   *
   * - **pattern**: /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/
   * - **control**: urlEditor
   */
  urlOfDownloadFile: EntryFields.Symbol;

  /**
   * Display Name
   *
   * - **localized**
   * - **control**: singleLine
   */
  displayName: EntryFields.Symbol;

  /**
   * File Type
   *
   * - **available values**:
   *   - PDF
   *   - Zip
   *   - Document
   *   - PowerPoint
   *   - Audio
   *   - Video
   *   - Other
   * - **default**: PDF
   * - **control**: dropdown
   */
  fileType:
    | 'PDF'
    | 'Zip'
    | 'Document'
    | 'PowerPoint'
    | 'Audio'
    | 'Video'
    | 'Other';
}

export type DownloadId = 'download';

export interface DownloadSys {
  sys: {
    contentType: {
      sys: {
        id: DownloadId;
      };
    };
  };
}

/**
 * Download (`download`)
 *
 * - **display field**: componentName
 */
export type Download = Entry<DownloadFields> & DownloadSys;
