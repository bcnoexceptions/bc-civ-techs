import { connect } from "react-redux";
import { switchRules } from "../actions/UIActions";
import { RuleSwitcherDisplay } from "../components/RuleSwitcherDisplay";
import { CivState } from "../models/State";

/**
 * Return an object which can contribute dispatch actions to the props
 * for a RuleSwitcherDisplay component
 *
 * @param {*} dispatch
 * @returns
 */
function mapDispatch2Props(dispatch: any) {
    return {
        onSwitch: () => dispatch(switchRules()),
    };
}

/**
 * Return an object which can contribute state information to the props
 * for a RuleSwitcherDisplay component
 *
 * @param {CivState} state
 * @returns {*}
 */
function mapState2Props(state: CivState): any {
    return {
        currentRules: state.inventory.present.activeRules,
    };
}

const RulesSwitcher = connect(
    mapState2Props,
    mapDispatch2Props
)(RuleSwitcherDisplay);
export default RulesSwitcher;
