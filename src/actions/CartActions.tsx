import { Actions, ImperativeAction, TechAction } from ".";
import { Tech } from "../models/Tech";

/**
 * Action for buying all the techs in the cart
 *
 * @export
 * @returns {ImperativeAction}
 */
export function buyCart(): ImperativeAction {
	return { type: Actions.BUY_CART };
}

/**
 * Action for adding a tech to the cart
 *
 * @export
 * @param {Tech} tech
 * @returns {TechAction}
 */
export function addToCart(tech: Tech): TechAction {
	return {
		tech,
		type: Actions.ADD_TO_CART,
	};
}

/**
 * Action for removing a tech from the cart
 *
 * @export
 * @param {Tech} tech
 * @returns {TechAction}
 */
export function removeFromCart(tech: Tech): TechAction {
	return {
		tech,
		type: Actions.REMOVE_FROM_CART,
	};
}
