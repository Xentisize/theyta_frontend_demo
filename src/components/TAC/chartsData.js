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

export const chartsData = [
	{
		dataID: 1,
		dataSetName: "Comparison of Exercises",
		dataSetKeyword: ["weight", "exercise", "calories", "bicycle", "running", "skipping", "plank", "swimming"],
		chartType: "bar",
		dataSetLabels: ["Bicycle", "Running", "Skipping", "Plank", "Swimming"],
		dataSet: [
			{
				chartDataLabel: "Exercise",
				chartData: [1250, 1480, 1900, 1120, 900],
				chartColor: [colors[0], colors[1], colors[2], colors[3], colors[4]],
			},
		],
	},
	{
		dataID: 2,
		dataSetName: "Comparison of Exercises",
		dataSetKeyword: ["weight", "exercise", "calories", "hiking", "ball-games", "jogging", "flying", "diving"],
		chartType: "bar",
		dataSetLabels: ["Hiking", "Ball-games", "Jogging", "Flying", "Diving"],
		dataSet: [
			{
				chartDataLabel: "Exercise",
				chartData: [850, 2480, 1000, 3020, 1900],
				chartColor: [colors[4], colors[5], colors[6], colors[7], colors[8]],
			},
		],
	},
	{
		dataID: 3,
		dataSetName: "Comparison of Weight Loss with or without Exercise",
		dataSetKeyword: ["weight", "loss", "calories", "exercise", "reduce"],
		chartType: "bar",
		dataSetLabels: ["1 Week", "2 Weeks", "3 Weeks", "4 Weeks", "5 Weeks"],
		dataSet: [
			{
				chartDataLabel: "With Exercise",
				chartData: [80, 75, 71, 68, 66],
				chartColor: colors[4],
			},
			{
				chartDataLabel: "Without Exercise",
				chartData: [80, 79, 78, 77, 76],
				chartColor: colors[5],
			},
		],
	},
	{
		dataID: 4,
		dataSetName: "Metabolic Rate During Exercise of Men",
		dataSetKeyword: ["weight", "loss", "calories", "exercise", "metabloic", "men"],
		chartType: "line",
		dataSetLabels: ["0.5 Hour", "1 Hours", "1.5 Hours", "2.0 Hours", "2.5 Hours"],
		dataSet: [
			{
				chartDataLabel: "Metabolic Rate",
				chartData: [1500, 1650, 2100, 2100, 2000],
				chartColor: colors[8],
			},
		],
	},
	{
		dataID: 5,
		dataSetName: "Metabolic Rate During Exercise of Women",
		dataSetKeyword: ["weight", "loss", "calories", "exercise", "metabloic", "women"],
		chartType: "line",
		dataSetLabels: ["0.5 Hour", "1 Hours", "1.5 Hours", "2.0 Hours", "2.5 Hours"],
		dataSet: [
			{
				chartDataLabel: "Metabolic Rate",
				chartData: [1350, 1550, 1980, 2000, 1900],
				chartColor: colors[9],
			},
		],
	},
	{
		dataID: 6,
		dataSetName: "Calories of Fruit Per 100g",
		dataSetKeyword: [
			"calories",
			"food",
			"fruit",
			"healthy",
			"health",
			"banana",
			"apple",
			"orange",
			"pear",
			"grape",
			"pineapple",
		],
		chartType: "bar",
		dataSetLabels: ["Banana", "Apple", "Orange", "Pear", "Grape", "Pineapple"],
		dataSet: [
			{
				chartDataLabel: "Fruit",
				chartData: [800, 400, 500, 550, 750, 600],
				chartColor: [colors[0], colors[2], colors[4], colors[6], colors[1], colors[3]],
			},
		],
	},
	{
		dataID: 7,
		dataSetName: "Nutrition Facts of Banana Per 100g",
		dataSetKeyword: ["nutrition", "food", "healthy", "health", "banana", "fat", "protein", "carbohydrate", "fruit"],
		chartType: "pie",
		dataSetLabels: ["Protein", "Carbohydrate", "Fat"],
		dataSet: [
			{
				chartDataLabel: "Nutrition",
				chartData: [100, 400, 30],
				chartColor: [colors[10], colors[7], colors[8]],
			},
		],
	},
	{
		dataID: 8,
		dataSetName: "Nutrition Facts of Rice Per 100g",
		dataSetKeyword: ["nutrition", "food", "healthy", "health", "rice", "fat", "protein", "carbohydrate", "grains"],
		chartType: "doughnut",
		dataSetLabels: ["Protein", "Carbohydrate", "Fat"],
		dataSet: [
			{
				chartDataLabel: "Nutrition",
				chartData: [500, 800, 30],
				chartColor: [colors[1], colors[6], colors[5]],
			},
		],
	},
];
