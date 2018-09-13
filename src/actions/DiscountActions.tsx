import {
	Actions,
	DiscountByNumberAction,
	DiscountChangeColorAction,
	DiscountChangeValueAction,
	DiscountSelectionAction,
	ImperativeAction,
	NumericAction,
} from ".";
import { ColorDiscount } from "../models/ColorDiscount";
import { Color } from "../models/Tech";

/**
 * Action for confirming the discounts from the discount selector popup
 *
 * @export
 * @param {ColorDiscount[]} discounts
 * @returns {DiscountSelectionAction}
 */
export function confirmDiscounts(discounts: ColorDiscount[]): DiscountSelectionAction {
	return { type: Actions.DISCOUNTS_CONFIRM, discounts };
}

/**
 * Action for cancelling the discount selector popup (currently unused)
 *
 * @export
 * @returns {ImperativeAction}
 */
export function cancelDiscounts(): ImperativeAction {
	return { type: Actions.DISCOUNTS_CANCEL };
}

/**
 * Action for prompting the user for discounts (because the tech just bought gives them)
 *
 * @export
 * @param {number} totalAmount
 * @returns {NumericAction}
 */
export function promptForDiscount(totalAmount: number): NumericAction {
	return { type: Actions.DISCOUNTS_PROMPT, value: totalAmount };
}

/**
 * Action for messing with the sliders on the discount selector
 *
 * @export
 * @param {number} position
 * @param {number} newValue
 * @returns {DiscountChangeValueAction}
 */
export function adjustSlider(position: number, newValue: number): DiscountChangeValueAction {
	return { type: Actions.DISCOUNTS_ADJUST_ONE, index: position, newValue };
}

/**
 * Action for messing with a discount's color on the discount selector
 *
 * @export
 * @param {number} position
 * @param {Color} newColor
 * @returns {DiscountChangeColorAction}
 */
export function adjustColor(position: number, newColor: Color): DiscountChangeColorAction {
	return { type: Actions.DISCOUNTS_CHANGE_ONE_COLOR, index: position, color: newColor };
}

/**
 * Action for adding a discount to the discount selector
 *
 * @export
 * @returns {ImperativeAction}
 */
export function createDiscount(): ImperativeAction {
	return { type: Actions.DISCOUNTS_CREATE_ONE };
}

/**
 * Action for removing a discount from the discount selector
 *
 * @export
 * @param {number} position
 * @returns {DiscountByNumberAction}
 */
export function removeDiscount(position: number): DiscountByNumberAction {
	return { type: Actions.DISCOUNTS_REMOVE_ONE, index: position };
}
