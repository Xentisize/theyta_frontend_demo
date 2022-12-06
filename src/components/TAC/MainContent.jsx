import { useState } from "react";

import { Editor } from "./Editor";
import ProgressBar from "@ramonak/react-progress-bar";

import { stopwords } from "./stopwords";

export default function MainContent({
	setTitle,
	coverImage,
	setCoverImage,
	anchorText,
	setAnchorText,
	paragraphText,
	setParagraphText,
}) {
	const autoSuggestionItems = [
		{
			key: "weight",
			popularity: 50.0,
		},
		{
			key: "weightlifting",
			popularity: 23.5,
		},
		{
			key: "diet",
			popularity: 75.0,
		},
		{
			key: "exercise",
			popularity: 80.0,
		},
		{
			key: "food",
			popularity: 75.4,
		},
		{
			key: "nutrition",
			popularity: 42.9,
		},
		{
			key: "health",
			popularity: 52.0,
		},
		{
			key: "healthy",
			popularity: 72.2,
		},
		{
			key: "workout",
			popularity: 66.1,
		},
	];

	const updateTitle = (event) => {
		let titleText = [];
		if (event.target.value) {
			setTitleInput(event.target.value);
			const words = event.target.value.trim().split(" ");
			for (const word of words) {
				if (!stopwords.includes(word)) {
					titleText.push(word);

					setFilteredAutoSuggestionItems(autoSuggestionItems.filter((suggestion) => suggestion.key.includes(word)));
				}
			}
			setTitle(titleText);
		}
	};

	const [toggleAutoSuggestion, setToggleAutoSuggestion] = useState(false);
	const [filteredAutoSuggestionItems, setFilteredAutoSuggestionItems] = useState([]);
	const [titleInput, setTitleInput] = useState("");

	return (
		<>
			<input
				type="text"
				onChange={updateTitle}
				className="my-2 mr-2 w-full rounded-xl border-none px-3 py-5 text-center text-2xl font-semibold text-slate-400  placeholder:text-slate-300 focus:ring-0"
				placeholder="Start with Title: Inspire the World"
				onFocus={() => {
					setToggleAutoSuggestion(true);
				}}
				defaultValue={titleInput}
			/>
			{toggleAutoSuggestion && (
				<div className="mx-2 mt-2 rounded-xl">
					<ul className="w-full rounded-xl bg-slate-100 text-xl">
						{filteredAutoSuggestionItems &&
							filteredAutoSuggestionItems.map((suggestion) => (
								<li
									className="mx-2 my-2 cursor-pointer rounded-xl px-2 py-2 text-slate-500 hover:bg-indigo-200 hover:text-slate-600"
									onClick={() => {
										setTitleInput((prevTitle) => {
											const title = prevTitle.split(" ").slice(0, -1);
											title.push(suggestion.key.charAt(0).toUpperCase() + suggestion.key.slice(1));
											return title.join(" ");
										});
										setToggleAutoSuggestion(false);
									}}
									key={suggestion.key}
								>
									<div className="flex flex-col">
										<div className="basis-full">{suggestion.key}</div>
										<div className="flex basis-full pl-4 text-sm">
											<span className="text-md mb-2 basis-1/12 italic">Popularity: </span>
											{/* <span>{suggestion.popularity}%</span> */}
											<span className="ml-2 basis-11/12">
												{/* <progress value={suggestion.popularity} max="100" className="w3-color-grey"></progress> */}
												<ProgressBar completed={suggestion.popularity} bgColor="#daa4e0" labelSize="12px" />
											</span>
										</div>
									</div>
								</li>
							))}
					</ul>
				</div>
			)}

			<div className="pr-2 text-right text-sm text-slate-400">{new Date().toString()}</div>

			{coverImage && (
				<div className="flex justify-center bg-slate-100 py-4 opacity-80">
					<img
						src={coverImage}
						alt="cover"
						className="w-4/12 cursor-pointer rounded-lg opacity-80 shadow-md"
						onClick={() => setCoverImage("")}
					/>
				</div>
			)}

			<Editor
				anchorText={anchorText}
				setAnchorText={setAnchorText}
				paragraphText={paragraphText}
				setParagraphText={setParagraphText}
			/>
		</>
	);
}
