import { DecoratorNode } from "lexical";

import SentenceSuggestionComponent from "./SentenceSuggestionComponent";

export class SentenceSuggestionNode extends DecoratorNode {
	static clone(node) {
		return new SentenceSuggestionNode(node.__key);
	}

	static getType() {
		return "sentence-suggestion";
	}

	static importJSON(serializedNode) {
		const node = $createSentenceSuggestionNode();
		return node;
	}

	exportJSON() {
		return {
			...super.exportJSON(),
			type: "sentence-suggestion",
			version: 1,
		};
	}

	updateDOM(prevNode, dom, config) {
		return false;
	}

	createDOM(config) {
		return document.createElement("span");
	}

	decorate() {
		return <SentenceSuggestionComponent />;
	}
}

export function $createSentenceSuggestionNode() {
	return new SentenceSuggestionNode();
}
