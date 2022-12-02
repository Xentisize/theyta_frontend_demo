import { useSharedAutocompleteContext } from "../context/SharedAutocompleteContext";

export default function AutocompleteComponent() {
	const [suggestion] = useSharedAutocompleteContext();
	console.log("Component", suggestion);

	return (
		<span>
			{console.log("Suggestion in component: ", suggestion)}
			{suggestion} {"(TAB)"}
		</span>
	);
}
