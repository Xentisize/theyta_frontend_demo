import { TextNode } from "lexical";

export class TextSuggestionNode extends TextNode {
	static getType() {
		return "text-suggestion";
	}

	static clone(node) {
		return new TextSuggestionNode(node.__className, node.__text, node.__key);
	}

	constructor(className, text, key) {
		super(text, key);
		this.__className = className;
	}

	createDOM(config) {
		const dom = document.createElement("span");
		const inner = super.createDOM(config);
		dom.className = this.__className;
		inner.className = "inner-text-suggestion";
		dom.appendChild(inner);
		return dom;
	}

	updateDOM(prevNode, dom, config) {
		const inner = dom.firstChild;
		if (inner === null) {
			return true;
		}
		super.updateDOM(prevNode, inner, config);
		return false;
	}
}

export function $isTextSuggestionNode(node) {
	return node instanceof TextSuggestionNode;
}

export function $createTextSuggestionNode(className, suggestion) {
	return new TextSuggestionNode(className, suggestion).setMode("token");
}
