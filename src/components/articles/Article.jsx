import NavBar from "../NavBar"
import articles from "../articles_list/articles.json"
import { useParams } from "react-router-dom"
import { BiSearchAlt } from "react-icons/bi"
import { BsFillBookmarkPlusFill, BsClipboardData } from "react-icons/bs"
import GraphCanvas from "./GraphCanvas"
import Footer from "../Footer"
import { useState } from "react"
import { Toaster } from "react-hot-toast"
import { Link } from "react-router-dom"

const Article = () => {
	let article_id = useParams().articleId - 1
	let article = articles[article_id]

	const [expandCanvas, setExpandCanvas] = useState(false)

	return (
		<>
			<Toaster position="top-center" />

			<NavBar hasUser={true} />
			<div className="flex w-full items-center justify-between border-b-2 border-slate-200 px-3 py-3 md:py-5 md:px-10">
				<div className="text-base text-red-400 md:text-xl">
					<BsClipboardData className="mr-3 inline h-6 w-6 md:h-8 md:w-8" />
					Business &gt; <span className="text-slate-500">{article.topic}</span>
				</div>
				<div>
					<BiSearchAlt className="inline h-8 w-8" />
					<BsFillBookmarkPlusFill className="ml-5 inline h-8 w-8 text-red-400" />
				</div>
			</div>
			<div className="flex flex-col">
				<div className="mx-auto w-3/4">
					<h1 className="pt-5 text-2xl font-semibold text-slate-700 md:text-5xl">{article.title}</h1>
					<p className="mt-3 text-sm font-light md:text-base">
						{article.created_at} - {article.author}
					</p>
				</div>
				<div className="mx-auto w-3/4 pt-5 ">
					<p className="text-lg" dangerouslySetInnerHTML={{ __html: article.content[0] }}></p>
				</div>

				<div className="flex justify-between">
					<div className={"mx-auto mt-10 mb-5 w-full md:ml-20 " + (expandCanvas ? "md:mr-20 md:w-full" : "md:w-3/5 ")}>
						<GraphCanvas expandCanvas={expandCanvas} setExpandCanvas={setExpandCanvas} />
					</div>
				</div>

				<div className="mx-auto w-3/4 pt-3 pb-5">
					{article.content.map((p, i) => {
						return i !== 0 ? <p className="py-2 text-lg" key={i} dangerouslySetInnerHTML={{ __html: p }}></p> : null
					})}
				</div>

				<div className="mx-5 mt-5 mb-5 flex flex-col flex-wrap gap-3 border-t-2 border-slate-200 pb-2 md:mx-20 md:flex-row">
					<h3 className="block basis-full pt-3 text-lg font-semibold">You may also be interested:</h3>
					{articles.map((a, i) => {
						return i !== article_id ? (
							<Link to={`/articles/${a.id}`} key={i}>
								<div className="card mt-3 bg-base-100 shadow-xl md:basis-1/3 lg:card-side">
									<figure>
										<img src={a.photo_url} alt="Article Cover" />
									</figure>
									<div className="card-body">
										<h2 className="card-title text-base font-semibold md:text-lg">{a.title}</h2>
										<p className="text-sm md:text-base">{a.content[0].substring(0, 50) + " ..."}</p>
									</div>
								</div>
							</Link>
						) : null
					})}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Article
