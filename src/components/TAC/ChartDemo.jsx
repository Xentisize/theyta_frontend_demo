import { chartsData } from "./chartsData";
import ChartDemoInstance from "./ChartDemoInstance";

export default function ChartDemo({ paragraphText }) {
	const filteredCharts = [];
	let uniqueCharts = [];

	if (paragraphText) {
		paragraphText.map((text) => {
			let charts = chartsData.filter((dataSet) => dataSet.dataSetKeyword.includes(text.toLowerCase()));

			if (charts.length > 0) {
				filteredCharts.push(charts.flat());
			}
		});
	}

	if (filteredCharts.length !== 0) {
		const key = "dataID";
		uniqueCharts = [...new Map(filteredCharts.map((item) => [item[key], item])).values()][0];
	}

	return uniqueCharts.map((chartContent, idx) => <ChartDemoInstance chartContent={chartContent} key={idx} />);
}
