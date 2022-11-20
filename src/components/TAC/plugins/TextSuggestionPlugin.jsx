import { useEffect } from "react";
import { TextNode } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

function textSuggestionTransform(node) {
	const textContent = node.getTextContent();

	if (textContent === "heavy") {
		node.replace("");
	}
}

function useTextSuggestion(editor) {
	useEffect(() => {
		const removeTransform = editor.registerNodeTransform(TextNode);
	});
}
