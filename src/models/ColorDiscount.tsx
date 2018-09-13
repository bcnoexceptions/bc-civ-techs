import { IDiscount } from "./Discount";
import { Color, Tech } from "./Tech";

/**
 * Represents a discount to all techs of a given color
 *
 * @export
 * @class ColorDiscount
 * @implements {IDiscount}
 */
export class ColorDiscount implements IDiscount {
    public value: number;
    public color: Color;

    public constructor(value: number, color: Color) {
        this.value = value;
        this.color = color;
    }

    /**
     * Calculate the value of this discount applied to a given tech
     *
     * @param {Tech} tech
     * @returns {number}
     * @memberof ColorDiscount
     */
    public discountValue(tech: Tech): number {
        if (tech.color === this.color) {
            return this.value;
        }
        return 0;
    }

    /**
     * Unique key
     *
     * @returns {string}
     * @memberof ColorDiscount
     */
    public key(): string {
        return "Color" + this.value + "|" + this.color;
    }
}
