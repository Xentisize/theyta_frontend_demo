import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useRef, useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChartComponent({ chartTitle, chartLabels, chartData }) {
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
				backgroundColor: chartLabels.map(
					() =>
						`rgba(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(
							Math.random() * 255
						)}, 0.5)`
				),
			};
		}),
	};

	const chartRef = useRef(null);

	useEffect(() => {
		const chart = chartRef.current;
	}, []);

	return (
		<div className="w-1/2">
			<Doughnut options={chartOptions} data={data} ref={chartRef} />
		</div>
	);
}
