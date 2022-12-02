import { DecoratorNode } from "lexical";
import { uuid as UUID } from "../plugins/AutocompletePlugin";

import AutocompleteComponent from "./AutocompleteComponent";

export class AutocompleteNode extends DecoratorNode {
	__uuid;

	static clone(node) {
		return new AutocompleteNode(node.__key);
	}

	static getType() {
		return "autocomplete";
	}

	static importJSON(serializedNode) {
		const node = $createAutocompleteNode(serializedNode.uuid);
		return node;
	}

	exportJSON() {
		return {
			...super.exportJSON(),
			type: "autocomplete",
			uuid: this.__uuid,
			version: 1,
		};
	}

	constructor(uuid, key) {
		super(key);
		this.__uuid = uuid;
	}

	updateDOM(prevNode, dom, config) {
		return false;
	}

	createDOM(config) {
		return document.createElement("span");
	}

	decorate() {
		if (this.__uuid !== UUID) {
			return null;
		}
		console.log("Inside decorate:", AutocompleteComponent);
		return <AutocompleteComponent />;
	}
}

export function $createAutocompleteNode(uuid) {
	console.log("Inside $create");
	return new AutocompleteNode(uuid);
}
