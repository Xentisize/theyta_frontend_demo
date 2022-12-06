import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	LineElement,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useRef, useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COMMAND_PRIORITY_LOW } from "lexical";
import { INSERT_CHART_COMMAND } from "./plugins/ChartPlugin";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement);

export default function ChartDemoInstance({ chartContent }) {
	const chartRef = useRef(null);
	const [editor] = useLexicalComposerContext();
	let type = "";
	let options = {};
	let data = {};

	useEffect(() => {
		const chart = chartRef.current;
	}, []);

	const onClick = (event, payload) => {
		console.log(payload.datasets);
		event.preventDefault();
		editor.dispatchCommand(
			INSERT_CHART_COMMAND,
			{
				chartType: payload.type,
				chartTitle: payload.title,
				chartLabels: payload.labels,
				chartData: payload.datasets,
			},
			COMMAND_PRIORITY_LOW
		);
	};

	if (chartContent.chartType === "bar" || chartContent.chartType === "line") {
		type = chartContent.chartType;

		options = {
			responsive: true,
			plugins: {
				legend: {
					display: false,
					position: "top",
				},
				title: {
					display: true,
					text: chartContent.dataSetName,
				},
			},
		};

		data = {
			title: chartContent.dataSetName,
			type,
			labels: chartContent.dataSetLabels,
			datasets: chartContent.dataSet.map((rowData) => ({
				label: rowData.chartDataLabel,
				data: rowData.chartData,
				backgroundColor: rowData.chartColor,
			})),
		};
	} else if (chartContent.chartType === "hbar") {
		type = "bar";

		options = {
			indexAxis: "y",
			elements: {
				bar: {
					borderWidth: 2,
				},
			},
			responsive: true,
			plugins: {
				legend: {
					display: false,
					position: "top",
				},
				title: {
					display: true,
					text: chartContent.dataSetName,
				},
			},
		};

		data = {
			title: chartContent.dataSetName,
			type,
			labels: chartContent.dataSetLabels,
			datasets: chartContent.dataSet.map((rowData) => ({
				label: rowData.chartDataLabel,
				data: rowData.chartData,
				backgroundColor: rowData.chartColor,
			})),
		};
	} else if (chartContent.chartType === "pie") {
		type = chartContent.chartType;

		options = {
			responsive: true,
			plugins: {
				legend: {
					position: "top",
				},
				title: {
					display: true,
					text: chartContent.dataSetName,
				},
			},
		};

		data = {
			title: chartContent.dataSetName,
			type,
			labels: chartContent.dataSetLabels,
			datasets: chartContent.dataSet.map((rowData) => ({
				label: rowData.chartDataLabel,
				data: rowData.chartData,
				backgroundColor: rowData.chartColor,
			})),
		};
	} else if (chartContent.chartType === "doughnut") {
		type = chartContent.chartType;

		options = {
			responsive: true,
			plugins: {
				legend: {
					position: "top",
				},
				title: {
					display: true,
					text: chartContent.dataSetName,
				},
			},
		};

		data = {
			title: chartContent.dataSetName,
			type,
			labels: chartContent.dataSetLabels,
			datasets: chartContent.dataSet.map((rowData) => ({
				label: rowData.chartDataLabel,
				data: rowData.chartData,
				backgroundColor: rowData.chartColor,
			})),
		};
	}

	return (
		<Chart
			type={type}
			options={options}
			data={data}
			width={300}
			height={200}
			onClick={(event) => onClick(event, data)}
			ref={chartRef}
		/>
	);
}
