import * as React from "react";
import ReloadWarning from "./components/ReloadWarning";
import DiscountSelector from "./containers/DiscountSelector";
import HighlightedTechHolder from "./containers/HighlightedTechHolder";
import RulesSwitcher from "./containers/RuleSwitcher";
import SortSwitcher from "./containers/SortSwitcher";
import TabSwitcher from "./containers/TabSwitcher";
import UndoRedo from "./containers/UndoRedo";
import "./styles/Animation.css";
import "./styles/App.css";
import "./styles/Layout.css";
import "./styles/Tech.css";
import "./styles/Toolbar.css";
import { Aux } from "./util/Utils";

class App extends React.Component {
	public render() {
		return (
			<Aux>
				<TabSwitcher />
				<div className="Toolbar">
					<SortSwitcher />
					<RulesSwitcher />
					<UndoRedo />
				</div>
				<HighlightedTechHolder />
				<DiscountSelector />
				<ReloadWarning />
			</Aux>
		);
	}
}

export default App;
