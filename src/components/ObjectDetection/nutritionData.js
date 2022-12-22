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
		dataSetName: "Nutrition Facts of Pizza Per 100g",
		dataSetLabels: ["Protein", "Carbs", "Sugar", "Fiber", "Fat"],
		dataSet: [
			{
				chartDataLabel: "Nutrition",
				chartData: [11.4, 33.3, 3.6, 2.3, 9.7],
				chartColor: [colors[0], colors[1], colors[2], colors[3], colors[4]],
			},
		],
	},
	{
		dataID: 4,
		foodType: "donut",
		dataSetName: "Nutrition Facts of Donut Per 100g",
		dataSetLabels: ["Protein", "Carbs", "Sugar", "Fiber", "Fat"],
		dataSet: [
			{
				chartDataLabel: "Nutrition",
				chartData: [6.25, 48.4, 23.4, 0, 23.4],
				chartColor: [colors[0], colors[1], colors[2], colors[3], colors[4]],
			},
		],
	},
	{
		dataID: 5,
		foodType: "sandwich",
		dataSetName: "Nutrition Facts of Sandwich Per 100g",
		dataSetLabels: ["Protein", "Carbs", "Sugar", "Fiber", "Fat"],
		dataSet: [
			{
				chartDataLabel: "Nutrition",
				chartData: [12.5, 21.0, 3.3, 1.5, 10.8],
				chartColor: [colors[0], colors[1], colors[2], colors[3], colors[4]],
			},
		],
	},
	{
		dataID: 6,
		foodType: "carrot",
		dataSetName: "Nutrition Facts of Carrot Per 100g",
		dataSetLabels: ["Protein", "Carbs", "Sugar", "Fiber", "Fat"],
		dataSet: [
			{
				chartDataLabel: "Nutrition",
				chartData: [0.9, 9.6, 4.7, 2.8, 0.2],
				chartColor: [colors[0], colors[1], colors[2], colors[3], colors[4]],
			},
		],
	},
	{
		dataID: 7,
		foodType: "apple",
		dataSetName: "Nutrition Facts of Apple Per 100g",
		dataSetLabels: ["Protein", "Carbs", "Sugar", "Fiber", "Fat"],
		dataSet: [
			{
				chartDataLabel: "Nutrition",
				chartData: [0.3, 13.8, 10.4, 2.4, 0.2],
				chartColor: [colors[0], colors[1], colors[2], colors[3], colors[4]],
			},
		],
	},
	{
		dataID: 8,
		foodType: "cake",
		dataSetName: "Nutrition Facts of Cake Per 100g",
		dataSetLabels: ["Protein", "Carbs", "Sugar", "Fiber", "Fat"],
		dataSet: [
			{
				chartDataLabel: "Nutrition",
				chartData: [4.0, 56, 44, 0, 24],
				chartColor: [colors[0], colors[1], colors[2], colors[3], colors[4]],
			},
		],
	},
];
