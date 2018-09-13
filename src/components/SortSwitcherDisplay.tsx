import * as React from "react";
import { Sort } from "../models/UIState";

export interface ISortSwitcherStateProps {
	activeSort: Sort;
}

export interface ISortSwitcherDispatchProps {
	onSwitchSort: (method: Sort) => void;
}

export type ISortSwitcherProps = ISortSwitcherStateProps & ISortSwitcherDispatchProps;

/**
 * Render the dropdown that lets the user change how techs are sorted
 *
 * @export
 * @class SortSwitcherDisplay
 * @extends {React.Component<ISortSwitcherProps, any>}
 */
export default class SortSwitcherDisplay extends React.Component<ISortSwitcherProps, any> {
	public constructor(props: ISortSwitcherProps) {
		super(props);
		this.onSwitchSort = this.onSwitchSort.bind(this);
	}

	/**
	 * Event handler for when the user changes the sort
	 *
	 * @param {React.ChangeEvent<HTMLSelectElement>} e
	 * @memberof SortSwitcherDisplay
	 */
	public onSwitchSort(e: React.ChangeEvent<HTMLSelectElement>) {
		this.props.onSwitchSort(parseInt(e.target.value, 10) as Sort);
	}

	/**
	 * Render the dropdown
	 *
	 * @returns
	 * @memberof SortSwitcherDisplay
	 */
	public render() {
		return (
			<div className="sortHolder">
				Sort:{" "}
				<select onChange={this.onSwitchSort}>
					<option value={Sort.Alpha} selected={this.props.activeSort === Sort.Alpha}>
						Name
					</option>
					<option value={Sort.Cost} selected={this.props.activeSort === Sort.Cost}>
						Cost
					</option>
					<option value={Sort.Color} selected={this.props.activeSort === Sort.Color}>
						Color
					</option>
				</select>
			</div>
		);
	}
}
