import * as React from "react";
import { Color, Tech } from "../models/Tech";
import { stopProp } from "../util/Utils";
import { DiscountListDisplay } from "./DiscountListDisplay";

export interface IHighlightedTechDisplayProps {
	tech?: Tech;
	onExit: () => void;
}

/**
 * Renders a tech using the detailed view in a popup
 *
 * @export
 * @param {IHighlightedTechDisplayProps} props
 * @returns
 */
export function HighlightedTechDisplay(props: IHighlightedTechDisplayProps) {
	if (!props.tech) {
		return null;
	}
	return (
		<div className="HighlightedTech modalLayer" onClick={props.onExit}>
			<div className="TechCardHolder" onClick={stopProp}>
				<h2
					className={
						"TechName " +
						Color[props.tech.color] +
						(props.tech.color2 ? " " + Color[props.tech.color2] : "")
					}
				>
					{props.tech.name}
				</h2>
				<div className="TechTextArea">
					<div className="TechLongText">{props.tech.longDesc}</div>
					{props.tech.prerequisite && <div className="TechPrereqs">Requires {props.tech.prerequisite}</div>}
					{props.tech.discounts.length > 0 && (
						<DiscountListDisplay discounts={props.tech.discounts} title="Discounts" />
					)}
				</div>
				<span className="closeButton" onClick={props.onExit} />
			</div>
		</div>
	);
}
