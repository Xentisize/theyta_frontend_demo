import { createContext, useState } from "react";

export SuggestionContext = createContext()

export function SentenceSuggestionContext({ children }) {
	const suggestionState = useState("");
	const SuggestionContext = createContext(suggestionState);

	return <SuggestionContext.Provider value={suggestionState}>{children}</SuggestionContext.Provider>;
}
