import { ImBubbles3 } from "react-icons/im"
import { BsHeart, BsShareFill } from "react-icons/bs"
import { BiEdit, BiExpand } from "react-icons/bi"
import { useState } from "react"
import GraphCanvasEditBar from "./GraphCanvasEditBar"
import { IconContext } from "react-icons"
import { FaRegCopy } from "react-icons/fa"
import authors from "../articles_list/authors.json"
import toast from "react-hot-toast"

const GraphCanvasHeader = (props) => {
	const [toggleEdit, setToggleEdit] = useState(false)
	const [likes, setLikes] = useState(12)
	const [isLike, setIsLike] = useState(false)

	const toggleLikeArticle = () => {
		if (isLike) {
			setLikes(likes - 1)
		} else {
			setLikes(likes + 1)
		}
		setIsLike(!isLike)
	}

	return (
		<>
			<div className="flex flex-1 items-stretch rounded-t-xl bg-purple-200">
				<div className="indicator avatar mr-2 py-4 pl-2  md:mr-10 md:pr-6 md:pl-10">
					<div className="w-10 rounded-full md:w-16">
						<img
							src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
							alt="authors"
						/>
					</div>
					<span className="indicator-item badge badge-warning">VIP</span>
				</div>
				<div className="flex grow items-center justify-center text-center hover:rounded-bl-3xl hover:bg-purple-300 hover:text-slate-200">
					<button href="#" className="text-xl md:text-4xl">
						<ImBubbles3 className="mr-0.5 inline md:mr-2" />
						<span className="text-sm md:text-2xl">256</span>
					</button>
				</div>
				<div
					className="flex grow items-center justify-center text-center hover:rounded-bl-3xl hover:bg-purple-300 hover:text-slate-200"
					onClick={(e) => {
						e.preventDefault()
						toggleLikeArticle()
					}}
				>
					<button className="text-xl md:text-4xl">
						{isLike ? (
							<IconContext.Provider value={{ color: "#e64b30" }}>
								<BsHeart className="mr-0.5 inline md:mr-2" />
							</IconContext.Provider>
						) : (
							<BsHeart className="mr-0.5 inline md:mr-2" />
						)}
						<span className="text-sm md:text-2xl">{likes}</span>
					</button>
				</div>
				<div className="flex grow items-center justify-center text-center hover:rounded-bl-3xl hover:bg-purple-300 hover:text-slate-200">
					<label htmlFor="share-box" className="modal-button">
						<a className="text-xl md:text-4xl">
							<BsShareFill className="mr-2 inline" />
						</a>
					</label>
				</div>
				<div
					className="flex grow items-center justify-center text-center hover:rounded-bl-3xl hover:bg-purple-300 hover:text-slate-200"
					onClick={(e) => {
						e.preventDefault()
						setToggleEdit(!toggleEdit)
					}}
				>
					<button className="inline-block text-2xl md:text-5xl">
						<BiEdit className="mr-2 inline" />
					</button>
				</div>
				<div className="flex grow items-center justify-center text-right hover:rounded-bl-3xl hover:bg-purple-300 hover:text-slate-200">
					<button className="inline-block text-2xl md:text-5xl">
						<BiExpand className="mr-2 inline" />
					</button>
				</div>
			</div>
			{toggleEdit ? (
				<GraphCanvasEditBar
					datasetOne={props.datasetOne}
					datasetOneFormat={props.datasetOneFormat}
					datasetTwo={props.datasetTwo}
					datasetTwoFormat={props.datasetTwoFormat}
					updateDatasetInfo={props.updateDatasetInfo}
				/>
			) : null}

			{/* Modal's body */}

			<input type="checkbox" id="share-box" className="modal-toggle" />

			<label htmlFor="share-box" className="modal-bottom sm:modal-middle modal cursor-pointer">
				{/* <div className="modal-bottom sm:modal-middle modal"> */}
				<div className="modal-box flex flex-1 flex-col justify-evenly">
					<div className="flex items-start  justify-between">
						<h3 className="text-lg font-bold">Embed Chart</h3>
						{/* <div className="modal-action">
							<label
								htmlFor="share-box"
								className="btn-outline btn btn-secondary btn-xs -translate-y-6 border-0 text-xl"
							>
								<AiFillCloseCircle className="inline" />
							</label>
						</div> */}
					</div>
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
			{/* </div> */}
		</>
	)
}

export default GraphCanvasHeader
