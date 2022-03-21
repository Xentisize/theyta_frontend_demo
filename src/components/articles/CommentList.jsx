import { FaRegComments } from "react-icons/fa"

const CommentList = ({ comments }) => {
	return (
		<div className="mt-10 mb-5 mr-20 hidden h-[700px] w-2/5 overflow-y-scroll rounded-2xl border-2 bg-blue-100 shadow-lg md:ml-10 md:flex md:flex-col">
			<h3 className="my-6 text-center text-4xl font-semibold text-slate-600" id="comments">
				<FaRegComments className="mx-3 inline" />
				Comments
			</h3>
			<div className="flex h-full flex-col divide-y-2 divide-dashed divide-slate-200 bg-slate-100">
				{comments
					.sort((a, b) => {
						return a.id < b.id
					})
					.map((c, i) => {
						return (
							<div key={c.id} className={"px-5 py-3 shadow-xl " + ((i + 1) % 2 ? "bg-sky-50" : "bg-white")}>
								<a href={`#${c.id}`}>
									<strong className="text-sm font-semibold italic text-slate-600">{c.author}:</strong>
								</a>
								<div className="flex">
									<div className="avatar">
										<div className="w-24 rounded-full">
											<img src={"https://api.lorem.space/image/face?w=100&h=100&" + Math.random()} alt="avatar" />
										</div>
									</div>
									<p className="px-5 pt-3">{c.message}</p>
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default CommentList
