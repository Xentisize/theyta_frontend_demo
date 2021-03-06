const Feature = () => {
	return (
		<>
			<div className="flex flex-col" id="features">
				<div className="flex flex-row justify-evenly bg-emerald-400 py-12 text-gray-100 shadow-lg">
					<div className="avatar w-32 lg:w-64">
						<figure className="mask mask-squircle self-center">
							<img src="/images/img01.jpg" alt="One-click creation" />
						</figure>
					</div>
					<div className="prose basis-2/3 px-3 py-3">
						<h3>Create Contents with Data on TheyTa</h3>
						<p>
							TheyTa is powered by hundreds of datasets from different fields. You can easily create your contents, with
							interactive contents with drag-and-drop.
						</p>
						<p>What's more, editors can earn T-Coins when your contents or data are shared or arhived.</p>
					</div>
				</div>

				<div className="flex flex-row justify-evenly bg-gray-700 py-12 shadow-lg">
					<div className="prose basis-2/3 px-3 py-3 text-gray-200">
						<h3>Data for Analysis</h3>
						<p>
							We understand there are lots of trivial work for data analysis. TheyTa provides you with handy tools to do
							the routine work.
						</p>
						<p>
							Certainly, you can not only get your hand dirty with our authentic datasets, input your data with our
							intelligent background and organised them neatly on cloud.
						</p>
					</div>
					<div className="avatar w-32 lg:w-64">
						<figure className="mask mask-squircle self-center">
							<img src="/images/img02.jpg" alt="One-click creation" />
						</figure>
					</div>
				</div>

				<div className="flex flex-row justify-evenly bg-emerald-400 py-12 text-slate-700 shadow-lg">
					<div className="avatar w-32 lg:w-64">
						<figure className="mask mask-squircle self-center">
							<img src="/images/img03.jpg" alt="One-click creation" />
						</figure>
					</div>
					<div className="prose basis-2/3 px-3 py-3 text-gray-100">
						<h3>Generating Graphs with TheyTa</h3>
						<p>
							A good graph worths thousand words. In TheyTa, you will feel the same like us because TheyTa gives you the
							powerful visulisation tools to tell a meaningful story with a click.
						</p>
					</div>
				</div>

				<div className="flex flex-row justify-evenly bg-gray-700 py-12 text-gray-200 shadow-lg">
					<div className="prose basis-2/3 px-3 py-3">
						<h3>Share Charts to Other Websites</h3>
						<p>
							Your graphs are not limited in TheyTa. You can easily export them to your favorable social media, or even
							your website, to facilitate discussion with others.
						</p>
					</div>
					<div className="avatar w-32 lg:w-64">
						<figure className="mask mask-squircle self-center">
							<img src="/images/img04.jpg" alt="One-click creation" />
						</figure>
					</div>
				</div>

				<div className="flex flex-row justify-evenly bg-emerald-400 py-12 text-gray-200 shadow-lg">
					<div className="avatar w-32 lg:w-64">
						<figure className="mask mask-squircle self-center">
							<img src="/images/img05.jpg" alt="One-click creation" />
						</figure>
					</div>
					<div className="prose basis-2/3 px-3 py-3">
						<h3>Interactive with People</h3>
						<p>
							Every piece in TheyTa is designed for meeting, comment and social media. Data is never stay in silos and
							you can now disseminate and discuss your data with people worldwide.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Feature
