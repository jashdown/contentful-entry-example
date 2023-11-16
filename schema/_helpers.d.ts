import { Entry } from 'contentful';

export type EntrySys<CTId extends string> = {
  sys: {
    contentType: {
      sys: {
        id: CTId;
      };
    };
  };
};

export type EntryOfUnknownCT<CTId extends string = string> = Entry<{}> &
  EntrySys<CTId>;

export type EntryLink<Links> = {
  __link_metadata: {
    allowedLinks: Links;
  };
  sys: {
    type: 'Link';
    linkType: 'Entry';
    id: string;
  };
};
