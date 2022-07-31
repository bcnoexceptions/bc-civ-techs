import { StateWithHistory } from "redux-undo";
import { Tech } from "./Tech";
import { TechMall } from "./TechMall";
import { UIState } from "./UIState";

/**
 * Represents the entire state of the application: current UI
 * as well as available/purchased techs
 *
 * @export
 * @class CivState
 */
export class CivState {
    public inventory: StateWithHistory<TechMall>;
    public uiState: UIState;

    /**
     * Shallow copy the application state
     *
     * @returns {CivState}
     * @memberof CivState
     */
    public clone(): CivState {
        const result: CivState = new CivState();
        result.inventory = this.inventory;
        result.uiState = this.uiState;
        return result;
    }
}

/**
 * Determine the cost of an individual tech based on the state
 *
 * @export
 * @param {Tech} tech
 * @param {CivState} state
 * @returns {number}
 */
export function getTechCost(tech: Tech, state: CivState): number {
    if (!tech.color2) {
        return getMonoColorTechCost(tech, state);
    }

    // make a copy for each color, use whichever gives more discount

    const firstColorCopy = new Tech(tech.name, tech.color, tech.description, tech.longDesc, tech.baseCost, []);
    const secondColorCopy = new Tech(tech.name, tech.color2, tech.description, tech.longDesc, tech.baseCost, []);

    const cost1 = getMonoColorTechCost(firstColorCopy, state);
    const cost2 = getMonoColorTechCost(secondColorCopy, state);

    return Math.min(cost1, cost2);
}

/**
 * Determine the cost of a tech, assuming it has just one color
 *
 * @param {Tech} tech
 * @param {CivState} state
 * @returns {number}
 */
function getMonoColorTechCost(tech: Tech, state: CivState): number {
    let result: number = tech.baseCost;
    for (const ownedTech of state.inventory.present.ownedTechs) {
        for (const discount of ownedTech.discounts) {
            result -= discount.discountValue(tech);
        }
    }
    for (const discount of state.inventory.present.selectedDiscounts) {
        result -= discount.discountValue(tech);
    }
    return Math.max(0, result);
}
