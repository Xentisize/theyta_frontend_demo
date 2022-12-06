import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Filler, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useRef } from "react";

ChartJS.register(CategoryScale, LinearScale, Filler, BarElement, Title, Tooltip, Legend);

export function BarChartComponent({ chartTitle, chartLabels, chartData }) {
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
				backgroundColor: rowData.backgroundColor,
			};
		}),
	};

	const chartRef = useRef(null);

	useEffect(() => {
		const chart = chartRef.current;
	}, []);

	return (
		<div className="w-2/3">
			<Bar options={chartOptions} data={data} ref={chartRef} />
		</div>
	);
}
