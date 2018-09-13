import { connect } from "react-redux";
import { buyCart, removeFromCart } from "../actions/CartActions";
import { promptForDiscount } from "../actions/DiscountActions";
import { viewTech } from "../actions/TechActions";
import {
    CartDisplay,
    ICartDisplayDispatchProps,
    ICartDisplayStateProps,
} from "../components/CartDisplay";
import { CivState, getTechCost } from "../models/State";
import { Tech } from "../models/Tech";
import TechWithCost from "../models/TechWithCost";
import { sortTechs } from "../models/UIState";

/**
 * Map techs from the user's cart to their discounted costs
 *
 * @param {CivState} state
 * @returns {TechWithCost[]}
 */
function getCartTechs(state: CivState): TechWithCost[] {
    const result = [];
    for (const tech of state.inventory.present.cart) {
        const oneInfo: TechWithCost = new TechWithCost();
        oneInfo.cost = getTechCost(tech, state);
        oneInfo.tech = tech;
        result.push(oneInfo);
    }
    return sortTechs(result, state.uiState.activeSort);
}

/**
 * Calculate the total cost of the user's cart
 *
 * @param {CivState} state
 * @returns {number}
 */
function getTotalCost(state: CivState): number {
    let result: number = 0;
    for (const tech of state.inventory.present.cart) {
        result += getTechCost(tech, state);
    }
    return result;
}

/**
 * Calculate the amount of discounts a user can earn by purchasing
 * his current cart
 *
 * @param {CivState} state
 * @returns {number}
 */
function getTotalDiscountPrompt(state: CivState): number {
    let result: number = 0;
    for (const tech of state.inventory.present.cart) {
        if (tech.selectableDiscount) {
            result += tech.selectableDiscount;
        }
    }
    return result;
}

/**
 * Event handler for when a user elects to remove a tech from
 * his cart
 *
 * @param {Tech} tech
 * @returns
 */
function onTechCancel(tech: Tech) {
    return removeFromCart(tech);
}

/**
 * Event handler for when a user chooses to view a tech in his cart
 *
 * @param {Tech} tech
 * @returns
 */
function onTechView(tech: Tech) {
    return viewTech(tech);
}

/**
 * Event handler for when the user buys his cart
 *
 * @returns
 */
function onBuy() {
    return buyCart();
}

/**
 * Return an object which can contribute dispatch actions to the props
 * for a CartDisplay component
 *
 * @param {*} dispatch
 * @returns {ICartDisplayDispatchProps}
 */
function mapDispatch2Props(dispatch: any): ICartDisplayDispatchProps {
    return {
        onBuy: () => dispatch(onBuy()),
        onPromptDiscounts: (totalAmount: number) =>
            dispatch(promptForDiscount(totalAmount)),
        onTechSelect: (tech: Tech) => dispatch(onTechCancel(tech)),
        onTechView: (tech: Tech) => dispatch(onTechView(tech)),
    };
}

/**
 * Return an object which can contribute state information to the props
 * for a CartDisplay component
 *
 * @param {CivState} state
 * @returns {ICartDisplayStateProps}
 */
function mapState2Props(state: CivState): ICartDisplayStateProps {
    return {
        techInfos: getCartTechs(state),
        totalCost: getTotalCost(state),
        totalDiscountPrompt: getTotalDiscountPrompt(state),
    };
}

const Cart = connect(
    mapState2Props,
    mapDispatch2Props
)(CartDisplay);
export default Cart;
