import { paragraphSuggestions } from "./paragraphSuggestions";
import { useState, useEffect } from "react";

export default function SuggestionSidebar({ anchorText }) {
	const [filteredSuggestions, setFilteredSuggestions] = useState([]);

	useEffect(() => {
		if (anchorText !== "" && anchorText.length > 3) {
			let suggestions = paragraphSuggestions.filter((suggestion) => suggestion.includes(anchorText));
			setFilteredSuggestions(suggestions);
		} else {
			setFilteredSuggestions([]);
		}
	}, [anchorText]);

	const highlightAnchorText = (paragraph, anchorText) => {
		const originalParagraph = paragraph.split(" ");
		const words = paragraph
			.replaceAll(/[,.:?!-]/gi, "")
			.toLowerCase()
			.split(" ");
		console.log(words);
		const index = words.findIndex((word) => word.includes(anchorText));
		console.log(index);
		if (index >= 0) {
			originalParagraph.splice(index, 0, "<span class='highlight'>");
			originalParagraph.splice(index + 2, 0, "</span>");
		}
		return originalParagraph.join(" ");
	};

	return (
		<div className="mr-2 basis-1/2 gap-2 border-r-2 border-dashed border-slate-200 py-3 px-1">
			<h2 className="text-center text-xl font-semibold text-slate-400">Ideas to Inspire</h2>
			{filteredSuggestions
				.sort(() => 0.5 - Math.random())
				.slice(0, 3)
				.map((suggestion, index) => {
					return (
						<div
							key={index}
							className="cursor-pointer rounded-xl py-2 px-3 text-sm text-slate-500 hover:bg-slate-200 hover:font-semibold hover:italic"
							dangerouslySetInnerHTML={{ __html: highlightAnchorText(suggestion, anchorText) }}
						></div>
					);
				})}
		</div>
	);
}
