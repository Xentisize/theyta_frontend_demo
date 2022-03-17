const TopicsNavBar = () => {
	const topics = [
		{
			id: 1,
			topic: "Housing",
			url: "#",
		},
		{
			id: 2,
			topic: "Economy",
			url: "#",
		},
		{
			id: 3,
			topic: "Sports",
			url: "#",
		},
		{
			id: 4,
			topic: "Transport",
			url: "#",
		},
		{
			id: 5,
			topic: "Weather",
			url: "#",
		},
	]

	return (
		<div className="flex w-full overflow-x-auto border-t-2 border-b-4">
			<div className="ml-5 py-5">
				<label className="pr-5 text-sm font-light text-red-400">Topic</label>
				{topics.map((t, i) => {
					return (
						<span key={t.id} className="inline shrink-0 px-5 text-xl font-semibold">
							{t.topic}
							<span className="pl-10 text-slate-300">/</span>
						</span>
					)
				})}
			</div>
		</div>
	)
}

export default TopicsNavBar
