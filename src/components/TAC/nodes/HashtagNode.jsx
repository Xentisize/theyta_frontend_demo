import { addClassNamesToElement } from "@lexical/utils";
import { $applyNodeReplacement, TextNode } from "lexical";

export class HashtagNode extends TextNode {
	static getType() {
		return "hashtag";
	}

	static clone(node) {
		return new HashtagNode(node.__text, node.__key);
	}

	constructor(text, key) {
		super(text, key);
	}

	createDOM(config) {
		const element = super.createDOM(config);
		// console.log("createDOM: ", config.theme.hashtag);
		addClassNamesToElement(element, "text-blue-500");
		return element;
	}

	static importJSON(serializedNode) {
		const node = $createHashtagNode(serializedNode);
		node.setFormat(serializedNode.format);
		node.setDetail(serializedNode.detail);
		node.setMode(serializedNode.mode);
		node.setStyle(serializedNode.style);
		return node;
	}

	exportJSON() {
		return {
			...super.exportJSON(),
			type: "hashtag",
		};
	}

	canInsertTextBefore() {
		return false;
	}

	isTextEntity() {
		return true;
	}
}

export function $createHashtagNode(text = "") {
	return $applyNodeReplacement(new HashtagNode(text));
}

export function $isHashtagNode(node) {
	return node instanceof HashtagNode;
}
