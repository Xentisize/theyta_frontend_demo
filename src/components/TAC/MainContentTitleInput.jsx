import * as React from "react";
import Downshift from "downshift";

const items = [{ value: "apple" }, { value: "pear" }, { value: "orange" }, { value: "grape" }, { value: "banana" }];

export default function MainContentTitleInput() {
	return (
		<Downshift
			onChange={(selection) => alert(selection ? `You selected ${selection.value}` : "Selection Cleared")}
			itemToString={(item) => (item ? item.value : "")}
		>
			{({
				getInputProps,
				getItemProps,
				getLabelProps,
				getMenuProps,
				isOpen,
				inputValue,
				highlightedIndex,
				selectedItem,
				getRootProps,
			}) => (
				<div className="w-full px-2 py-2 text-2xl">
					<div
						{...getRootProps({}, { suppressRefError: true })}
						className="w-full"
						placeholder="Start with Title to Inspire"
					>
						<input {...getInputProps()} />
					</div>
					<ul {...getMenuProps()}>
						{isOpen
							? items
									.filter((item) => !inputValue || item.value.includes(inputValue))
									.map((item, index) => (
										<li
											{...getItemProps({
												key: item.value,
												index,
												item,
												style: {
													backgroundColor: highlightedIndex === index ? "lightgray" : "white",
													fontWeight: selectedItem === item ? "bold" : "normal",
												},
											})}
										>
											{item.value}
											<div>Heatness: 20</div>
										</li>
									))
							: null}
					</ul>
				</div>
			)}
		</Downshift>
	);
}
