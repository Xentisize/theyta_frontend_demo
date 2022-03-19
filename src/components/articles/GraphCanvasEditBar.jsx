import datasets from "./datasets.json"

const GraphCanvasEditBar = () => {
	const features = []
	datasets.map((d) => features.push(d.feature))

	const formats = ["bar", "line"]

	return (
		<div className="flex flex-1 flex-col bg-slate-50 px-2 pt-2 md:px-5 md:py-5">
			<div className="flex flex-wrap justify-start gap-x-5">
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Dataset 1</span>
					</label>
					<select name="feature-1-data" className="select-bordered select">
						{features.map((f, i) => {
							return <option key={i}>{f}</option>
						})}
					</select>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Dataset 1 Format</span>
					</label>
					<select name="feature-1-format" className="select-bordered select-accent select">
						{formats.map((f, i) => {
							return <option key={i}>{f}</option>
						})}
					</select>
				</div>
			</div>
			<div className="flex flex-wrap justify-start gap-x-5">
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Dataset 2</span>
					</label>
					<select name="feature-2-data" className="select-bordered select">
						{features.map((f, i) => {
							return <option key={i}>{f}</option>
						})}
					</select>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Dataset 2 Format</span>
					</label>
					<select name="feature-2-format" className="select-bordered select-accent select">
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
