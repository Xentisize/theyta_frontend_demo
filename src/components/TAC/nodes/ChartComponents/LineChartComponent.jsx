import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useRef, useEffect } from "react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function LineChartComponent({ chartTitle, chartLabels, chartData }) {
	const chartOptions = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: chartTitle,
			},
		},
	};

	const data = {
		labels: chartLabels,
		datasets: chartData.map((rowData) => {
			return {
				label: rowData.label,
				data: rowData.data,
				backgroundColor: `rgba(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(
					Math.random() * 255
				)}, 0.5)`,
			};
		}),
	};

	const chartRef = useRef(null);

	useEffect(() => {
		const chart = chartRef.current;
	}, []);

	return (
		<div className="w-2/3">
			<Line options={chartOptions} data={data} ref={chartRef} />
		</div>
	);
}
