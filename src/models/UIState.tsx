import { ColorDiscount } from "./ColorDiscount";
import { Tech } from "./Tech";
import TechWithCost from "./TechWithCost";

/**
 * Represents the current UI state (menus, sort, color, etc.)
 *
 * @export
 * @class UIState
 */
export class UIState {
    /**
     * State when the UI is first opened
     *
     * @static
     * @returns {UIState}
     * @memberof UIState
     */
    public static defaultState(): UIState {
        return {
            activeSort: Sort.Alpha,
            discountPromptTotal: 0,
            promptingForDiscount: false,
            selectedDiscounts: [],
            showingOwnedTechs: false,
            showingTech: false,
            techBeingShown: null,
        };
    }

    public promptingForDiscount: boolean;
    public discountPromptTotal: number;

    public selectedDiscounts: ColorDiscount[];

    public showingTech: boolean;
    public techBeingShown: Tech | null;

    public showingOwnedTechs: boolean;

    public activeSort: Sort;
}

/**
 * Represents the ways techs can be sorted
 *
 * @export
 * @enum {number}
 */
export enum Sort {
    Alpha,
    Cost,
    Color,
}

/**
 * Sort the techs for the lists (purchasable list, cart)
 *
 * @export
 * @param {TechWithCost[]} list
 * @param {Sort} method
 * @returns
 */
export function sortTechs(list: TechWithCost[], method: Sort) {
    let sorter: (tech1: TechWithCost, tech2: TechWithCost) => number;
    if (method === Sort.Alpha) {
        sorter = (tech1: TechWithCost, tech2: TechWithCost) =>
            tech1.tech.name < tech2.tech.name ? -1 : 1;
    } else if (method === Sort.Cost) {
        sorter = (tech1: TechWithCost, tech2: TechWithCost) =>
            tech1.cost - tech2.cost;
    } else {
        // color
        sorter = (tech1: TechWithCost, tech2: TechWithCost): number => {
            if (tech1.tech.color !== tech2.tech.color) {
                return tech1.tech.color < tech2.tech.color ? 1 : -1;
            }

            if (tech1.tech.color2 !== tech2.tech.color2) {
                return tech1.tech.color2 === null
                    ? -1
                    : tech2.tech.color2 === null
                        ? 1
                        : tech1.tech.color2 - tech2.tech.color2;
            }

            // fall back to name
            return tech1.tech.name < tech2.tech.name ? -1 : 1;
        };
    }

    return list.sort(sorter);
}
