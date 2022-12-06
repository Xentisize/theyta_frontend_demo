import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $insertNodeToNearestRoot } from "@lexical/utils";
import { COMMAND_PRIORITY_EDITOR, createCommand } from "lexical";
import { useEffect } from "react";

import { $createChartNode, ChartNode } from "../nodes/ChartNode";

export const INSERT_CHART_COMMAND = createCommand("INSERT_CHART_COMMAND");

export default function ChartPlugin() {
	const [editor] = useLexicalComposerContext();

	useEffect(() => {
		if (!editor.hasNodes([ChartNode])) {
			throw new Error("ChartPlugin: ChartNode not registered on editor");
		}

		return editor.registerCommand(
			INSERT_CHART_COMMAND,
			(payload) => {
				const chartNode = $createChartNode(
					payload.chartType,
					payload.chartTitle,
					payload.chartLabels,
					payload.chartData
				);
				$insertNodeToNearestRoot(chartNode);
				return true;
			},
			COMMAND_PRIORITY_EDITOR
		);
	}, [editor]);

	return null;
}
