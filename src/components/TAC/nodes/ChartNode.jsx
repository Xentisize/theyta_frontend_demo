import { DecoratorBlockNode } from "@lexical/react/LexicalDecoratorBlockNode";
import { BarChartComponent } from "./ChartComponents/BarChartComponent";
import { HorizontalBarChartComponent } from "./ChartComponents/HorizontalBarChartComponent";
import { LineChartComponent } from "./ChartComponents/LineChartComponent";
import { PieChartComponent } from "./ChartComponents/PieChartComponent";
import { DoughnutChartComponent } from "./ChartComponents/DoughnutChartComponent";

function ChartComponent({ chartType, chartTitle, chartLabels, chartData, format, nodeKey }) {
	if (chartType === "bar") {
		return (
			<BarChartComponent
				chartTitle={chartTitle}
				chartLabels={chartLabels}
				chartData={chartData}
				format={format}
				nodeKey={nodeKey}
			/>
		);
	} else if (chartType === "hbar") {
		return (
			<HorizontalBarChartComponent
				chartTitle={chartTitle}
				chartLabels={chartLabels}
				chartData={chartData}
				format={format}
				nodeKey={nodeKey}
			/>
		);
	} else if (chartType === "line") {
		return (
			<LineChartComponent
				chartTitle={chartTitle}
				chartLabels={chartLabels}
				chartData={chartData}
				format={format}
				nodeKey={nodeKey}
			/>
		);
	} else if (chartType === "pie") {
		return (
			<PieChartComponent
				chartTitle={chartTitle}
				chartLabels={chartLabels}
				chartData={chartData}
				format={format}
				nodeKey={nodeKey}
			/>
		);
	} else if (chartType === "doughnut") {
		return (
			<DoughnutChartComponent
				chartTitle={chartTitle}
				chartLabels={chartLabels}
				chartData={chartData}
				format={format}
				nodeKey={nodeKey}
			/>
		);
	}
}

export class ChartNode extends DecoratorBlockNode {
	__chartType;
	__chartTitle;
	__chartLabels;
	__chartData;

	static getType() {
		return "chart";
	}

	static clone(node) {
		return new ChartNode(
			node.__chartType,
			node.__chartTitle,
			node.__chartLabels,
			node.__chartData,
			node.__format,
			node.__key
		);
	}

	static importJSON(serializedNode) {
		const node = $createChartNode(
			serializedNode.chartType,
			serializedNode.chartTitle,
			serializedNode.chartLabels,
			serializedNode.chartData
		);
		node.setFormat(serializedNode.format);
		return node;
	}

	exportJSON() {
		return {
			...super.exportJSON(),
			type: "chart",
			version: 1,
			chartType: this.getChartType(),
			chartTitle: this.getChartTitle(),
			chartLabels: this.getChartLabels(),
			chartData: this.getChartData(),
		};
	}

	constructor(chartType, chartTitle, chartLabels, chartData, format, key) {
		super(format, key);
		this.__chartType = chartType;
		this.__chartTitle = chartTitle;
		this.__chartLabels = chartLabels;
		this.__chartData = chartData;
	}

	getChartType() {
		return this.getLatest().__chartType;
	}

	getChartTitle() {
		return this.getLatest().__chartTitle;
	}

	getChartLabels() {
		return this.getLatest().__chartLabels;
	}

	getChartData() {
		return this.getLatest().__chartData;
	}

	updateDOM() {
		return false;
	}

	getTextContent(_includeInert, _includeDirectionless) {
		return this.getLatest.__chartTitle;
	}

	decorate(editor, config) {
		return (
			<ChartComponent
				format={this.__format}
				nodeKey={this.getKey()}
				chartType={this.getChartType()}
				chartTitle={this.getChartTitle()}
				chartLabels={this.getChartLabels()}
				chartData={this.getChartData()}
			/>
		);
	}

	isInline() {
		return false;
	}
}

export function $createChartNode(chartType, chartTitle, chartLabels, chartData) {
	return new ChartNode(chartType, chartTitle, chartLabels, chartData);
}

export function $isChartNode(node) {
	return node instanceof ChartNode;
}
