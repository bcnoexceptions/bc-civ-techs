import * as React from "react";
import AvailableTechs from "../containers/AvailableTechs";
import Cart from "../containers/Cart";
import OwnedTechs from "../containers/OwnedTechs";
import { Aux, nop } from "../util/Utils";

export interface ITabSwitcherStateProps {
	viewingOwnedTechs: boolean;
}
export interface ITabSwitcherDispatchProps {
	onSwitch: () => void;
}

export type ITabSwitcherDisplayProps = ITabSwitcherStateProps & ITabSwitcherDispatchProps;

/**
 * Render the tab bar for switching between techs you could buy, and techs you have
 *
 * @export
 * @param {ITabSwitcherDisplayProps} props
 * @returns
 */
export function TabSwitcherDisplay(props: ITabSwitcherDisplayProps) {
	const mallTab = (
		<span
			className={props.viewingOwnedTechs ? "tab" : "tab active"}
			onClick={props.viewingOwnedTechs ? props.onSwitch : nop}
		>
			Available
		</span>
	);
	const ownedTab = (
		<span
			className={props.viewingOwnedTechs ? "tab active" : "tab"}
			onClick={props.viewingOwnedTechs ? nop : props.onSwitch}
		>
			Owned
		</span>
	);

	const tabBar = (
		<div className="MainTabs">
			{mallTab}
			{ownedTab}
		</div>
	);

	if (props.viewingOwnedTechs) {
		return (
			<Aux>
				{tabBar}
				<div className="CivTechs">
					<OwnedTechs />
				</div>
			</Aux>
		);
	} else {
		return (
			<Aux>
				{tabBar}
				<div className="CivTechs">
					<AvailableTechs />
					<Cart />
				</div>
			</Aux>
		);
	}
}
