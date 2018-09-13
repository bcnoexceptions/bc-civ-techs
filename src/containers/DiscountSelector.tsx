import { connect } from "react-redux";
import {
    adjustColor,
    adjustSlider,
    cancelDiscounts,
    confirmDiscounts,
    createDiscount,
    removeDiscount,
} from "../actions/DiscountActions";
import DiscountSelectControl, {
    IDiscountSelectorDisplayDispatchProps,
    IDiscountSelectorDisplayStateProps,
} from "../components/DiscountSelectorDisplay";
import { ColorDiscount } from "../models/ColorDiscount";
import { MIN_DISCOUNT } from "../models/RuleSet";
import { CivState } from "../models/State";
import { Color } from "../models/Tech";

/**
 * Return an object which can contribute dispatch actions to the props
 * for a DiscountSelectControl component
 *
 * @param {CivState} state
 * @returns {IDiscountSelectorDisplayStateProps}
 */
const mapState2Props = (
    state: CivState
): IDiscountSelectorDisplayStateProps => {
    return {
        currentDiscounts: state.uiState.selectedDiscounts,
        granularity: MIN_DISCOUNT,
        total: state.uiState.discountPromptTotal,
    };
};

/**
 * Return an object which can contribute state information to the props
 * for a DiscountSelectControl component
 *
 * @param {*} dispatch
 * @returns {IDiscountSelectorDisplayDispatchProps}
 */
const mapDispatch2Props = (
    dispatch: any
): IDiscountSelectorDisplayDispatchProps => {
    return {
        onAdjustSlider: (pos: number, newValue: number) => {
            dispatch(adjustSlider(pos, newValue));
        },
        onCancel: () => {
            dispatch(cancelDiscounts());
        },
        onChangeDiscountColor: (pos: number, newColor: Color) => {
            dispatch(adjustColor(pos, newColor));
        },
        onConfirm: (discounts: ColorDiscount[]) => {
            dispatch(confirmDiscounts(discounts));
        },
        onCreateDiscount: () => {
            dispatch(createDiscount());
        },
        onRemoveDiscount: (pos: number) => {
            dispatch(removeDiscount(pos));
        },
    };
};

export default connect(
    mapState2Props,
    mapDispatch2Props
)(DiscountSelectControl);
