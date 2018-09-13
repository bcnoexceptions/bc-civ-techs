import { ColorDiscount } from "../models/ColorDiscount";
import { Color, Tech } from "../models/Tech";
import { Sort } from "../models/UIState";

export interface IAction {
	type: string;
}

export const Actions = {
	ADD_TO_CART: "ADD_TO_CART",
	BUY_CART: "BUY_CART",
	DISCOUNTS_ADJUST_ONE: "DISCOUNTS_ADJUST_ONE",
	DISCOUNTS_CANCEL: "DISCOUNTS_CANCEL",
	DISCOUNTS_CHANGE_ONE_COLOR: "DISCOUNTS_CHANGE_ONE_COLOR",
	DISCOUNTS_CONFIRM: "DISCOUNTS_CONFIRM",
	DISCOUNTS_CREATE_ONE: "DISCOUNTS_CREATE_ONE",
	DISCOUNTS_PROMPT: "DISCOUNTS_PROMPT",
	DISCOUNTS_REMOVE_ONE: "DISCOUNTS_REMOVE_ONE",
	REMOVE_FROM_CART: "REMOVE_FROM_CART",
	STOP_VIEWING_TECH: "STOP_VIEWING_TECH",
	SWITCH_RULES: "SWITCH_RULES",
	SWITCH_SORT: "SWITCH_SORT",
	SWITCH_TAB: "SWITCH_TAB",
	VIEW_TECH: "VIEW_TECH",
};

export class ImperativeAction implements IAction {
	public type: string;
}

// tslint:disable-next-line:max-classes-per-file
export class TechAction implements IAction {
	public type: string;
	public tech: Tech;
}

// tslint:disable-next-line:max-classes-per-file
export class NumericAction implements IAction {
	public type: string;
	public value: number;
}

// tslint:disable-next-line:max-classes-per-file
export class SortAction implements IAction {
	public type: string;
	public method: Sort;
}

// tslint:disable-next-line:max-classes-per-file
export class DiscountSelectionAction implements IAction {
	public type: string;
	public discounts: ColorDiscount[];
}

// tslint:disable-next-line:max-classes-per-file
export class DiscountByNumberAction implements IAction {
	public type: string;
	public index: number;
}

// tslint:disable-next-line:max-classes-per-file
export class DiscountChangeColorAction extends DiscountByNumberAction {
	public color: Color;
}

// tslint:disable-next-line:max-classes-per-file
export class DiscountChangeValueAction extends DiscountByNumberAction {
	public newValue: number;
}
