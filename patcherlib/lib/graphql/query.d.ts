import { RequestOptions } from '../utils/request';
import { DocumentNode } from 'graphql';
export interface LegacyGraphqlDefinition {
    kind: string;
    name: {
        value: string;
    };
    loc: {
        source: {
            body: string;
        };
    };
}
export interface LegacyGraphqlDocumentNode {
    definitions: LegacyGraphqlDefinition[];
}
export interface QueryOptions {
    url: string;
    requestOptions: RequestOptions;
    stringifyVariables: boolean;
}
export declare const defaultQueryOpts: QueryOptions;
export interface GraphQLQuery {
    operationName: string | null;
    namedQuery: string | null;
    useNamedQueryCache: boolean | null;
    query: string | LegacyGraphqlDocumentNode | DocumentNode;
    variables: Dictionary<any> | null;
}
export declare const defaultQuery: GraphQLQuery;
export declare function parseQuery(query: string | LegacyGraphqlDocumentNode | DocumentNode): any;
export declare function query<T>(query: GraphQLQuery, options?: Partial<QueryOptions>): Promise<{
    data: T;
    ok: boolean;
    statusText: any;
}>;
