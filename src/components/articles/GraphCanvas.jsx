import GraphCanvasHeader from "./GraphCanvasHeader"
import Canvas from "./Canvas"

const GraphCanvas = () => {
	return (
		<>
			<div className="rounded-3xl bg-slate-100 drop-shadow-md">
				<GraphCanvasHeader />
				<Canvas />
			</div>
		</>
	)
}

export default GraphCanvas
