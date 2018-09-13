import * as React from "react";
import { Aux } from "../util/Utils";

export interface IUndoRedoStateProps {
	undoEnabled: boolean;
	redoEnabled: boolean;
}

export interface IUndoRedoDispatchProps {
	onUndo: () => void;
	onRedo: () => void;
}

export type IUndoRedoDisplayProps = IUndoRedoStateProps & IUndoRedoDispatchProps;

/**
 * Render the undo and redo buttons
 *
 * @param {*} props
 * @returns
 */
const UndoRedoDisplay: React.SFC<IUndoRedoDisplayProps> = props => {
	return (
		<Aux>
			<button onClick={props.onUndo} disabled={!props.undoEnabled}>
				Undo
			</button>
			<button onClick={props.onRedo} disabled={!props.redoEnabled}>
				Redo
			</button>
		</Aux>
	);
};

export default UndoRedoDisplay;
