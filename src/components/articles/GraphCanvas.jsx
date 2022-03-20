import GraphCanvasHeader from "./GraphCanvasHeader"
import Canvas from "./Canvas"
import { useState } from "react"

const GraphCanvas = ({ expandCanvas, setExpandCanvas }) => {
	const [datasetInfo, setDatasetInfo] = useState({
		dsOne: "Number of Domestic Households in HK",
		dsOneFormat: "bar",
		dsTwo: "Hong Kong GDP",
		dsTwoFormat: "line",
	})

	return (
		<>
			<div className="rounded-3xl bg-slate-100 drop-shadow-md">
				<GraphCanvasHeader
					datasetOne="Number of Domestic Households in HK"
					datasetOneFormat="bar"
					datasetTwo="Hong Kong GDP"
					datasetTwoFormat="line"
					updateDatasetInfo={setDatasetInfo}
					expandCanvas={expandCanvas}
					setExpandCanvas={setExpandCanvas}
				/>
				<Canvas appliedDatasets={datasetInfo} expandCanvas={expandCanvas} />
			</div>
		</>
	)
}

export default GraphCanvas
