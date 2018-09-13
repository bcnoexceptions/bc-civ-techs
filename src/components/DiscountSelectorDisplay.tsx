import * as React from "react";
import { ColorDiscount } from "../models/ColorDiscount";
import { Color } from "../models/Tech";
import "../styles/DiscountSelector.css";
import { nodeIndexWithinParent, stopProp } from "../util/Utils";

export interface IDiscountSelectorDisplayStateProps {
	total: number;
	granularity: number;
	currentDiscounts: ColorDiscount[];
}

export interface IDiscountSelectorDisplayDispatchProps {
	onCreateDiscount: () => void;
	onRemoveDiscount: (pos: number) => void;
	onAdjustSlider: (pos: number, newValue: number) => void;
	onChangeDiscountColor: (pos: number, newColor: Color) => void;
	onConfirm: (discounts: ColorDiscount[]) => void;
	onCancel: () => void;
}

export type IDiscountSelectorDisplayProps = IDiscountSelectorDisplayStateProps & IDiscountSelectorDisplayDispatchProps;

/**
 * Component for displaying the popup where a user can select discounts
 * awarded by techs.
 *
 * @export
 * @class DiscountSelectControl
 * @extends {React.Component<IDiscountSelectorDisplayProps, any>}
 */
export default class DiscountSelectControl extends React.Component<IDiscountSelectorDisplayProps, any> {
	constructor(props: IDiscountSelectorDisplayProps) {
		super(props);
		this.addDiscount = this.addDiscount.bind(this);
		this.removeDiscount = this.removeDiscount.bind(this);
		this.onSlide = this.onSlide.bind(this);
		this.onSwitchColor = this.onSwitchColor.bind(this);
		this.confirmDiscounts = this.confirmDiscounts.bind(this);
	}

	/**
	 * Render the discount selector (a series of sliders)
	 *
	 * @returns
	 * @memberof DiscountSelectControl
	 */
	public render() {
		if (this.props.currentDiscounts === null || this.props.currentDiscounts.length === 0) {
			return null;
		}

		const maxDiscount = this.calcMaxDiscount();
		const ticks = [];
		for (let i = this.props.granularity; i <= maxDiscount; i += this.props.granularity) {
			ticks.push(<option value={i} />);
		}

		return (
			<div className="DiscountSelectHolder modalLayer">
				<div className="DiscountSelector" onClick={stopProp}>
					<h2>Select Discounts</h2>
					<h3>Total value: {" " + this.props.total}</h3>
					<ul className="inProgressDiscounts">
						{this.props.currentDiscounts.map(discount => this.oneDiscountDisplay(discount))}
					</ul>
					{this.canAdd() && (
						<div className="addDiscountHolder">
							<button onClick={this.addDiscount}>Add Discount</button>
						</div>
					)}
					<div className="confirmDiscountsHolder">
						<button onClick={this.confirmDiscounts}>Confirm!</button>
					</div>
					<datalist id="discountTicks">{ticks}</datalist>
				</div>
			</div>
		);
	}

	/**
	 * Render a single discount + its slider (if appropriate)
	 *
	 * @private
	 * @param {ColorDiscount} discount The discount to render
	 * @returns
	 * @memberof DiscountSelectControl
	 */
	private oneDiscountDisplay(discount: ColorDiscount) {
		if (this.props.currentDiscounts.length === 1) {
			// only one discount, no slider
			return (
				<li>
					<div className="discountSummary">
						<span className="colorArea">
							Color: <select onChange={this.onSwitchColor}>{this.renderColorOptions(discount)}</select>
						</span>
						<span className="valueArea">Value: {discount.value}</span>
					</div>
				</li>
			);
		}
		const max = this.calcMaxDiscount();

		return (
			<li>
				<div className="discountSummary">
					<span className="colorArea">
						Color: <select onChange={this.onSwitchColor}>{this.renderColorOptions(discount)}</select>
					</span>
					<span className="valueArea">Value: {discount.value}</span>
				</div>
				<div className="sliderHolder">
					{max !== this.props.granularity && (
						<input
							type="range"
							min={this.props.granularity}
							max={max}
							value={discount.value}
							step={this.props.granularity}
							onChange={this.onSlide}
							list="discountTicks"
						/>
					)}
				</div>

				{this.canRemove() && (
					<span className="deleteButton" onClick={this.removeDiscount} title="Remove Discount" />
				)}
			</li>
		);
	}

