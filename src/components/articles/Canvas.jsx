import { useRef, useEffect } from "react"
import * as echarts from "echarts"
import datasets from "./datasets.json"

const Canvas = ({ appliedDatasets, expandCanvas }) => {
	const chartRef = useRef(null)
	let chartInstance = null

	let options = {
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "cross",
			},
		},
		grid: {
			top: "30",
			right: "50",
			bottom: "17",
			left: "50",
		},
		xAxis: [
			{
				type: "category",
				axisTick: {
					alignWithLabel: true,
				},
				data: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
			},
		],
		yAxis: [
			// {
			// 	type: "value",
			// 	name: "Number of domestic households in HK",
			// 	min: Math.floor(Math.min(...[2386.2, 2407.3, 2432.4, 2471.1, 2498.9, 2534.7, 2571.5, 2614.4, 2645.2])) * 0.9,
			// 	max: Math.ceil(Math.max(...[2386.2, 2407.3, 2432.4, 2471.1, 2498.9, 2534.7, 2571.5, 2614.4, 2645.2])) * 1.1,
			// 	position: "right",
			// 	axisLabel: {
			// 		formatter: "{value}",
			// 	},
			// },
			// {
			// 	type: "value",
			// 	name: "Hong Kong GDP",
			// 	min: Math.floor(Math.max(...[262.63, 275.7, 291.46, 309.38, 320.84, 341.24, 361.69, 366.02, 346.59])) * 0.9,
			// 	max: Math.ceil(Math.max(...[262.63, 275.7, 291.46, 309.38, 320.84, 341.24, 361.69, 366.02, 346.59])) * 1.1,
			// 	position: "left",
			// 	axisLabel: {
			// 		formatter: "{value}",
			// 	},
			// },
		],
		series: [
			// {
			// 	name: "Number of domestic households in HK",
			// 	type: "bar",
			// 	yAxisIndex: 0,
			// 	data: [2386.2, 2407.3, 2432.4, 2471.1, 2498.9, 2534.7, 2571.5, 2614.4, 2645.2],
			// },
			// {
			// 	name: "Hong Kong GDP",
			// 	type: "line",
			// 	smooth: true,
			// 	yAxisIndex: 1,
			// 	data: [262.63, 275.7, 291.46, 309.38, 320.84, 341.24, 361.69, 366.02, 346.59],
			// },
		],
	}

	useEffect(() => {
		let datasetOneName = appliedDatasets.dsOne
		let datasetOneFormat = appliedDatasets.dsOneFormat
		let datasetTwoName = appliedDatasets.dsTwo
		let datasetTwoFormat = appliedDatasets.dsTwoFormat

		let datasetOne = datasets.filter((d) => d.feature === datasetOneName)[0]
		let datasetTwo = datasets.filter((d) => d.feature === datasetTwoName)[0]

		let datasetOneMin = Math.floor(Math.min(...datasetOne.yAxis))
		let datasetOneMax = Math.ceil(Math.max(...datasetOne.yAxis))
		let datasetTwoMin = Math.floor(Math.min(...datasetTwo.yAxis))
		let datasetTwoMax = Math.ceil(Math.max(...datasetTwo.yAxis))

		let yAxisOptions = [
			{
				type: "value",
				name: datasetOne.yLabel,
				min: Math.floor(datasetOneMin * 0.9),
				max: Math.ceil(datasetOneMax * 1.1),
				position: "right",
				axisLabel: {
					formatter: "{value}",
				},
			},
			{
				type: "value",
				name: datasetTwo.yLabel,
				min: Math.floor(datasetTwoMin * 0.9),
				max: Math.ceil(datasetTwoMax * 1.1),
				position: "left",
				axisLabel: {
					formatter: "{value}",
				},
			},
		]
		let seriesOption = [
			{
				name: datasetOne.yLabel,
				type: datasetOneFormat,
				yAxisIndex: 0,
				data: datasetOne.yAxis,
			},
			{
				name: datasetTwo.yLabel,
				type: datasetTwoFormat,
				yAxisIndex: 1,
				data: datasetTwo.yAxis,
			},
		]

		options = {
			...options,
			yAxis: yAxisOptions,
			series: seriesOption,
		}
	}, [appliedDatasets, expandCanvas])

	const renderChart = () => {
		const renderedInstance = echarts.getInstanceByDom(chartRef.current)
		if (renderedInstance) {
			chartInstance = renderedInstance
		} else {
			chartInstance = echarts.init(chartRef.current)
		}
		chartInstance.setOption(options)
	}

	useEffect(() => {
		renderChart()
	})

	useEffect(() => {
		chartInstance.resize()
	}, [expandCanvas])

	useEffect(() => {
		return () => {
			chartInstance && chartInstance.dispose()
		}
	}, [])

	useEffect(() => {
		const handleResize = () => {
			chartInstance.resize()
		}
		window.addEventListener("resize", handleResize)
	})

	return (
		<>
			<div id="chart" className="h-[300px] px-4 py-10 md:h-[600px]" ref={chartRef}></div>
		</>
	)
}

export default Canvas
