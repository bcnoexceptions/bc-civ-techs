import { connect } from "react-redux";
import { addToCart } from "../actions/CartActions";
import { viewTech } from "../actions/TechActions";
import {
    AvailableTechsDisplay,
    IAvailableTechsDispatchProps,
    IAvailableTechsStateProps,
} from "../components/AvailableTechsDisplay";
import { CivState, getTechCost } from "../models/State";
import { Tech } from "../models/Tech";
import TechWithCost from "../models/TechWithCost";
import { sortTechs } from "../models/UIState";

/**
 * Filter techs to those which may be purchased
 *
 * @param {CivState} state
 * @returns
 */
const getAvailableTechs = (state: CivState) => {
    const result: TechWithCost[] = [];
    for (const tech of state.inventory.present.fullTechList) {
        if (state.inventory.present.ownedTechs.indexOf(tech) >= 0) {
            continue;
        }
        if (state.inventory.present.cart.indexOf(tech) >= 0) {
            continue;
        }
        if (tech.prerequisite) {
            if (
                !state.inventory.present.ownedTechs.find(
                    owned => owned.name === tech.prerequisite
                )
            ) {
                continue;
            }
        }
        const oneInfo = new TechWithCost();
        oneInfo.cost = getTechCost(tech, state);
        oneInfo.tech = tech;
        result.push(oneInfo);
    }

    return sortTechs(result, state.uiState.activeSort);
};

/**
 * Event handler for when the user clicks a tech's "buy" button
 *
 * @param {Tech} tech
 * @returns
 */
function onTechBuy(tech: Tech) {
    return addToCart(tech);
}

/**
 * Event handler for when a user elects to view a tech
 *
 * @param {Tech} tech
 * @returns
 */
function onTechView(tech: Tech) {
    return viewTech(tech);
}

/**
 * Return an object which can contribute dispatch actions to the props
 * for a AvailableTechsDisplay component
 *
 * @param {*} dispatch
 * @returns {IAvailableTechsDispatchProps}
 */
function mapDispatch2Props(dispatch: any): IAvailableTechsDispatchProps {
    return {
        onTechSelect: (tech: Tech) => dispatch(onTechBuy(tech)),
        onTechView: (tech: Tech) => dispatch(onTechView(tech)),
    };
}

/**
 * Return an object which can contribute state information to the props
 * for a AvailableTechsDisplay component
 *
 * @param {CivState} state
 * @returns {IAvailableTechsStateProps}
 */
function mapState2Props(state: CivState): IAvailableTechsStateProps {
    return {
        techInfos: getAvailableTechs(state),
    };
}

const AvailableTechs = connect(
    mapState2Props,
    mapDispatch2Props
)(AvailableTechsDisplay);
export default AvailableTechs;
