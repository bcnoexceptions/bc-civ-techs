import {
    Actions,
    DiscountSelectionAction,
    ImperativeAction,
    TechAction,
} from "../actions/index";
import { ColorDiscount } from "../models/ColorDiscount";
import {
    loadAdvanceCivTechs,
    loadMegaCivTechs,
    RuleSet,
} from "../models/RuleSet";
import { Tech } from "../models/Tech";
import { TechMall } from "../models/TechMall";

/**
 * Find the position within the cart of a specific tech
 *
 * @param {Tech[]} cartToSearch
 * @param {Tech} item
 * @returns {number}
 */
function cartIndex(cartToSearch: Tech[], item: Tech): number {
    return cartToSearch.findIndex(cartTech => cartTech.name === item.name);
}

/**
 * Determine whether the given tech is in the user's cart
 *
 * @param {Tech[]} cartToSearch
 * @param {Tech} item
 * @returns {boolean}
 */
function cartHasItem(cartToSearch: Tech[], item: Tech): boolean {
    return cartIndex(cartToSearch, item) >= 0;
}

/**
 * Update the inventory according to an action
 *
 * @param {TechMall} [state=new TechMall()]
 * @param {(TechAction | ImperativeAction | DiscountSelectionAction)} action
 * @returns
 */
export const inventory = (
    state: TechMall = new TechMall(),
    action: TechAction | ImperativeAction | DiscountSelectionAction
) => {
    let tech: Tech;
    switch (action.type) {
        case Actions.ADD_TO_CART:
            tech = (action as TechAction).tech;
            if (cartHasItem(state.cart, tech)) {
                return state;
            }
            state = state.clone();
            state.cart = state.cart.concat(tech);
            break;
        case Actions.REMOVE_FROM_CART:
            tech = (action as TechAction).tech;
            const index = cartIndex(state.cart, tech);
            if (index < 0) {
                return state;
            }
            state = state.clone();
            state.cart.splice(index, 1);
            break;
        case Actions.BUY_CART:
            state = state.clone();
            state.ownedTechs = state.ownedTechs.concat(state.cart);
            state.cart = [];
            break;
        case Actions.SWITCH_RULES:
            const result: TechMall = new TechMall();
            result.activeRules =
                state.activeRules === RuleSet.AdvancedCiv
                    ? RuleSet.MegaCiv
                    : RuleSet.AdvancedCiv;
            result.fullTechList =
                state.activeRules === RuleSet.AdvancedCiv
                    ? loadMegaCivTechs()
                    : loadAdvanceCivTechs();
            result.cart = [];
            result.ownedTechs = [];
            result.selectedDiscounts = [];
            return result;
        case Actions.DISCOUNTS_CONFIRM:
            state = state.clone();
            const discounts: ColorDiscount[] = (action as DiscountSelectionAction)
                .discounts;
            state.selectedDiscounts = state.selectedDiscounts.concat(discounts);
            break;
    }
    return state;
};
