import * as React from 'react';
export interface GridStatsStyles {
    statContainer: React.CSSProperties;
    statListSection: React.CSSProperties;
    listItemContainer: React.CSSProperties;
}
export interface GridStatsProps {
    styles?: Partial<GridStatsStyles>;
    sectionTitle?: string;
    renderHeaderItem?: () => JSX.Element;
    howManyGrids: number;
    searchValue: string;
    statArray: any[];
    renderListItem: (item: any, index: number) => JSX.Element;
    shouldRenderEmptyListItems?: boolean;
}
export declare const GridStats: (props: GridStatsProps) => JSX.Element;
