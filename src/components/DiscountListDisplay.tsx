import * as React from "react";
import { IDiscount } from "../models/Discount";
import { DiscountDisplay } from "./DiscountDisplay";

export interface IDiscountListDisplayProps {
	discounts: IDiscount[];
	title: string;
}

/**
 * Component for listing all the discounts provided by some source
 *
 * @export
 * @param {IDiscountListDisplayProps} props
 * @returns
 */
export function DiscountListDisplay(props: IDiscountListDisplayProps) {
	return (
		<div className="DiscountList">
			<h3>{props.title}</h3>
			<ul>
				{props.discounts.map(discount => (
					<li key={discount.key()}>
						<DiscountDisplay discount={discount} />
					</li>
				))}
			</ul>
		</div>
	);
}
