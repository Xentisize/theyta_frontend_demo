import datasets from "./datasets.json"
import { useState, useEffect } from "react"

const GraphCanvasEditBar = ({ datasetOne, datasetOneFormat, datasetTwo, datasetTwoFormat, updateDatasetInfo }) => {
	const features = []
	datasets.map((d) => features.push(d.feature))
	const formats = ["bar", "line"]

	const [dsOne, setDsOne] = useState(datasetOne)
	const [dsOneFormat, setDsOneFormat] = useState(datasetOneFormat)
	const [dsTwo, setDsTwo] = useState(datasetTwo)
	const [dsTwoFormat, setDsTwoFormat] = useState(datasetTwoFormat)

	useEffect(() => {
		let datasetInfo = {
			dsOne,
			dsOneFormat,
			dsTwo,
			dsTwoFormat,
		}
		updateDatasetInfo(datasetInfo)
	}, [dsOne, dsOneFormat, dsTwo, dsTwoFormat])

	return (
		<div className="flex flex-1 flex-col bg-slate-50 px-10 pt-2 md:px-5 md:py-5">
			<div className="flex flex-wrap justify-start gap-x-5">
				<div className="form-control w-full max-w-xs md:max-w-md">
					<label className="label">
						<span className="label-text">Dataset 1</span>
					</label>
					<select
						name="feature-1-data"
						className="select-bordered select"
						defaultValue={dsOne}
						onChange={(e) => setDsOne(e.target.value)}
					>
						{features.map((f, i) => {
							return <option key={i}>{f}</option>
						})}
					</select>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Dataset 1 Format</span>
					</label>
					<select
						name="feature-1-format"
						className="select-bordered select-accent select"
						defaultValue={dsOneFormat}
						onChange={(e) => setDsOneFormat(e.target.value)}
					>
						{formats.map((f, i) => {
							return <option key={i}>{f}</option>
						})}
					</select>
				</div>
			</div>
			<div className="flex flex-wrap justify-start gap-x-5">
				<div className="form-control w-full max-w-xs md:max-w-md">
					<label className="label">
						<span className="label-text">Dataset 2</span>
					</label>
					<select
						name="feature-2-data"
						className="select-bordered select"
						defaultValue={dsTwo}
						onChange={(e) => setDsTwo(e.target.value)}
					>
						{features.map((f, i) => {
							return <option key={i}>{f}</option>
						})}
					</select>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Dataset 2 Format</span>
					</label>
					<select
						name="feature-2-format"
						className="select-bordered select-accent select"
						defaultValue={dsTwoFormat}
						onChange={(e) => setDsTwoFormat(e.target.value)}
					>
						{formats.map((f, i) => {
							return <option key={i}>{f}</option>
						})}
					</select>
				</div>
			</div>
		</div>
	)
}

export default GraphCanvasEditBar
