import React from "react";
import clsx from "clsx";
import {
	$getRoot,
	$getSelection,
	$isRangeSelection,
	FORMAT_TEXT_COMMAND,
	FORMAT_ELEMENT_COMMAND,
	UNDO_COMMAND,
	REDO_COMMAND,
} from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { mergeRegister } from "@lexical/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBold,
	faStrikethrough,
	faUnderline,
	faItalic,
	faAlignLeft,
	faAlignRight,
	faAlignJustify,
	faAlignCenter,
	faUndo,
	faRedo,
	faPenRuler,
} from "@fortawesome/free-solid-svg-icons";

import { stopwords } from "./stopwords";
import { TextSuggestionNode } from "./nodes/TextSuggestionNode";
import TextSuggestionPlugin from "./plugins/TextSuggestionPlugin";
import { HashtagNode } from "./nodes/HashtagNode";
import { HashtagPlugin } from "./plugins/HashtagPlugin";
import { MentionNode } from "./nodes/MentionNode";
import MentionsPlugin from "./plugins/MentionPlugin";
import { ChartNode } from "./nodes/ChartNode";
import ChartPlugin from "./plugins/ChartPlugin";
import { ExcalidrawNode } from "./nodes/ExcalidrawNode";
import ExcalidrawPlugin, { INSERT_EXCALIDRAW_COMMAND } from "./plugins/ExcalidrawPlugin";

import ChartDemo from "./ChartDemo";

function onChange(state, setAnchorText, setParagraphText) {
	state.read(() => {
		const root = $getRoot();
		// const selection = $getSelection();
		const anchorText = root
			.getTextContent()
			.replaceAll(/\n/g, " ")
			.replaceAll(/[?.,!-]/g, " ")
			.split(" ")
			.slice(-1);

		if (!stopwords.includes(anchorText)) {
			setAnchorText(anchorText[0]);
		}

		const lastParagraph = root
			.getLastChild()
			.getTextContent()
			.replaceAll(/\n/g, " ")
			.replaceAll(/[?.,!-]/g, " ")
			.split(" ");

		const cleanedParagraphText = lastParagraph.filter((word) => !stopwords.includes(word));

		if (cleanedParagraphText[cleanedParagraphText.length - 1] === "") {
			cleanedParagraphText.pop();
		}

		if (cleanedParagraphText) {
			setParagraphText(cleanedParagraphText);
		}
	});
}

export const Editor = ({ anchorText, setAnchorText, paragraphText, setParagraphText }) => {
	return (
		<div className="relative rounded-sm border-gray-200 bg-white shadow-sm">
			<LexicalComposer
				initialConfig={{
					theme: {
						paragraph: "mb-1",
						rtl: "text-right",
						ltr: "text-left",
						text: {
							bold: "font-bold",
							italic: "italic",
							underline: "underline",
							strikethrough: "line-through",
						},
					},
					onError(error) {
						throw error;
					},
					nodes: [TextSuggestionNode, HashtagNode, MentionNode, ChartNode, ExcalidrawNode],
				}}
			>
				<Toolbar />
				<div className="mt-3 flex">
					<div className="basis-5/6 border-r-2 border-dashed">
						<RichTextPlugin
							contentEditable={
								<ContentEditable className="min-h-[450px] resize-none overflow-hidden text-ellipsis py-[15px] px-2.5 text-2xl text-slate-600 outline-none" />
							}
							placeholder={
								<div className="pointer-events-none absolute top-[15px] left-[10px] select-none px-2 text-2xl text-slate-400">
									Enter some text...
								</div>
							}
							ErrorBoundary={LexicalErrorBoundary}
						/>
						<OnChangePlugin onChange={(payload) => onChange(payload, setAnchorText, setParagraphText)} />
						<HistoryPlugin />
						{/* <div className="flex w-full border-t-4 border-dashed border-slate-200 pt-3">
							<SuggestionSidebar anchorText={anchorText} />
							<h2 className="basis-1/2 text-center text-xl font-semibold text-slate-400">Charts to Inspire</h2>
						</div> */}

						<HashtagPlugin />
						<MentionsPlugin />
						<ChartPlugin />
						<ExcalidrawPlugin />
					</div>
					<div className="flex w-full basis-1/6 flex-col pl-3">
						<div>
							<ChartDemo paragraphText={paragraphText} />
						</div>
					</div>
				</div>

				<TextSuggestionPlugin />
				{/* <TreeViewPlugin /> */}
				{/* <DragDropPaste /> */}
				{/* <InsertChartButton _chartType={"line"} /> */}
			</LexicalComposer>
		</div>
	);
};

