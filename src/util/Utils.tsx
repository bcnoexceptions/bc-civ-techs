export const Aux = (props: any) => props.children;

// tslint:disable-next-line:no-empty
export const nop = () => {};

export function stopProp(e: React.MouseEvent<HTMLElement>) {
	e.stopPropagation();
}

export function nodeIndexWithinParent(node: Node) {
	const parent = node.parentNode as Node;
	const result: number = Array.prototype.indexOf.call(parent.childNodes, node);
	return result;
}
