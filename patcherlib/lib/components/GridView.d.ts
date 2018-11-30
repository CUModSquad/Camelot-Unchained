import * as React from 'react';
import { ql } from '..';
export interface GridViewStyle {
    container: React.CSSProperties;
    header: React.CSSProperties;
    headerItem: React.CSSProperties;
    sortableHeaderItem: React.CSSProperties;
    grid: React.CSSProperties;
    gridItem: React.CSSProperties;
    row: React.CSSProperties;
    rowMenu: React.CSSProperties;
    pagination: React.CSSProperties;
    pageButton: React.CSSProperties;
}
export interface SortFunc<T> {
    (a: T, b: T): number;
}
export interface ColumnDefinition {
    key: (item: any) => any;
    title: string;
    style?: React.CSSProperties;
    sortable?: boolean;
    viewPermission?: string;
    editPermission?: string;
    sortFunction?: SortFunc<any>;
    renderItem?: (item: any, renderData?: {
        [id: string]: any;
    }) => JSX.Element;
}
export declare enum GridViewSort {
    None = 0,
    Up = 1,
    Down = 2
}
export interface SortInfo {
    index: number;
    sorted: GridViewSort;
}
export interface RowMenuFunc<T extends {}> {
    (item: T, closeMenu: () => void): JSX.Element;
}
export interface GridViewProps {
    items: any[];
    columnDefinitions: ColumnDefinition[];
    userPermissions?: ql.PermissionInfo[];
    itemsPerPage?: number;
    styles?: Partial<GridViewStyle>;
    rowMenu?: RowMenuFunc<any>;
    rowMenuStyle?: React.CSSProperties;
    renderData?: {
        [id: string]: any;
    };
}
export interface GridViewState {
    currentSort: SortInfo;
    items: any[];
    itemsPerPage: number;
    sortedItems: any[];
    page: number;
}
export declare class GridViewImpl<P extends GridViewProps, S extends GridViewState> extends React.Component<P, S> {
    constructor(props: P);
    render(): JSX.Element;
    sortItems: (input: any[], column: ColumnDefinition, sorted: GridViewSort) => any[];
    setSort: (index: number, sortBy: GridViewSort) => void;
    getItemCount: () => number;
    getItemsPerPage: () => number;
    getCurrentPage: () => number;
    goToPage: (page: number) => void;
    componentWillReceiveProps(nextProps: P): void;
    private renderHeaderItems;
    private renderRow;
    private renderGrid;
    private renderPagination;
}
export declare class GridView extends GridViewImpl<GridViewProps, GridViewState> {
}
export default GridView;
