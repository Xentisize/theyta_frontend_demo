/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DecoratorNode } from "lexical";
import * as React from "react";

import { useSharedAutocompleteContext } from "../context/SharedAutocompleteContext";
import { uuid as UUID } from "../plugins/AutocompletePlugin";

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
		return <AutocompleteComponent />;
	}
}

export function $createAutocompleteNode(uuid) {
	return new AutocompleteNode(uuid);
}

function AutocompleteComponent() {
	const [suggestion] = useSharedAutocompleteContext();

	return (
		<span style={{ color: "#ccc" }} spellCheck="false">
			{suggestion} {"(TAB)"}
		</span>
	);
}
