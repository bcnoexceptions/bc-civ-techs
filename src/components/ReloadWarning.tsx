export interface IReloadWarningProps {
	_unused?: object;
}

/**
 * Component for listing one specific discount a tech or
 * selection is providing
 *
 * @export
 * @param {IReloadWarningProps} props
 * @returns
 */
export default function ReloadWarning(props: IReloadWarningProps) {
	window.removeEventListener("beforeunload", onExit);
	window.addEventListener("beforeunload", onExit);
	return null;
}

function onExit(e: Event) {
	e.preventDefault();
	e.returnValue = "Exiting will lose all saved state - continue?" as any;
}

