import * as React from "react";
import { Color, Tech } from "../models/Tech";
import TechWithCost from "../models/TechWithCost";
import BuyableTechDisplay from "./BuyableTechDisplay";

export interface IAvailableTechsStateProps {
	techInfos: TechWithCost[];
}

export interface IAvailableTechsDispatchProps {
	onTechSelect: (tech: Tech) => void;
	onTechView: (tech: Tech) => void;
}

export type IAvailableTechsDisplayProps = IAvailableTechsStateProps & IAvailableTechsDispatchProps;

/**
 * Component for listing techs a user could buy.
 * Triggers onTechSelect when a tech is added to the cart,
 *  and onTechView when a user just opens a tech in the popup
 *
 * @export
 * @class AvailableTechsDisplay
 * @extends {React.Component<IAvailableTechsDisplayProps, any>}
 */
export class AvailableTechsDisplay extends React.Component<IAvailableTechsDisplayProps, any> {
	public render() {
		if (this.props.techInfos.length === 0) {
			return (
				<div className="AvailableTechs">
					<h1>AvailableTechs</h1>
					<em className="empty">There are no more techs to buy!</em>
				</div>
			);
		}

		return (
			<div className="AvailableTechs">
				<h1>Available Techs</h1>
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
							<BuyableTechDisplay
								tech={techInfo.tech}
								onSelect={this.props.onTechSelect}
								onView={this.props.onTechView}
								discountedCost={techInfo.cost}
							/>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
