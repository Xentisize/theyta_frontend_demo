import { ImBubbles3 } from "react-icons/im"
import { BsHeart, BsShareFill } from "react-icons/bs"
import { BiEdit, BiExpand } from "react-icons/bi"
import { useState } from "react"
import GraphCanvasEditBar from "./GraphCanvasEditBar"
import { IconContext } from "react-icons"

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
				<div className="hidden grow items-center justify-center text-right hover:rounded-bl-3xl hover:bg-purple-300 hover:text-slate-200 md:flex">
					<button
						className="inline-block text-2xl md:text-5xl"
						onClick={() => {
							props.setExpandCanvas(!props.expandCanvas)
						}}
					>
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

			{/* </div> */}
		</>
	)
}

export default GraphCanvasHeader
