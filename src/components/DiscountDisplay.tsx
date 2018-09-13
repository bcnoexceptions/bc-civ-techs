import * as React from "react";
import { ColorDiscount } from "../models/ColorDiscount";
import { IDiscount } from "../models/Discount";
import { NamedDiscount } from "../models/NamedDiscount";
import { Color } from "../models/Tech";

export interface IDiscountDisplayProps {
	discount: IDiscount;
}

/**
 * Component for listing one specific discount a tech or
 * selection is providing
 *
 * @export
 * @param {IDiscountDisplayProps} props
 * @returns
 */
export function DiscountDisplay(props: IDiscountDisplayProps) {
	if (props.discount instanceof NamedDiscount) {
		const nd = props.discount as NamedDiscount;
		return (
			<span>
				{nd.value} to {nd.techName}
			</span>
		);
	}
	if (props.discount instanceof ColorDiscount) {
		const cd = props.discount as ColorDiscount;
		const color = Color[cd.color];
		return (
			<span>
				{cd.value} to all <span className={color}>{color}</span> advances
			</span>
		);
	}
	return null;
}
