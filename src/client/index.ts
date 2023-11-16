import {
  ContentfulClientApi,
  createClient as createContentfulClient,
  Entry,
  EntryCollection,
} from 'contentful';
import type { Resolve } from '../schema/resolve-links';

type BasicSchema = {
  contentTypes: {
    [contentTypeIds: string]: Entry<unknown>;
  };
};

type DeriveEntry<S extends BasicSchema, Query> = Query extends {
  content_type: keyof S['contentTypes'];
}
  ? S['contentTypes'][Query['content_type']]
  : S['contentTypes'][keyof S['contentTypes']] | Entry<{}>;

type ResolveLinks<E extends Entry<unknown>, Query> = Query extends {
  include: number;
}
  ? Resolve<E, Query['include']>
  : Resolve<E>;

type RefineEntry<E extends Entry<unknown>, Query> = ResolveLinks<E, Query>;

type EntryFromQuery<S extends BasicSchema, Query> = RefineEntry<
  DeriveEntry<S, Query>,
  Query
>;

/* ---------------------- */

export type EntryToCollection<T> = T extends Entry<infer F>
  ? EntryCollection<F> & { items: T[] }
  : EntryCollection<unknown>;

export { Entry } from 'contentful';

/* ---------------------- */

export interface ClientQuery {
  content_type?: string;
  include?: number;
  locale?: string;

  skip?: number;
  limit?: number;
  order?: string;

  select?: string;
  query?: string;

  links_to_entry?: string;
  links_to_asset?: string;
  mimetype_group?: string;
}

interface BoundClient<S extends BasicSchema> {
  getEntries<Query extends ClientQuery>(
    query: Readonly<Query>
  ): Promise<EntryToCollection<EntryFromQuery<S, Query>>>;

  getEntry<Query extends ClientQuery>(
    id: string,
    query: Readonly<Query>
  ): Promise<EntryFromQuery<S, Query>>;
}

type BaseSchema<S extends { contentTypes: object }> = {
  contentTypes: {
    [id in keyof S['contentTypes'] & string]: Entry<unknown>;
  };
};

export type BoundContentfulClientAPI<S extends BaseSchema<S>> = BoundClient<S> &
  ContentfulClientApi;

export const bindClient = <Schema extends BaseSchema<Schema>>(
  client: ContentfulClientApi
) => client as BoundContentfulClientAPI<Schema>;

export const createClient = <Schema extends BaseSchema<Schema>>(
  ...args: Parameters<typeof createContentfulClient>
) => bindClient<Schema>(createContentfulClient(...args));
