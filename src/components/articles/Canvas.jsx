import { useRef, useEffect } from "react"
import * as echarts from "echarts"

const Canvas = () => {
	const chartRef = useRef(null)
	let chartInstance = null

	const renderChart = () => {
		const renderedInstance = echarts.getInstanceByDom(chartRef.current)
		if (renderedInstance) {
			chartInstance = renderedInstance
		} else {
			chartInstance = echarts.init(chartRef.current)
		}

		chartInstance.setOption({
			// legend: {},
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: "cross",
				},
			},
			grid: {
				top: "30",
				right: "30",
				bottom: "17",
				left: "60",
			},
			xAxis: [
				{
					type: "category",
					axisTick: {
						alignWithLabel: true,
					},
					data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
					// "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
					// 125.6, 112.2, 78.7, 48.8, 36.0, 19.3],
				},
				{
					name: "Unemployment Rate",
					type: "line",
					smooth: true,
					yAxisIndex: 1,
					data: [6.0, 10.2, 10.3, 11.5, 10.3, 13.2],
					//  14.3, 16.4, 18.0, 16.5, 12.0, 5.2],
				},
			],
		})
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
			<div id="chart" className="h-[400px] w-full px-2 py-10 md:h-[800px]" ref={chartRef}></div>
		</>
	)
}

export default Canvas
