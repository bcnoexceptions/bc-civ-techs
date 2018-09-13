import { connect } from "react-redux";
import { viewTech } from "../actions/TechActions";
import OwnedTechsDisplay from "../components/OwnedTechsDisplay";
import { RuleSet } from "../models/RuleSet";
import { CivState } from "../models/State";
import { Tech } from "../models/Tech";

/**
 * Pulls the owned techs out of the state
 *
 * @param {Tech[]} ownedTechs
 * @returns
 */
const getOwnedTechs = (ownedTechs: Tech[]) => {
    return ownedTechs;
};

/**
 * Calculates the total point value of the user's owned techs
 *
 * @param {Tech[]} ownedTechs
 * @param {RuleSet} rules
 * @returns
 */
const calcTechValue = (ownedTechs: Tech[], rules: RuleSet) => {
    if (rules === RuleSet.AdvancedCiv) {
        return ownedTechs.reduce(
            (sum: number, tech: Tech) => sum + tech.baseCost,
            0
        );
    } else {
        return ownedTechs.reduce((sum: number, tech: Tech) => {
            if (tech.baseCost >= 200) {
                return sum + 6;
            } else if (tech.baseCost >= 100) {
                return sum + 3;
            } else {
                return sum + 1;
            }
        }, 0);
    }
};

/**
 * Event handler for when the user pulls up detailed info on an owned tech
 *
 * @param {Tech} tech
 * @returns
 */
function onTechView(tech: Tech) {
    return viewTech(tech);
}

/**
 * Return an object which can contribute dispatch actions to the props
 * for a OwnedTechsDisplay component
 *
 * @param {*} dispatch
 * @returns
 */
function mapDispatch2Props(dispatch: any) {
    return {
        onTechView: (tech: Tech) => dispatch(onTechView(tech)),
    };
}

/**
 * Return an object which can contribute state information to the props
 * for a OwnedTechsDisplay component
 *
 * @param {CivState} state
 * @returns {*}
 */
function mapState2Props(state: CivState): any {
    return {
        selectedDiscounts: state.inventory.present.selectedDiscounts,
        techs: getOwnedTechs(state.inventory.present.ownedTechs),
        totalValue: calcTechValue(
            state.inventory.present.ownedTechs,
            state.inventory.present.activeRules
        ),
    };
}

const OwnedTechs = connect(
    mapState2Props,
    mapDispatch2Props
)(OwnedTechsDisplay);
export default OwnedTechs;
