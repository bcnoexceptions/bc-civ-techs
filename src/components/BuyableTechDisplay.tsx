import * as React from "react";
import { Color, Tech } from "../models/Tech";

type ClickHandler = (tech: Tech) => void;

export interface IBuyableTechDisplayProps {
	tech: Tech;
	onView: ClickHandler;
	onSelect: ClickHandler;
	discountedCost: number;
}

/**
 * Component for showing one particular tech that could be bought
 * Triggers onView when the tech is to be viewed in "long description" mode,
 *   and onSelect to add to the cart
 *
 * @export
 * @class BuyableTechDisplay
 * @extends {React.Component<IBuyableTechDisplayProps, any>}
 */
export default class BuyableTechDisplay extends React.Component<IBuyableTechDisplayProps, any> {
	public constructor(props: IBuyableTechDisplayProps) {
		super(props);
		this.onSelect = this.onSelect.bind(this);
		this.onView = this.onView.bind(this);
	}

	/**
	 * Event handler for when the tech is selected to be added to the cart
	 *
	 * @param {React.MouseEvent<HTMLElement>} e
	 * @memberof BuyableTechDisplay
	 */
	public onSelect(e: React.MouseEvent<HTMLElement>) {
		this.props.onSelect(this.props.tech);
		e.stopPropagation();
	}

	/**
	 * Event handler for when a tech is selected to be viewed
	 *
	 * @memberof BuyableTechDisplay
	 */
	public onView() {
		this.props.onView(this.props.tech);
	}

	/**
	 * Render the tech that is available for purchase
	 *
	 * @returns
	 * @memberof BuyableTechDisplay
	 */
	public render() {
		return (
			<div
				className={
					"BuyableTech TechDisplay " +
					Color[this.props.tech.color] +
					(this.props.tech.color2 ? " " + Color[this.props.tech.color2] : "")
				}
				onClick={this.onView}
			>
				<h2 className="TechName">{this.props.tech.name}</h2>
				<span className="TechDesc">
					<span title={this.props.tech.description}>{this.props.tech.description}</span>
				</span>
				<span className="BuyArea" onClick={this.onSelect}>
					<span className="centered">
						<span className="AdjustedCost">{this.props.discountedCost}</span>
						<br />
						<span className="BaseCost">(base: {this.props.tech.baseCost})</span>
					</span>
				</span>
			</div>
		);
	}
}