export const Toolbar = () => {
	const [editor] = useLexicalComposerContext();
	const [isBold, setIsBold] = React.useState(false);
	const [isItalic, setIsItalic] = React.useState(false);
	const [isStrikethrough, setIsStrikethrough] = React.useState(false);
	const [isUnderline, setIsUnderline] = React.useState(false);

	const updateToolbar = React.useCallback(() => {
		const selection = $getSelection();

		if ($isRangeSelection(selection)) {
			setIsBold(selection.hasFormat("bold"));
			setIsItalic(selection.hasFormat("italic"));
			setIsStrikethrough(selection.hasFormat("strikethrough"));
			setIsUnderline(selection.hasFormat("underline"));
		}
	}, [editor]);

	React.useEffect(() => {
		return mergeRegister(
			editor.registerUpdateListener(({ editorState }) => {
				editorState.read(() => {
					updateToolbar();
				});
			})
		);
	}, [updateToolbar, editor]);

	return (
		<div className="min-w-52 fixed bottom-8 left-1/2 z-20 mb-4 flex h-10 -translate-x-1/2 transform items-center space-x-2 bg-[#1b2733] px-2 py-2 shadow">
			<button
				className={clsx(
					"px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
					isBold ? "bg-gray-700" : "bg-transparent"
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
				}}
			>
				<FontAwesomeIcon icon={faBold} className="h-3.5 w-3.5 text-white" />
			</button>
			<button
				className={clsx(
					"px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
					isStrikethrough ? "bg-gray-700" : "bg-transparent"
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
				}}
			>
				<FontAwesomeIcon icon={faStrikethrough} className="h-3.5 w-3.5 text-white" />
			</button>
			<button
				className={clsx(
					"px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
					isItalic ? "bg-gray-700" : "bg-transparent"
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
				}}
			>
				<FontAwesomeIcon icon={faItalic} className="h-3.5 w-3.5 text-white" />
			</button>
			<button
				className={clsx(
					"px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
					isUnderline ? "bg-gray-700" : "bg-transparent"
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
				}}
			>
				<FontAwesomeIcon icon={faUnderline} className="h-3.5 w-3.5 text-white" />
			</button>

			<button
				className={clsx("bg-transparent px-1 transition-colors duration-100 ease-in hover:bg-gray-700")}
				onClick={() => {
					editor.dispatchCommand(INSERT_EXCALIDRAW_COMMAND, undefined);
				}}
			>
				<FontAwesomeIcon icon={faPenRuler} className="h-3.5 w-3.5 text-white" />
			</button>

			<span className="block h-full w-[1px] bg-gray-600"></span>

			<button
				className={clsx("bg-transparent px-1 transition-colors duration-100 ease-in hover:bg-gray-700")}
				onClick={() => {
					editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
				}}
			>
				<FontAwesomeIcon icon={faAlignLeft} className="h-3.5 w-3.5 text-white" />
			</button>
			<button
				className={clsx("bg-transparent px-1 transition-colors duration-100 ease-in hover:bg-gray-700")}
				onClick={() => {
					editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
				}}
			>
				<FontAwesomeIcon icon={faAlignCenter} className="h-3.5 w-3.5 text-white" />
			</button>
			<button
				className={clsx("bg-transparent px-1 transition-colors duration-100 ease-in hover:bg-gray-700")}
				onClick={() => {
					editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
				}}
			>
				<FontAwesomeIcon icon={faAlignRight} className="h-3.5 w-3.5 text-white" />
			</button>
			<button
				className={clsx("bg-transparent px-1 transition-colors duration-100 ease-in hover:bg-gray-700")}
				onClick={() => {
					editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
				}}
			>
				<FontAwesomeIcon icon={faAlignJustify} className="h-3.5 w-3.5 text-white" />
			</button>

			<span className="block h-full w-[1px] bg-gray-600"></span>

			<button
				className={clsx("bg-transparent px-1 transition-colors duration-100 ease-in hover:bg-gray-700")}
				onClick={() => {
					editor.dispatchCommand(UNDO_COMMAND);
				}}
			>
				<FontAwesomeIcon icon={faUndo} className="h-3.5 w-3.5 text-white" />
			</button>
			<button
				className={clsx("bg-transparent px-1 transition-colors duration-100 ease-in hover:bg-gray-700")}
				onClick={() => {
					editor.dispatchCommand(REDO_COMMAND);
				}}
			>
				<FontAwesomeIcon icon={faRedo} className="h-3.5 w-3.5 text-white" />
			</button>
		</div>
	);
};
