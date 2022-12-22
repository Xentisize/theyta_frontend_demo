import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	LineElement,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement);

export default function NutritionChart({ chartContent }) {
	let options = {
		responsive: false,
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

	let data = {
		title: chartContent.dataSetName,
		labels: chartContent.dataSetLabels,
		datasets: chartContent.dataSet.map((rowData) => ({
			label: rowData.chartDataLabel,
			data: rowData.chartData,
			backgroundColor: rowData.chartColor,
		})),
	};

	return <Chart type="bar" options={options} data={data} width={400} height={400} />;
}
