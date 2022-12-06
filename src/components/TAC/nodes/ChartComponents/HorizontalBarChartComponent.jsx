import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useRef, useEffect } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function HorizontalBarChartComponent({ chartTitle, chartLabels, chartData }) {
	const chartOptions = {
		indexAxis: "y",
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
		responsive: true,
		plugins: {
			legend: {
				position: "right",
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
		<div className="w-1/2">
			<Bar options={chartOptions} data={data} ref={chartRef} />
		</div>
	);
}
