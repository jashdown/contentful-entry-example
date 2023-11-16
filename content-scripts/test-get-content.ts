/* eslint-disable import/no-extraneous-dependencies */
import * as dotenv from 'dotenv-safe';
import { Schema } from '../schema';
import { BoundContentfulClientAPI, createClient } from '../src/client';

dotenv.config({ example: './.env.example' });

type CFLClient = BoundContentfulClientAPI<Schema>;


export const getClient = (): CFLClient | undefined => {
  const accessToken = process.env.CONTENTFUL_CDA_ACCESS_TOKEN;
  const space = process.env.CONTENTFUL_SPACE;
  const environment = process.env.CONTENTFUL_ENVIRONMENT;

  if (!accessToken || !space || !environment) {
    if (!accessToken) {
      console.log(
        'CONTENTFUL_CDA_ACCESS_TOKEN is a required environment variable.'
      );
    }
    if (!space) {
      console.log('CONTENTFUL_SPACE is a required environment variable.');
    }
    if (!environment) {
      console.log('CONTENTFUL_ENVIRONMENT is a required environment variable.');
    }
    return;
  }
  return createClient({
    accessToken,
    space,
    environment,
  });
};

const main = async () => {
  const client = getClient();

  if (!client) {
    console.log('Error creating Contentful client');
    return;
  }

  const entryID = '3QweQ7miL9WL8uxERJbWlW';

  const entries = await client.getEntry(entryID, {
    include: 10,
    locale: 'en'
  });

  console.log('entries', JSON.stringify(entries, null, 2));
};

main();
