import articles from "./articles.json"
import authors from "./authors.json"
import { Link } from "react-router-dom"

const ArticlesList = () => {
	return (
		<div className="mx-auto w-5/6 -translate-y-3 rounded-lg bg-white drop-shadow-lg md:-translate-y-6">
			<div className="flex flex-col">
				<div className="flex flex-row flex-wrap">
					<div className="basis-full px-10 py-5 md:basis-1/3 md:py-10">
						<select className="select-bordered select-secondary select w-full">
							<option>Business</option>
							<option>Housing</option>
						</select>
					</div>
					<div className="form-control basis-full px-10 py-2 md:order-first md:basis-2/3 md:py-10">
						<div className="input-group">
							<input type="text" placeholder="Search topic, authors ..." className="input-bordered input w-full" />
							<button className="btn btn-square">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="my-5 mx-5">
					<div className="flex justify-between border-t-2 border-slate-200 py-5">
						<p className="ml-2 text-lg font-semibold md:ml-10 md:text-2xl">Latest Articles</p>
						<button className="btn-outline btn btn-sm md:btn-md md:mr-10">Read More</button>
					</div>
					<div>
						{articles.map((a, i) => {
							return (
								<div className="mb-5 flex grow" key={a.id}>
									<div className="basis-1/4">
										<img src={a.photo_url} alt="article covers" className="mx-auto md:w-1/2" />
									</div>
									<div className="basis-3/4">
										<p className="pl-10 text-sm text-blue-500">{a.topic}</p>
										<Link to={`/articles/${a.id}`}>
											<p className="pl-10 text-lg font-semibold text-slate-700 md:text-3xl">{a.title}</p>
										</Link>
										<p className="mt-3 pl-10 text-sm md:text-base">
											{a.created_at} - {a.author}
										</p>
									</div>
								</div>
							)
						})}
					</div>
				</div>
				<div className="mx-5 border-t-2 border-slate-200 pt-5">
					<p className="ml-4 mb-5 text-lg font-semibold md:ml-10 md:text-2xl">Authors</p>
					<div className="mx-auto flex flex-row flex-wrap justify-evenly gap-4 md:mx-10">
						{authors.map((a, i) => {
							return (
								<div className="mb-5 self-center text-center md:mb-10" key={a.id}>
									<div className="avatar">
										<div className="mx-auto w-24 rounded-full">
											<img src={a.avatar} alt="authors" />
										</div>
									</div>
									<p className="text-slate-500">{a.name}</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArticlesList
