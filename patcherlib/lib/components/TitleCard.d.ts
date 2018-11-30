import * as React from 'react';
import { CardLevel } from './Card';
export { CardLevel } from './Card';
export interface TitleCardStyle {
    title: React.CSSProperties;
    date: React.CSSProperties;
}
export declare const TitleCard: (props: {
    title: string;
    date?: Date;
    styles?: Partial<TitleCardStyle>;
    level?: CardLevel;
    children?: React.ReactNode;
}) => JSX.Element;
export default TitleCard;
