import * as React from 'react';
import { QueryOptions, GraphQLQuery } from './query';
import { Subscription, SubscriptionResult, Options as SubscriptionOptions, Options } from './subscription';
export interface GraphQLOptions extends QueryOptions {
    pollInterval: number;
}
export declare class GraphQLClient {
    private conf;
    lastQuery: {
        query: string;
        variables: Dictionary<any>;
        headers?: Dictionary<string> | null;
        apiHost?: string;
        namedQuery?: string;
        useNamedQueryCache?: boolean;
        operationName?: string;
    };
    constructor(options: QueryOptions);
    query: (query: GraphQLQuery) => Promise<{
        data: {};
        ok: boolean;
        statusText: any;
    }>;
    refetch: () => Promise<{
        data: {};
        ok: boolean;
        statusText: any;
    }>;
}
export interface GraphQLConfig extends QueryOptions {
}
export interface GraphQLData<T> {
    data: T;
    loading: boolean;
    ok: boolean;
    lastError: string;
}
export interface GraphQLResult<T> extends GraphQLData<T> {
    client: GraphQLClient;
    refetch: () => void;
}
export interface GraphQLInjectedProps<T> {
    graphql: GraphQLResult<T>;
}
export declare function useConfig(getQueryConfig: () => Partial<GraphQLConfig>, getSubscriptionConfig: () => Partial<Options<any>>): void;
export declare type GraphQLQueryOptions = Partial<GraphQLQuery> & Partial<GraphQLOptions>;
export declare type GraphQLSubscriptionOptions<DataType> = Partial<Subscription> & Partial<SubscriptionOptions<DataType>>;
export interface GraphQLProps<QueryDataType, SubscriptionDataType> {
    query?: string | GraphQLQueryOptions;
    subscription?: string | GraphQLSubscriptionOptions<SubscriptionDataType>;
    initialData?: QueryDataType;
    onQueryResult?: (result: GraphQLResult<QueryDataType>) => void;
    subscriptionHandler?: (result: SubscriptionResult<SubscriptionDataType>, data: QueryDataType) => QueryDataType;
    useConfig?: () => {
        queryConf: QueryOptions;
        subsConf: SubscriptionOptions<any>;
    };
}
export interface GraphQLState<T> extends GraphQLData<T> {
}
export declare class GraphQL<QueryDataType, SubscriptionDataType> extends React.Component<GraphQLProps<QueryDataType, SubscriptionDataType>, GraphQLState<QueryDataType>> {
    private client;
    private query;
    private queryOptions;
    private subscription;
    private subscriptionOptions;
    private pollingTimeout;
    private subscriptionID;
    private subscriptionManager;
    constructor(props: GraphQLProps<QueryDataType, SubscriptionDataType>);
    render(): JSX.Element;
    shouldComponentUpdate(nextProps: GraphQLProps<QueryDataType, SubscriptionDataType>, nextState: GraphQLState<QueryDataType>): boolean;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: GraphQLProps<QueryDataType, SubscriptionDataType>): void;
    componentWillUnmount(): void;
    private subscriptionHandler;
    private subscriptionError;
    private refetch;
    private refetchQuery;
    private pollingRefetch;
    private updateConfig;
}
export declare function withGraphQL<PropsType extends GraphQLInjectedProps<QueryDataType | null>, QueryDataType = any>(query?: string | Partial<GraphQLQuery> | ((props: PropsType) => Partial<GraphQLQuery>), options?: Partial<GraphQLOptions> | ((props: PropsType) => Partial<GraphQLOptions>)): (WrappedComponent: React.ComponentClass<PropsType> | React.StatelessComponent<PropsType>) => {
    new (props: any): {
        queryProp: GraphQLQueryOptions;
        render(): JSX.Element;
        setState<K extends "loading" | "data" | "ok" | "lastError">(state: GraphQLData<QueryDataType> | ((prevState: Readonly<GraphQLData<QueryDataType>>, props: Pick<PropsType, Exclude<keyof PropsType, "graphql">>) => GraphQLData<QueryDataType> | Pick<GraphQLData<QueryDataType>, K>) | Pick<GraphQLData<QueryDataType>, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<Pick<PropsType, Exclude<keyof PropsType, "graphql">>>;
        state: Readonly<GraphQLData<QueryDataType>>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<PropsType, Exclude<keyof PropsType, "graphql">>>, nextState: Readonly<GraphQLData<QueryDataType>>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<PropsType, Exclude<keyof PropsType, "graphql">>>, prevState: Readonly<GraphQLData<QueryDataType>>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<PropsType, Exclude<keyof PropsType, "graphql">>>, prevState: Readonly<GraphQLData<QueryDataType>>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<PropsType, Exclude<keyof PropsType, "graphql">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<PropsType, Exclude<keyof PropsType, "graphql">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<PropsType, Exclude<keyof PropsType, "graphql">>>, nextState: Readonly<GraphQLData<QueryDataType>>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<PropsType, Exclude<keyof PropsType, "graphql">>>, nextState: Readonly<GraphQLData<QueryDataType>>, nextContext: any): void;
    };
};
