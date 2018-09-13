import * as React from "react";
import { Color } from "../models/Tech";
import TechWithCost from "../models/TechWithCost";
import CartTechDisplay from "./CartTechDisplay";
import { ClickHandler } from "./TechDisplay";

export interface ICartDisplayDispatchProps {
	onTechSelect: ClickHandler;
	onTechView: ClickHandler;
	onBuy: () => void;
	onPromptDiscounts: (totalDiscountAmount: number) => void;
}

export interface ICartDisplayStateProps {
	techInfos: TechWithCost[];
	totalCost: number;
	totalDiscountPrompt: number;
}

export type ICartDisplayProps = ICartDisplayDispatchProps & ICartDisplayStateProps;

/**
 * Component for showing the list of techs in the cart
 * Triggers onTechView for viewing a tech in the popup,
 *  onBuy for buying the whole cart,
 *  onPromptDiscounts if the buy operation means we need to
 *    select discounts too
 *
 * @export
 * @class CartDisplay
 * @extends {React.Component<ICartDisplayProps>}
 */
export class CartDisplay extends React.Component<ICartDisplayProps> {
	public constructor(props: ICartDisplayProps) {
		super(props);

		this.onCheckout = this.onCheckout.bind(this);
	}

	public onCheckout() {
		this.props.onBuy();
		if (this.props.totalDiscountPrompt > 0) {
			this.props.onPromptDiscounts(this.props.totalDiscountPrompt);
		}
	}

	public render() {
		if (this.props.techInfos.length === 0) {
			return (
				<div className="Cart">
					<h1>Cart</h1>
					<em className="empty">Your cart is empty</em>
				</div>
			);
		}

		return (
			<div className="Cart">
				<h1>Cart</h1>
				<ul className="">
					{this.props.techInfos.map(techInfo => (
						<li
							key={"Available" + techInfo.tech.name}
							className={
								"TechDisplay " +
								Color[techInfo.tech.color] +
								(techInfo.tech.color2 ? " " + Color[techInfo.tech.color2] : "")
							}
						>
							<CartTechDisplay
								tech={techInfo.tech}
								onSelect={this.props.onTechSelect}
								onView={this.props.onTechView}
								discountedCost={techInfo.cost}
							/>
						</li>
					))}
				</ul>
				<div className="BuyCartArea">
					Total Cost: {this.props.totalCost}{" "}
					<button onClick={this.onCheckout} className="BuyCartButton">
						Checkout
					</button>
				</div>
			</div>
		);
	}
}
