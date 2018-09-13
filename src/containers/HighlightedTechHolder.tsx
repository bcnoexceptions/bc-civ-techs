import { connect } from "react-redux";
import { stopViewingTech } from "../actions/TechActions";
import { HighlightedTechDisplay } from "../components/HighlightedTechDisplay";
import { CivState } from "../models/State";

/**
 * Return an object which can contribute dispatch actions to the props
 * for a HighlightedTechDisplay component
 *
 * @param {*} dispatch
 * @returns
 */
function mapDispatch2Props(dispatch: any) {
    return {
        onExit: () => dispatch(stopViewingTech()),
    };
}

/**
 * Return an object which can contribute state information to the props
 * for a HighlightedTechDisplay component
 *
 * @param {CivState} state
 * @returns {*}
 */
function mapState2Props(state: CivState): any {
    return {
        tech: state.uiState.showingTech ? state.uiState.techBeingShown : null,
    };
}

const HighlightedTechHolder = connect(
    mapState2Props,
    mapDispatch2Props
)(HighlightedTechDisplay);
export default HighlightedTechHolder;
