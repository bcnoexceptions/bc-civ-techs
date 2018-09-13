import { Actions, ImperativeAction, TechAction } from ".";
import { Tech } from "../models/Tech";

/**
 * Action for viewing a tech's "long" description
 *
 * @export
 * @param {Tech} tech
 * @returns {TechAction}
 */
export function viewTech(tech: Tech): TechAction {
	return {
		tech,
		type: Actions.VIEW_TECH,
	};
}

/**
 * Action for ending viewing of a tech's "long" description
 *
 * @export
 * @returns {ImperativeAction}
 */
export function stopViewingTech(): ImperativeAction {
	return { type: Actions.STOP_VIEWING_TECH };
}
