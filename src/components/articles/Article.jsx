import NavBar from "../NavBar"
import articles from "../articles_list/articles.json"
import { useParams } from "react-router-dom"
import { BiSearchAlt } from "react-icons/bi"
import { BsFillBookmarkPlusFill, BsClipboardData } from "react-icons/bs"
import GraphCanvas from "./GraphCanvas"

const Article = () => {
	let article_id = useParams().articleId - 1
	let article = articles[article_id]

	return (
		<>
			<NavBar hasUser={true} />
			<div className="flex w-full justify-between border-b-2 border-slate-200 px-10 py-5">
				<div className="text-xl text-red-400">
					<BsClipboardData className="mr-3 inline h-8 w-8" />
					Business &gt; <span className="text-slate-500">{article.topic}</span>
				</div>
				<div>
					<BiSearchAlt className="inline h-8 w-8" />
					<BsFillBookmarkPlusFill className="ml-5 inline h-8 w-8 text-red-400" />
				</div>
			</div>
			<div className="flex flex-col">
				<div className="mx-auto w-3/4">
					<h1 className="pt-5 text-5xl font-semibold text-slate-700">{article.title}</h1>
					<p className="mt-3 font-light">
						{article.created_at} - {article.author}
					</p>
				</div>
				<div className="mx-auto w-3/4 pt-5 ">
					<p className="text-lg font-medium">{article.content}</p>
				</div>

				<div className="mx-auto mt-10 w-4/5">
					<GraphCanvas />
				</div>
			</div>
		</>
	)
}

export default Article
