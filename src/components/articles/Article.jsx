import NavBar from "../NavBar";
import articles from "../articles_list/articles.json";
import { useParams } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillBookmarkPlusFill, BsClipboardData } from "react-icons/bs";
import GraphCanvas from "./GraphCanvas";
import Footer from "../Footer";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import HighlightBtnGroup from "./HighlightBtnGroup";

const Article = () => {
	let article_id = useParams().articleId - 1;
	let article = articles[article_id];

	const [expandCanvas, setExpandCanvas] = useState(false);

	const [hideCommentBox, setHideCommentBox] = useState(true);
	const [hideBtnGroup, setHideBtnGroup] = useState(true);
	const [highlightBtnGroupLayout, setHighlightBtnGroupLayout] = useState({
		position: "absolute",
		left: "0",
		top: "0",
		heightInPixel: 28,
		widthInPixel: 70,
	});
	const [selectedRange, setSelectedRange] = useState(null);
	const [comments, setComments] = useState([
		{
			id: 1647882962153,
			author: "Lam Ka-song",
			message: "Such decision is disgraceful.",
		},
		{
			id: 1647883026008,
			author: "Li, Ang",
			message:
				"The underlying factors that have made Hong Kong's housing market the world's most expensive have not changed",
		},
		{
			id: 1647883089165,
			author: "Stone, John",
			message: "The signs of a slowdown in the housing market are beginning to pile up.",
		},
		{
			id: 1647884791063,
			author: "John Tung Chung",
			message: "Despite high home prices and inflation, a housing market pullback.",
		},
		{
			id: 1647873089165,
			author: "Stone, John",
			message:
				"But, if you buy a property this way, it might not appreciate for years as the market takes time to catch up to your top bid.",
		},
		{
			id: 1647883189165,
			author: "Virtue, Trevor",
			message: "The downtrend in our property markets continues as buyer and seller confidence wanes",
		},
	]);

	const setHighlightBtnGroupPosition = ({ left, top, width, height }) => {
		const { heightInPixel, widthInPixel } = highlightBtnGroupLayout;
		const computedLeft = left + width / 2 - widthInPixel / 2;
		const computedTop = window.scrollY + top - heightInPixel;

		setHighlightBtnGroupLayout({
			...highlightBtnGroupLayout,
			left: computedLeft,
			top: computedTop,
		});
	};

	const saveSelection = () => {
		if (window.getSelection) {
			const selected = window.getSelection();
			if (selected.getRangeAt && selected.rangeCount) {
				return selected.getRangeAt(0);
			}
		} else if (document.selection && document.selection.createRange) {
			return document.selection.createRange();
		}
		return null;
	};

	const restoreSelection = (range) => {
		if (range) {
			if (window.getSelection) {
				const selected = window.getSelection();
				selected.removeAllRanges();
				selected.addRange(range);
			}
		}
	};

	const updateCommentList = (newComment) => {
		setComments([...comments, newComment]);
	};

	const saveAndRestoreSelection = () => {
		const savedSelection = saveSelection();
		setSelectedRange(savedSelection);
		setHideBtnGroup(!hideBtnGroup);
		restoreSelection(savedSelection);
	};

	const toggleCommentBox = () => {
		setHideCommentBox(!hideCommentBox);
	};

	const toggleBtnGroup = () => {
		setHideBtnGroup(!hideBtnGroup);
	};

	const bubbleUpSelectedRegion = (e) => {
		const selection = window.getSelection();

		if (selection.toString()) {
			const range = selection.getRangeAt(0);
			const rect = range.getBoundingClientRect();

			setHighlightBtnGroupPosition(rect);
			setHideBtnGroup(false);
		} else if (selection.toString() === "") {
			setHideBtnGroup(true);
		}
	};

	return (
		<>
			<Toaster position="top-center" />

			{/* Header + HeaderBar */}
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

			<div className="flex flex-col" onMouseUp={() => bubbleUpSelectedRegion} onMouseMove={bubbleUpSelectedRegion}>
				<div className="mx-auto w-3/4">
					<h1 className="pt-5 text-2xl font-semibold text-slate-700 md:text-5xl">{article.title}</h1>
					<p className="mt-3 text-sm font-light md:text-base">
						{article.created_at} - {article.author}
					</p>
				</div>
				<div className="mx-auto w-3/4 pt-5 ">
					<p className="text-lg" dangerouslySetInnerHTML={{ __html: article.content[0] }} data-paragraph="0"></p>
				</div>

				<div className="flex justify-between">
					<div className={"mt-10 mb-5 w-full md:ml-20 " + (expandCanvas ? "md:mr-10 md:w-full" : "md:w-3/5 ")}>
						<GraphCanvas expandCanvas={expandCanvas} setExpandCanvas={setExpandCanvas} />
					</div>

					{!expandCanvas ? <CommentList comments={comments} /> : null}
				</div>

				<div className="mx-8 flex flex-col gap-9 pt-3 sm:flex-row">
					<div className="basis-auto sm:basis-2/3">
						{article.content.map((p, i) => {
							return i !== 0 ? (
								<p className="py-2 text-lg" key={i} dangerouslySetInnerHTML={{ __html: p }} data-paragraph={i}></p>
							) : null;
						})}
					</div>

					<div className="h-72 basis-auto rounded-lg sm:basis-1/3">
						<babylon model="/chart01.glb"></babylon>
						<p className="indent-3 text-sm italic text-slate-500">
							3D Visualization to the Growth of Private Domestic Houses
						</p>
					</div>
				</div>

				<div className="mx-5 mt-5 mb-5 flex flex-1 flex-col flex-wrap items-stretch gap-5 border-t-2 border-slate-200 pb-2 md:flex-row">
					<h3 className="block basis-full pt-1 text-lg font-semibold md:pt-3">You may also be interested:</h3>
					{articles.map((a, i) => {
						return i !== article_id ? (
							<Link to={`/articles/${a.id}`} key={i} className="md:w-1/4">
								<div className="card mt-3 w-full bg-base-100 shadow-xl md:h-32 lg:card-side">
									<figure>
										i
										<img src={a.photo_url} alt="Article Cover" className="w-32" />
									</figure>
									<div className="card-body">
										<h2 className="card-title text-base font-semibold md:text-lg">{a.title}</h2>
										<p className="text-sm md:text-base">{a.content[0].substring(0, 50) + " ..."}</p>
									</div>
								</div>
							</Link>
						) : null;
					})}
				</div>
			</div>

			<HighlightBtnGroup
				layout={highlightBtnGroupLayout}
				hidden={hideBtnGroup}
				saveAndRestoreSelection={saveAndRestoreSelection}
			/>
			<CommentBox
				selectedRange={selectedRange}
				updateCommentList={updateCommentList}
				toggleCommentBox={toggleCommentBox}
				toggleBtnGroup={toggleBtnGroup}
			/>

			<Footer />
		</>
	);
};

export default Article;
