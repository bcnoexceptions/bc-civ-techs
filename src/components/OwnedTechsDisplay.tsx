import * as React from "react";
import { ColorDiscount } from "../models/ColorDiscount";
import { Color, Tech } from "../models/Tech";
import { DiscountListDisplay } from "./DiscountListDisplay";
import TechDisplay, { ClickHandler } from "./TechDisplay";

export interface IOwnedTechsDisplayProps {
	techs: Tech[];
	onTechView: ClickHandler;
	totalValue: number;
	selectedDiscounts: ColorDiscount[];
}

/**
 * Render all of the techs and discounts the user has selected
 *
 * @param {IOwnedTechsDisplayProps} props
 * @returns
 */
const OwnedTechsDisplay: React.SFC<IOwnedTechsDisplayProps> = (props: IOwnedTechsDisplayProps) => {
	if (props.techs.length === 0) {
		return (
			<div className="OwnedTechs">
				<h1>Owned Techs</h1>
				<em className="empty">You haven't gotten any techs.</em>
			</div>
		);
	}
	return (
		<div className="OwnedTechs">
			<h1>Owned Techs</h1>
			<ul>
				{props.techs.map(tech => (
					<li
						key={"Cart" + tech.name}
						className={"TechDisplay " + Color[tech.color] + (tech.color2 ? " " + Color[tech.color2] : "")}
					>
						<TechDisplay tech={tech} onView={props.onTechView} hideCosts={true} />
					</li>
				))}
			</ul>
			<div className="TotalHolder">Total value: {props.totalValue}</div>
			{props.selectedDiscounts.length > 0 && (
				<DiscountListDisplay discounts={props.selectedDiscounts} title="Bonus Discounts" />
			)}
		</div>
	);
};

export default OwnedTechsDisplay;
