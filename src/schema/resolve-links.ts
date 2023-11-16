import { Entry } from 'contentful';
import { Decrement } from './helpers';

type RawEntry = Entry<unknown>;

type EntryLinkField = {
  sys: {
    type: 'Link';
    linkType: 'Entry';
  };
};
export type ArrayField<I = unknown> = I[];

type EntryLinkFieldWithAllowed = EntryLinkField & {
  __link_metadata: {
    allowedLinks: unknown;
  };
};

export type ResolveLink<F extends EntryLinkField> =
  F extends EntryLinkFieldWithAllowed
    ? F['__link_metadata']['allowedLinks']
    : Entry<{}>;

/* ------------------- */

type ResolveEntry<
  E extends RawEntry,
  depth extends number,
  preserveOutOfDepthEntry extends boolean
> = E extends Entry<infer Fs>
  ? Omit<E, 'fields'> & Entry<ResolveFields<Fs, depth, preserveOutOfDepthEntry>>
  : never;

export type ResolveFields<
  Fs,
  depth extends number,
  preserveOutOfDepthEntry extends boolean
> = {
  [FK in keyof Fs]: ResolveField<Fs[FK], depth, preserveOutOfDepthEntry>;
};

type ResolveField<
  F,
  depth extends number,
  preserveOutOfDepthEntry extends boolean
> = F extends ArrayField<infer I>
  ? ArrayField<ResolveField<I, depth, preserveOutOfDepthEntry>>
  : F extends EntryLinkField
  ? depth extends 0
    ? preserveOutOfDepthEntry extends true
      ? F
      : unknown
    : ResolveNextLayer<ResolveLink<F>, depth, preserveOutOfDepthEntry>
  : F;

type ResolveNextLayer<
  E,
  depth extends number,
  preserveOutOfDepthEntry extends boolean
> = E extends RawEntry
  ? ResolveEntry<E, Decrement<depth>, preserveOutOfDepthEntry>
  : E;

/* ------------------- */

/**
  Replaces entry link fields with the matching Entry
  from the Schema (up to the specified depth).

  This mimics the behavior of the 'include' parameter in the
  contentful delivery api
*/
export type Resolve<
  E extends RawEntry,
  depth extends number = 1
> = ResolveEntry<E, depth, true>;

/*
  Replaces entry link fields with the matching Entry
  from the Schema (up to the specified depth), while falling back to
  unknown 
*/
export type MinimalResolve<
  E extends RawEntry,
  depth extends number = 1
> = ResolveEntry<E, depth, false>;
