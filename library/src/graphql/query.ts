/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as _ from 'lodash';
import { request as httpRequest, RequestOptions } from '../util/request';
import { ObjectMap, withDefaults } from './utils';
import Cache from './cache';

// Query Definition as defined by apollo-codegen
export interface GraphQLQueryDefinition {
  kind: string;
  name: {
    value: string,
  };
  loc: {
    source: {
      body: string,
    },
  };
}

export interface QueryOptions {
  url: string;
  requestOptions: RequestOptions;
  stringifyVariables: boolean;
  useCache: boolean; // should result be retrieved from cache?
  setToCache: boolean; // should new result be set to cache?
}

export const defaultQueryOpts: QueryOptions = {
  url: '/graphql',
  requestOptions: {
    headers: {},
    ignoreCache: false,
    timeout: 5000,
  },
  stringifyVariables: false,
  useCache: true,
  setToCache: true,
};

export interface QuickQLQuery {
  operationName: string | null;
  namedQuery: string | null;
  query: string | { definitions: GraphQLQueryDefinition[]; };
  variables: ObjectMap<any> | null;
}

export const defaultQuickQLQuery: QuickQLQuery = {
  operationName: null,
  namedQuery: null,
  query: '{}',
  variables: null,
};

export function parseQuery(query: string | { definitions: GraphQLQueryDefinition[]; }) {
  if (typeof query === 'string') return query;
  let queryString = '';
  query.definitions.forEach((definition: GraphQLQueryDefinition) => {
    queryString = `${queryString} ${definition.loc.source.body}`;
    return;
  });
  
  return queryString;
}

function errorResult(msg: string) {
  return {
    data: <null>null,
    ok: false,
    statusText: msg,
  };
}

export async function query<T>(query: QuickQLQuery, options?: Partial<QueryOptions>) {

  const q = withDefaults(query, defaultQuickQLQuery);
  const opts = withDefaults(options, defaultQueryOpts);

  try {

    const parsedQuery = parseQuery(q.query);

    const cacheKey = JSON.stringify({query: parsedQuery, variables: q.variables});

    if (opts.useCache) {
      const cachedResponse = await Cache.getItem(cacheKey);
      if (cachedResponse.isHit) {
        return {
          data: cachedResponse.data,
          ok: true,
          statusText: 'OK',
        };
      }
    }
    
    const response = await httpRequest('post', 
      opts.url,
      {},
      {
        ...q,
        query: parsedQuery,
        variables: opts.stringifyVariables ? JSON.stringify(q.variables) : q.variables,
      },
      {
        ...opts.requestOptions,
        headers: {
          ...opts.requestOptions.headers,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
    });
    
    if (response.ok) {
      const data: T = JSON.parse(response.data).data as T;
      if (opts.setToCache) {
        await Cache.setItem(cacheKey, data);
      }
      return {
        data,
        ok: true,
        statusText: 'OK',
      };
    }

    return errorResult(response.statusText);

  } catch (err) {
    return errorResult(err);
  }
}
