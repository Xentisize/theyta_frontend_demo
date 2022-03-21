import GraphCanvasHeader from "./GraphCanvasHeader"
import Canvas from "./Canvas"
import { useState } from "react"
import { FaRegCopy } from "react-icons/fa"
import authors from "../articles_list/authors.json"
import toast from "react-hot-toast"

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
			<input type="checkbox" id="share-box" className="modal-toggle" />

			<label htmlFor="share-box" className="modal-bottom sm:modal-middle modal">
				<div className="modal-box flex flex-1 flex-col justify-evenly">
					<h3 className="text-lg font-bold">Embed Chart</h3>
					<div className="form-control w-full grow">
						<label className="label">
							<span className="label-text text-slate-500">Copy the link</span>
						</label>
						<div className="input-group grow">
							<input
								type="text"
								value="https://www.theyta.com/articles/01/graph/cec0167adea9c8498862c2d18d600b4a5ec65818facd05aca27e34c564e257cb"
								className="input-bordered input w-full max-w-xl text-slate-400"
								readOnly
							/>
							<button className="btn btn-secondary btn-square text-lg" onClick={() => toast.success("Link copied")}>
								<FaRegCopy />
							</button>
						</div>
					</div>
					<div className="mt-2 md:mt-4">
						<p className="pb-2 text-lg font-semibold md:pb-3">Share Chart</p>
						<div className="mt-2 flex flex-row flex-nowrap justify-evenly overflow-x-scroll">
							{authors.map((a, i) => {
								return (
									<div className="mb-3 text-center md:mb-5" key={a.id}>
										<div className="avatar hover:animate-pulse">
											<div className="mx-2 w-12 rounded-full">
												<img src={a.avatar} alt="authors" />
											</div>
										</div>
										<p className="text-xs text-slate-500">{a.name}</p>
									</div>
								)
							})}
						</div>
					</div>
					<div className="mt-2 border-t-2 border-slate-200 pt-2">
						<div className="mt-4 flex flex-row flex-nowrap overflow-x-scroll">
							<div className="mb-3 text-center md:mb-5">
								<div className="mx-2 flex w-12 justify-start gap-3 rounded-full md:gap-5">
									<img src="/images/line_icon.png" alt="sns icons" className="hover:animate-pulse" />
									<img src="/images/whatsapp_icon.png" alt="sns icons" className="hover:animate-pulse" />
									<img src="/images/wechat_icon.png" alt="sns icons" className="hover:animate-pulse" />
									<img src="/images/fb_icon.png" alt="sns icons" className="hover:animate-pulse" />
								</div>
								<div className="mx-2 w-12 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
			</label>
		</>
	)
}

export default GraphCanvas
