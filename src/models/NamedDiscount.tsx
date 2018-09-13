import { IDiscount } from "./Discount";
import { Tech } from "./Tech";

/**
 * Represents a discount that applies only to one specific tech
 *
 * @export
 * @class NamedDiscount
 * @implements {IDiscount}
 */
export class NamedDiscount implements IDiscount {
    public techName: string;
    public value: number;

    public constructor(value: number, discountedTech: string) {
        this.value = value;
        this.techName = discountedTech;
    }

    /**
     * Calculate the value of this discount applied to a given tech
     *
     * @param {Tech} tech
     * @returns {number}
     * @memberof NamedDiscount
     */
    public discountValue(tech: Tech): number {
        if (tech.name === this.techName) {
            return this.value;
        }
        return 0;
    }

    /**
     * Unique key
     *
     * @returns {string}
     * @memberof NamedDiscount
     */
    public key(): string {
        return "Named" + this.techName;
    }
}
