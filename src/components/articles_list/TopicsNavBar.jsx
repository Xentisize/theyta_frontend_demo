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
		<div className="ml-5 overflow-x-scroll whitespace-nowrap py-5">
			<label className="pr-3 text-sm font-light text-red-400 md:pr-5">Topic</label>
			{topics.map((t, i) => {
				return (
					<span key={t.id} className="shrink-0 px-2 text-base font-semibold md:px-5 md:text-xl">
						{t.topic}
						<span className="pl-3 text-slate-300 md:pl-10">/</span>
					</span>
				)
			})}
		</div>
	)
}

export default TopicsNavBar