	/**
	 * Render the list of `option` elements for the colors a discount could be
	 *
	 * @private
	 * @param {ColorDiscount} discount the discount, used to showing which option is selected
	 * @returns {JSX.Element[]}
	 * @memberof DiscountSelectControl
	 */
	private renderColorOptions(discount: ColorDiscount): JSX.Element[] {
		const enums: number[] = [];
		for (const item in Color) {
			if (Color.hasOwnProperty(item)) {
				const itemAsInt = parseInt(item, 10);
				if (!isNaN(itemAsInt)) {
					enums.push(itemAsInt);
				}
			}
		}

		return enums.map(colorNum => (
			<option value={colorNum} selected={discount.color === colorNum} key={colorNum}>
				{Color[colorNum]}
			</option>
		));
	}

	/**
	 * Calculate the maximum any of the sliders may be set to
	 *
	 * @private
	 * @returns {number}
	 * @memberof DiscountSelectControl
	 */
	private calcMaxDiscount(): number {
		return this.props.total - (this.props.currentDiscounts.length - 1) * this.props.granularity;
	}

	/**
	 * Event handler for when a new color is selected for a discount
	 *
	 * @private
	 * @param {React.ChangeEvent<HTMLSelectElement>} event
	 * @memberof DiscountSelectControl
	 */
	private onSwitchColor(event: React.ChangeEvent<HTMLSelectElement>) {
		const pos = this.findElementPosition(event);
		this.props.onChangeDiscountColor(pos, parseInt(event.target.value, 10));
	}

	/**
	 * Determine whether a new discount may be added
	 *
	 * @private
	 * @returns
	 * @memberof DiscountSelectControl
	 */
	private canAdd() {
		return this.props.currentDiscounts.some(discount => discount.value > this.props.granularity);
	}

	/**
	 * Event handler for when the user tries to add a discount
	 *
	 * @private
	 * @returns
	 * @memberof DiscountSelectControl
	 */
	private addDiscount() {
		if (!this.canAdd()) {
			return;
		}
		this.props.onCreateDiscount();
	}

	/**
	 * Determines whether a discount may be removed
	 *
	 * @private
	 * @returns
	 * @memberof DiscountSelectControl
	 */
	private canRemove() {
		return this.props.currentDiscounts.length > 1;
	}

	/**
	 * Event handler for when a user tries to remove a discount
	 *
	 * @private
	 * @param {React.MouseEvent} event
	 * @returns
	 * @memberof DiscountSelectControl
	 */
	private removeDiscount(event: React.MouseEvent) {
		if (!this.canRemove()) {
			return;
		}
		const pos: number = this.findElementPosition(event);
		this.props.onRemoveDiscount(pos);
	}

	/**
	 * Event handler for when a user confirms her discount selections
	 *
	 * @private
	 * @param {React.MouseEvent} event
	 * @memberof DiscountSelectControl
	 */
	private confirmDiscounts(event: React.MouseEvent) {
		this.props.onConfirm(this.props.currentDiscounts);
	}

	/**
	 * Event handler for when a discount slider is adjusted
	 *
	 * @private
	 * @param {React.ChangeEvent<HTMLInputElement>} event
	 * @memberof DiscountSelectControl
	 */
	private onSlide(event: React.ChangeEvent<HTMLInputElement>) {
		const pos: number = this.findElementPosition(event);
		const sliderValue: number = parseInt(event.target.value, 10);
		this.props.onAdjustSlider(pos, sliderValue);
	}

	/**
	 * Given an event, find the discount it applies to
	 *
	 * @private
	 * @param {React.SyntheticEvent} event The event from the UI
	 * @returns The position of the active discount in the array
	 * @memberof DiscountSelectControl
	 */
	private findElementPosition(event: React.SyntheticEvent) {
		let li: Element = event.target as Element;
		while (li.tagName !== "LI") {
			if (li.parentElement === null) {
				return -1;
			}
			li = li.parentElement;
		}
		return nodeIndexWithinParent(li);
	}
}
