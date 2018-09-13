import * as React from "react";
import { RuleSet } from "../models/RuleSet";

export type ClickHandler = () => void;

export interface IRuleSwitcherProps {
	onSwitch: ClickHandler;
	currentRules: RuleSet;
}

/**
 * Render the button to toggle between Advanced Civ and Mega Civ
 *
 * @export
 * @param {IRuleSwitcherProps} props
 * @returns
 */
export function RuleSwitcherDisplay(props: IRuleSwitcherProps) {
	return (
		<button onClick={props.onSwitch}>
			Rules: {props.currentRules === RuleSet.MegaCiv ? "Mega Civ" : "Advanced Civ"}
		</button>
	);
}
