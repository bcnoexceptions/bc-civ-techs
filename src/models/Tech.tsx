import { IDiscount } from "./Discount";

/**
 * Represents a tech the user may buy and have
 *
 * @export
 * @class Tech
 */
export class Tech {
    public name: string;
    public color: Color;
    public color2: Color | null;
    public description: string;
    public longDesc: string;
    public baseCost: number;
    public discounts: IDiscount[];
    public selectableDiscount: number;
    public prerequisite: string | null;

    public constructor(
        name: string,
        color: Color,
        desc: string,
        longDesc: string,
        cost: number,
        discounts: IDiscount[],
        selectableDiscount?: number,
        prerequisite?: string,
        secondColor?: Color
    ) {
        this.name = name;
        this.color = color;
        this.color2 = secondColor || null;
        this.description = desc;
        this.longDesc = longDesc;
        this.baseCost = cost;
        this.discounts = discounts || [];
        this.selectableDiscount = selectableDiscount || 0;
        this.prerequisite = prerequisite || null;
    }
}

/**
 * Represents the allowable colors of techs
 *
 * @export
 * @enum {number}
 */
export enum Color {
    Orange,
    Blue,
    Green,
    Blood,
    Yellow,
}
