import { Actions, ImperativeAction, SortAction } from ".";
import { Sort } from "../models/UIState";

/**
 * Action for switching from Advanced Civ to Mega Civ or back
 *
 * @export
 * @returns {ImperativeAction}
 */
export function switchRules(): ImperativeAction {
	return { type: Actions.SWITCH_RULES };
}

/**
 * Action for switching between the cart and the owned techs
 *
 * @export
 * @returns {ImperativeAction}
 */
export function switchTab(): ImperativeAction {
	return { type: Actions.SWITCH_TAB };
}

/**
 * Action for changing how techs are sorted
 *
 * @export
 * @param {Sort} method
 * @returns {SortAction}
 */
export function sort(method: Sort): SortAction {
	return { type: Actions.SWITCH_SORT, method };
}
