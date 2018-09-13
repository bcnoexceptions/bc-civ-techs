import { connect } from "react-redux";
import { ActionCreators } from "redux-undo";
import UndoRedoDisplay, {
    IUndoRedoDispatchProps,
    IUndoRedoStateProps,
} from "../components/UndoRedoDisplay";
import { CivState } from "../models/State";

/**
 * Return an object which can contribute dispatch actions to the props
 * for a UndoRedoDisplay component
 *
 * @param {*} dispatch
 * @returns {IUndoRedoDispatchProps}
 */
function mapDispatch2Props(dispatch: any): IUndoRedoDispatchProps {
    return {
        onRedo: () => dispatch(ActionCreators.redo()),
        onUndo: () => dispatch(ActionCreators.undo()),
    };
}

/**
 * Return an object which can contribute state information to the props
 * for a UndoRedoDisplay component
 *
 * @param {CivState} state
 * @returns {IUndoRedoStateProps}
 */
function mapState2Props(state: CivState): IUndoRedoStateProps {
    return {
        redoEnabled: state.inventory.future.length > 0,
        undoEnabled: state.inventory.past.length > 0,
    };
}

const UndoRedo = connect(
    mapState2Props,
    mapDispatch2Props
)(UndoRedoDisplay);
export default UndoRedo;
