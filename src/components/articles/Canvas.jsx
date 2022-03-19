import { useRef, useEffect } from "react"
import * as echarts from "echarts"
import datasets from "./datasets.json"

const Canvas = ({ appliedDatasets }) => {
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
			right: "60",
			bottom: "17",
			left: "60",
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
			{
				type: "value",
				name: "Number of vacants x 1000",
				min: 0,
				max: 200,
				position: "right",
				axisLabel: {
					formatter: "{value}",
				},
			},
			{
				type: "value",
				name: "Unemployment Rate",
				min: 0,
				max: 20,
				position: "left",
				axisLabel: {
					formatter: "{value} %",
				},
			},
		],
		series: [
			{
				name: "Number of vacants",
				type: "bar",
				yAxisIndex: 0,
				data: [6, 32, 70, 86, 68.7, 100.7],
			},
			{
				name: "Unemployment Rate",
				type: "line",
				smooth: true,
				yAxisIndex: 1,
				data: [6.0, 10.2, 10.3, 11.5, 10.3, 13.2],
			},
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
				min: 0,
				max: datasetOneMax,
				position: "right",
				axisLabel: {
					formatter: "{value}",
				},
			},
			{
				type: "value",
				name: datasetTwo.yLabel,
				min: 0,
				max: datasetTwoMax,
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
	}, [appliedDatasets])

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
			<div id="chart" className="h-[400px] w-full px-4 py-10 md:h-[800px]" ref={chartRef}></div>
		</>
	)
}

export default Canvas
