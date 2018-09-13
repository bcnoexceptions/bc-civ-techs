import { connect } from "react-redux";
import { switchTab } from "../actions/UIActions";
import {
    ITabSwitcherDispatchProps,
    ITabSwitcherStateProps,
    TabSwitcherDisplay,
} from "../components/TabSwitcherDisplay";
import { CivState } from "../models/State";

/**
 * Return an object which can contribute dispatch actions to the props
 * for a TabSwitcherDisplay component
 *
 * @param {*} dispatch
 * @returns {ITabSwitcherDispatchProps}
 */
function mapDispatch2Props(dispatch: any): ITabSwitcherDispatchProps {
    return {
        onSwitch: () => dispatch(switchTab()),
    };
}

/**
 * Return an object which can contribute state information to the props
 * for a TabSwitcherDisplay component
 *
 * @param {CivState} state
 * @returns {ITabSwitcherStateProps}
 */
function mapState2Props(state: CivState): ITabSwitcherStateProps {
    return {
        viewingOwnedTechs: state.uiState.showingOwnedTechs,
    };
}

const TabSwitcher = connect(
    mapState2Props,
    mapDispatch2Props
)(TabSwitcherDisplay);
export default TabSwitcher;
