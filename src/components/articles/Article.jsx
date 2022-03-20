import NavBar from "../NavBar"
import articles from "../articles_list/articles.json"
import { useParams } from "react-router-dom"
import { BiSearchAlt } from "react-icons/bi"
import { BsFillBookmarkPlusFill, BsClipboardData } from "react-icons/bs"
import GraphCanvas from "./GraphCanvas"
import Footer from "../Footer"
import ShareFloatPage from "./ShareFloatPage"
import { useState } from "react"
import { Toaster } from "react-hot-toast"

const Article = () => {
	let article_id = useParams().articleId - 1
	let article = articles[article_id]

	const [showShare, setShowShare] = useState(false)

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
					<p className="text-lg">{article.content}</p>
				</div>

				<div className="mx-auto mt-10 mb-5 w-4/5">
					<GraphCanvas setShowShare={setShowShare} showShare={showShare} />
				</div>
			</div>
			<Footer />
			{/* {showShare ? <ShareFloatPage showShare={showShare} /> : null}
			 */}
			<ShareFloatPage />
		</>
	)
}

export default Article
