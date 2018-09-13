import {
    Actions,
    DiscountByNumberAction,
    DiscountChangeColorAction,
    DiscountChangeValueAction,
    IAction,
    NumericAction,
    SortAction,
    TechAction,
} from "../actions";
import { ColorDiscount } from "../models/ColorDiscount";
import { MIN_DISCOUNT } from "../models/RuleSet";
import { Color, Tech } from "../models/Tech";
import { Sort, UIState } from "../models/UIState";

/**
 * Update the UI state according to an action
 *
 * @param {UIState} [state=UIState.defaultState()]
 * @param {IAction} action
 * @returns {UIState}
 */
export const uiState = (
    state: UIState = UIState.defaultState(),
    action: IAction
): UIState => {
    let newDiscounts: ColorDiscount[];
    let delta: number;

    switch (action.type) {
        case Actions.VIEW_TECH:
            const selectedTech: Tech = (action as TechAction).tech;
            return {
                ...state,
                showingTech: true,
                techBeingShown: selectedTech,
            };
        case Actions.STOP_VIEWING_TECH:
            return { ...state, showingTech: false, techBeingShown: null };
        case Actions.SWITCH_TAB:
            return { ...state, showingOwnedTechs: !state.showingOwnedTechs };
        case Actions.SWITCH_SORT:
            const newSort: Sort = (action as SortAction).method;
            return { ...state, activeSort: newSort };

        // discount selector
        case Actions.DISCOUNTS_PROMPT:
            const totalCredit: number = (action as NumericAction).value;
            return {
                ...state,
                discountPromptTotal: totalCredit,
                promptingForDiscount: true,
                selectedDiscounts: [
                    new ColorDiscount(totalCredit, Color.Orange),
                ],
            };
        case Actions.DISCOUNTS_CONFIRM:
        case Actions.DISCOUNTS_CANCEL:
            return {
                ...state,
                discountPromptTotal: 0,
                promptingForDiscount: false,
                selectedDiscounts: [],
            };

        case Actions.DISCOUNTS_ADJUST_ONE:
            const adjustAction = action as DiscountChangeValueAction;
            newDiscounts = state.selectedDiscounts.slice();
            delta =
                adjustAction.newValue -
                state.selectedDiscounts[adjustAction.index].value;
            newDiscounts[adjustAction.index].value = adjustAction.newValue;
            return {
                ...state,
                selectedDiscounts: adjustDiscounts(
                    state.selectedDiscounts,
                    state.discountPromptTotal,
                    adjustAction.index,
                    delta
                ),
            };

        case Actions.DISCOUNTS_CHANGE_ONE_COLOR:
            const colorAction = action as DiscountChangeColorAction;
            newDiscounts = state.selectedDiscounts.slice();
            newDiscounts[colorAction.index].color = colorAction.color;
            return {
                ...state,
                selectedDiscounts: newDiscounts,
            };

        case Actions.DISCOUNTS_CREATE_ONE:
            newDiscounts = state.selectedDiscounts.slice();
            newDiscounts.push(new ColorDiscount(MIN_DISCOUNT, Color.Orange));
            newDiscounts = adjustDiscounts(
                newDiscounts,
                state.discountPromptTotal,
                newDiscounts.length - 1,
                MIN_DISCOUNT
            );
            return { ...state, selectedDiscounts: newDiscounts };

        case Actions.DISCOUNTS_REMOVE_ONE:
            const removeAction = action as DiscountByNumberAction;
            delta = -state.selectedDiscounts[removeAction.index].value;
            newDiscounts = state.selectedDiscounts.slice();
            newDiscounts.splice(removeAction.index, 1);
            newDiscounts = adjustDiscounts(
                newDiscounts,
                state.discountPromptTotal,
                -1,
                delta
            );
            return { ...state, selectedDiscounts: newDiscounts };
    }
    return state;
};

/**
 * Update the remaining discounts for the DiscountSelector when the user
 * adds, removes, or updates one.
 *
 * @param {ColorDiscount[]} originalDiscounts Starting point for discounts
 * @param {number} total What the discounts are supposed to total to
 * @param {number} skipPosition Position of a discount that can't be adjusted (for example, if it's the new one)
 * @param {number} difference The amount to make up (by adding or removing from other discounts)
 * @returns {ColorDiscount[]} Adjusted discounts such that everything adds up
 */
function adjustDiscounts(
    originalDiscounts: ColorDiscount[],
    total: number,
    skipPosition: number,
    difference: number
): ColorDiscount[] {
    const result: ColorDiscount[] = originalDiscounts.slice();

    const maxIndividualDiscount =
        total - (originalDiscounts.length - 1) * MIN_DISCOUNT;

    for (let i = 0; i < result.length; i++) {
        if (i === skipPosition) {
            continue;
        }

        if (difference > 0) {
            // steal from another discount
            if (result[i].value > MIN_DISCOUNT) {
                const subtractAmount = Math.min(
                    result[i].value - MIN_DISCOUNT,
                    difference
                );
                result[i].value -= subtractAmount;
                difference -= subtractAmount;
            }
        } else if (difference < 0) {
            // give to another discount
            if (result[i].value < maxIndividualDiscount) {
                const addAmount = Math.min(
                    maxIndividualDiscount - result[i].value,
                    -difference
                );
                result[i].value += addAmount;
                difference += addAmount;
            }
        }
    }
    return result;
}
