import { combineReducers } from "redux";
import undoable, { FilterFunction } from "redux-undo";
import { Actions } from "../actions";
import { inventory } from "./Inventory";
import { uiState } from "./UIFlow";

/**
 * Determines whether an action may be undone.
 * Only selection of discounts may not be.
 *
 * @param {*} action
 * @param {*} currentState
 * @param {*} previousHistory
 */
const checkActionUndoable: FilterFunction = (
    action,
    currentState,
    previousHistory
) => action.type !== Actions.DISCOUNTS_CONFIRM;

const rootReducer = combineReducers({
    inventory: undoable(inventory, { filter: checkActionUndoable }),
    uiState,
});

export default rootReducer;
