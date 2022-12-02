import { useEffect } from "react";
import { TextNode } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { $createTextSuggestionNode } from "../nodes/TextSuggestionNode";

function textSuggestionTransform(node) {
	const textContent = node.getTextContent();

	if (textContent === "recipes") {
		node.replace(
			$createTextSuggestionNode(
				"text-slate-400",
				"recipes for weight loss such as chicken, legumes, tofu, meat & dinner is important."
			)
		);
	}
}

function useTextSuggestion(editor) {
	useEffect(() => {
		const removeTransform = editor.registerNodeTransform(TextNode, textSuggestionTransform);
		return () => {
			removeTransform();
		};
	}, [editor]);
}

export default function TextSuggestionPlugin() {
	const [editor] = useLexicalComposerContext();
	useTextSuggestion(editor);
	return null;
}
