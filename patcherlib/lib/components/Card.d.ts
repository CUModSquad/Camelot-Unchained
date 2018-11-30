import * as React from 'react';
export declare enum CardLevel {
    One = 0,
    Two = 1,
    Three = 2,
    Four = 3,
    Five = 4
}
export declare const Card: (props: {
    level?: CardLevel;
    children?: React.ReactNode;
}) => any;
export default Card;
