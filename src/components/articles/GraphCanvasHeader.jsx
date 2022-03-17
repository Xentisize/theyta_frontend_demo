import { ImBubbles3 } from "react-icons/im"
import { BsHeart, BsShareFill } from "react-icons/bs"
import { BiEdit, BiExpand } from "react-icons/bi"

const GraphCanvasHeader = () => {
	return (
		<div className="flex flex-1 items-stretch rounded-t-xl bg-purple-200">
			<div className="indicator avatar mr-4 py-4 pl-4 hover:rounded-tl-xl hover:bg-purple-300 md:mr-10 md:pr-6 md:pl-10">
				<div className="w-16 rounded-full">
					<img
						src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
						alt="authors"
					/>
				</div>
				<span className="indicator-item badge badge-warning">VIP</span>
			</div>
			<div className="grow pt-7 text-center hover:rounded-bl-3xl hover:bg-purple-300 hover:text-slate-200">
				<a href="#" className="text-2xl md:text-4xl">
					<ImBubbles3 className="mr-2 inline" />
					<span>256</span>
				</a>
			</div>
			<div className="grow pt-7 text-center hover:rounded-bl-3xl hover:bg-purple-300 hover:text-slate-200">
				<a href="#" className="text-2xl md:text-4xl">
					<BsHeart className="mr-2 inline" />
					<span>12K</span>
				</a>
			</div>
			<div className="grow pt-7 text-center hover:rounded-bl-3xl hover:bg-purple-300 hover:text-slate-200">
				<a href="#" className="text-3xl md:text-4xl">
					<BsShareFill className="mr-2 inline" />
				</a>
			</div>
			<div className="grow pt-6 text-center hover:rounded-bl-3xl hover:bg-purple-300 hover:text-slate-200">
				<a href="#" className="inline-block text-4xl md:text-5xl">
					<BiEdit className="mr-2 inline" />
				</a>
			</div>
			<div className="grow pt-6 text-right hover:rounded-bl-3xl hover:bg-purple-300 hover:text-slate-200">
				<a href="#" className="inline-block text-4xl md:text-5xl">
					<BiExpand className="mr-2 inline" />
				</a>
			</div>
		</div>
	)
}

export default GraphCanvasHeader
