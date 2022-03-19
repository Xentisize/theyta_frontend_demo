import GraphCanvasHeader from "./GraphCanvasHeader"
import Canvas from "./Canvas"
import { useState } from "react"

const GraphCanvas = () => {
	const [datasetInfo, setDatasetInfo] = useState({
		dsOne: "Number of domestic households in HK",
		dsOneFormat: "bar",
		dsTwo: "Hong Kong GDP",
		dsTwoFormat: "line",
	})

	return (
		<>
			<div className="rounded-3xl bg-slate-100 drop-shadow-md">
				<GraphCanvasHeader
					datasetOne="Number of domestic households in HK"
					datasetOneFormat="bar"
					datasetTwo="Hong Kong GDP"
					datasetTwoFormat="line"
					updateDatasetInfo={setDatasetInfo}
				/>
				<Canvas appliedDatasets={datasetInfo} />
			</div>
		</>
	)
}

export default GraphCanvas
