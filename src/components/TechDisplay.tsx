import * as React from "react";
import { Color, Tech } from "../models/Tech";

export type ClickHandler = (tech: Tech) => void;

interface ITechDisplayProps {
	tech: Tech;
	onView: ClickHandler;
	discountedCost?: number;
	hideCosts?: boolean;
	selectLinkClass?: string;
	selectLinkText?: string;
}

/**
 * Render a single tech from a list
 *
 * @export
 * @class TechDisplay
 * @extends {React.Component<ITechDisplayProps, any>}
 */
export default class TechDisplay extends React.Component<ITechDisplayProps, any> {
	public constructor(props: ITechDisplayProps) {
		super(props);
		this.onView = this.onView.bind(this);
	}

	/**
	 * Event handler for when the user clicks to view more info about the tech
	 *
	 * @memberof TechDisplay
	 */
	public onView() {
		this.props.onView(this.props.tech);
	}

	/**
	 * Display the summary info for the tech
	 *
	 * @returns
	 * @memberof TechDisplay
	 */
	public render() {
		return (
			<div
				className={
					"TechDisplay " +
					Color[this.props.tech.color] +
					(this.props.tech.color2 ? " " + Color[this.props.tech.color2] : "")
				}
				onClick={this.onView}
			>
				<h2 className="TechName">{this.props.tech.name}</h2>
				<span className="TechDesc">
					<span title={this.props.tech.description}>{this.props.tech.description}</span>
				</span>
			</div>
		);
	}
}
