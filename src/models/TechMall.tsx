import { IDiscount } from "./Discount";
import { loadAdvanceCivTechs, RuleSet } from "./RuleSet";
import { Tech } from "./Tech";

/**
 * Represents all the buyable techs, along with ones currently
 * in the user's cart/inventory, and discounts the user has selected
 *
 * @export
 * @class TechMall
 */
export class TechMall {
    public activeRules: RuleSet;
    public ownedTechs: Tech[];
    public cart: Tech[];
    public selectedDiscounts: IDiscount[];
    public fullTechList: Tech[];

    public constructor() {
        this.fullTechList = loadAdvanceCivTechs();
        this.ownedTechs = [];
        this.cart = [];
        this.selectedDiscounts = [];
        this.activeRules = RuleSet.AdvancedCiv;
    }

    /**
     * Copy the current mall state
     *
     * @returns {TechMall}
     * @memberof TechMall
     */
    public clone(): TechMall {
        const result: TechMall = new TechMall();
        result.fullTechList = this.fullTechList;
        result.ownedTechs = this.ownedTechs.slice();
        result.cart = this.cart.slice();
        result.selectedDiscounts = this.selectedDiscounts.slice();
        result.activeRules = this.activeRules;
        return result;
    }
}
