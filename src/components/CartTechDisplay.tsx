import * as React from "react";
import { Color, Tech } from "../models/Tech";

type ClickHandler = (tech: Tech) => void;

export interface ICartTechDisplayProps {
	tech: Tech;
	onView: ClickHandler;
	onSelect: ClickHandler;
	discountedCost: number;
}

/**
 * Component for viewing one specific tech in the cart
 * Triggers onView to view a tech in the popup,
 *  and onSelect to remove a tech from the cart
 *
 * @export
 * @class CartTechDisplay
 * @extends {React.Component<ICartTechDisplayProps, any>}
 */
export default class CartTechDisplay extends React.Component<ICartTechDisplayProps, any> {
	public constructor(props: ICartTechDisplayProps) {
		super(props);
		this.onSelect = this.onSelect.bind(this);
		this.onView = this.onView.bind(this);
	}

	/**
	 * Event handler for when a tech is removed from the cart
	 *
	 * @param {React.MouseEvent<HTMLElement>} e
	 * @memberof CartTechDisplay
	 */
	public onSelect(e: React.MouseEvent<HTMLElement>) {
		this.props.onSelect(this.props.tech);
		e.stopPropagation();
	}

	/**
	 * Event handler for when a tech is selected to be viewed
	 *
	 * @memberof CartTechDisplay
	 */
	public onView() {
		this.props.onView(this.props.tech);
	}

	/**
	 * Render a single tech from the "cart"
	 *
	 * @returns
	 * @memberof CartTechDisplay
	 */
	public render() {
		return (
			<div
				className={
					"CartTech TechDisplay " +
					Color[this.props.tech.color] +
					(this.props.tech.color2 ? " " + Color[this.props.tech.color2] : "")
				}
				onClick={this.onView}
			>
				<h2 className="TechName">{this.props.tech.name}</h2>
				<span className="TechDesc">
					<span title={this.props.tech.description}>{this.props.tech.description}</span>
				</span>
				<span className="RemoveArea" onClick={this.onSelect}>
					<span className="centered">Remove from cart</span>
				</span>
			</div>
		);
	}
}
