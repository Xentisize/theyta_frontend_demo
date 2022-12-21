const colors = [
	"rgba(0, 128, 128, 0.5)",
	"rgba(128, 0, 128, 0.5)",
	"rgba(128, 128, 255, 0.5)",
	"rgba(255, 165, 0, 0.5)",
	"rgba(106, 90, 205, 0.5)",
	"rgba(189, 225, 183, 0.5)",
	"rgba(57, 17, 167, 0.5)",
	"rgba(204, 113, 155, 0.5)",
	"rgba(113, 204, 172, 0.5)",
	"rgba(145, 146, 172, 0.5)",
	"rgba(209, 242, 74, 0.5)",
];

export const nutritionData = [
	{
		dataID: 1,
		foodType: "banana",
		dataSetName: "Nutrition Facts of Banana Per 100g",
		dataSetLabels: ["Protein", "Carbs", "Sugar", "Fiber", "Fat"],
		dataSet: [
			{
				chartDataLabel: "Nutrition",
				chartData: [1.1, 22.8, 12.2, 2.6, 0.3],
				chartColor: [colors[0], colors[1], colors[2], colors[3], colors[4]],
			},
		],
	},
	{
		dataID: 2,
		foodType: "orange",
		dataSetName: "Nutrition Facts of Orange Per 100g",
		dataSetLabels: ["Protein", "Carbs", "Sugar", "Fiber", "Fat"],
		dataSet: [
			{
				chartDataLabel: "Nutrition",
				chartData: [1.3, 14.8, 12.0, 2.8, 0.2],
				chartColor: [colors[0], colors[1], colors[2], colors[3], colors[4]],
			},
		],
	},
	{
		dataID: 3,
		foodType: "pizza",
		dataSetName: "Nutrition Facts of Pizza Per 107g",
		dataSetLabels: ["Protein", "Carbs", "Sugar", "Fiber", "Fat"],
		dataSet: [
			{
				chartDataLabel: "Nutrition",
				chartData: [12.2, 35.6, 3.8, 2.5, 10.4],
				chartColor: [colors[0], colors[1], colors[2], colors[3], colors[4]],
			},
		],
	},
	{
		dataID: 4,
		foodType: "doughnut",
		dataSetName: "Nutrition Facts of Dougnut Per 64g",
		dataSetLabels: ["Protein", "Carbs", "Sugar", "Fiber", "Fat"],
		dataSet: [
			{
				chartDataLabel: "Nutrition",
				chartData: [4, 31, 15, 0, 15],
				chartColor: [colors[0], colors[1], colors[2], colors[3], colors[4]],
			},
		],
	},
	{
		dataID: 5,
		foodType: "sandwich",
		dataSetName: "Nutrition Facts of Sandwich Per 155g",
		dataSetLabels: ["Protein", "Carbs", "Sugar", "Fiber", "Fat"],
		dataSet: [
			{
				chartDataLabel: "Nutrition",
				chartData: [19.3, 32.5, 5.1, 2.3, 16.7],
				chartColor: [colors[0], colors[1], colors[2], colors[3], colors[4]],
			},
		],
	},
];
