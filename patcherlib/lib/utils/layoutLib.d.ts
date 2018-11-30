export declare enum Orientation {
    HORIZONTAL = 0,
    VERTICAL = 1
}
export declare enum Quadrant {
    TopLeft = 0,
    TopRight = 1,
    BottomLeft = 2,
    BottomRight = 3
}
export declare function windowQuadrant(mouseX: number, mouseY: number): Quadrant;
