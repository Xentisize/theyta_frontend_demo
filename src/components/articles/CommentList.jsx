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
							<div key={c.id} className={"mx-5 py-3 shadow-xl " + ((i + 1) % 2 ? "bg-sky-50" : "bg-white")}>
								<a href={`#${c.id}`}>
									<div className="avatar mr-2 pl-3">
										<div className="w-12 rounded-full">
											<img
												src={"https://api.lorem.space/image/face?w=100&h=100&" + Math.random()}
												alt="avatar"
												className="w-8"
											/>
										</div>
									</div>
									<strong className="text-sm font-semibold italic text-slate-600">{c.author}:</strong>

									<p className="px-8 pt-3">{c.message}</p>
								</a>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default CommentList
