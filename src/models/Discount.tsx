import { Tech } from "./Tech";

/**
 * Represents something that discoutns techs
 *
 * @export
 * @interface IDiscount
 */
export interface IDiscount {
    /**
     * Returns the amount this discount applies for a given tech
     *
     * @param {Tech} tech
     * @returns {number}
     * @memberof IDiscount
     */
    discountValue(tech: Tech): number;

    /**
     * Unique key
     *
     * @returns {string}
     * @memberof IDiscount
     */
    key(): string;
}
