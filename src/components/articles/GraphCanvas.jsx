import GraphCanvasHeader from "./GraphCanvasHeader"
import Canvas from "./Canvas"
import { useState } from "react"

const GraphCanvas = ({ setShowShare, showShare }) => {
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
					setShowShare={setShowShare}
					showShare={showShare}
				/>
				<Canvas appliedDatasets={datasetInfo} />
			</div>
		</>
	)
}

export default GraphCanvas
