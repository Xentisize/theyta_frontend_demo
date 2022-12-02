import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $isAtNodeEnd } from "@lexical/selection";
import { mergeRegister } from "@lexical/utils";
import {
	$createTextNode,
	$getNodeByKey,
	$getSelection,
	$isRangeSelection,
	$isTextNode,
	COMMAND_PRIORITY_LOW,
	KEY_TAB_COMMAND,
} from "lexical";
import { useCallback, useEffect } from "react";

import { $createSentenceSuggestionNode, SentenceSuggestionNode } from "../nodes/SentenceSuggestionNode";

export default function SentenceSuggestionPlugin() {
	const [editor] = useLexicalComposerContext();
}
