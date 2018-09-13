import { connect } from "react-redux";
import { sort } from "../actions/UIActions";
import SortSwitcherDisplay, {
    ISortSwitcherDispatchProps,
    ISortSwitcherStateProps,
} from "../components/SortSwitcherDisplay";
import { CivState } from "../models/State";
import { Sort } from "../models/UIState";

/**
 * Return an object which can contribute dispatch actions to the props
 * for a SortSwitcherDisplay component
 *
 * @param {CivState} state
 * @returns {ISortSwitcherStateProps}
 */
const mapStateToProps = (state: CivState): ISortSwitcherStateProps => ({
    activeSort: state.uiState.activeSort,
});

/**
 * Return an object which can contribute state information to the props
 * for a SortSwitcherDisplay component
 *
 * @param {*} dispatch
 * @returns {ISortSwitcherDispatchProps}
 */
const mapDispatchToProps = (dispatch: any): ISortSwitcherDispatchProps => ({
    onSwitchSort: (selectedSort: Sort) => dispatch(sort(selectedSort)),
});

const SortSwitcher = connect(
    mapStateToProps,
    mapDispatchToProps
)(SortSwitcherDisplay);

export default SortSwitcher;
