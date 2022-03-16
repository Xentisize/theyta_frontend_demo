import { SiMinutemailer } from "react-icons/si"

const Team = () => {
	return (
		<div className="bg-slate-800 text-slate-200" id="team">
			<div className="flex basis-full flex-row py-12">
				<div className="w-full flex-auto basis-full flex-wrap text-center">
					<h2 className="text-3xl font-semibold">Our Team</h2>
					<p className="pt-2 text-lg">
						We are talents from different fields so as to ensure TheyTa understands all your demand.
					</p>
				</div>
			</div>

			<div className="flex grow flex-row flex-wrap justify-evenly px-5">
				<div className="basis-1/2 items-center lg:basis-1/4">
					<div className="flex flex-col">
						<div className="grow basis-full self-center">
							<img src="/images/profile/character_v01.png" alt="Charlie" />
						</div>
						<div className="text-center">
							<h3 className="text-2xl font-semibold">Charlie</h3>
							<p className="text-lg">CEO / Business Development Manager</p>
							<p className="text-md">Experienced in tesearch and business consulting</p>
						</div>
					</div>
				</div>
				<div className="basis-1/2 lg:basis-1/4">
					<div className="flex flex-col">
						<div className="grow basis-full self-center">
							<img src="/images/profile/character_v02.png" alt="Ricky" />
						</div>
						<div className="text-center">
							<h3 className="text-2xl font-semibold">Ricky</h3>
							<p className="text-lg">Tech Lead</p>
							<p className="text-md">Powered by AWS, Python and ReactJS</p>
						</div>
					</div>
				</div>
				<div className="basis-1/2 lg:basis-1/4">
					<div className="flex flex-col">
						<div className="grow basis-full self-center">
							<img src="/images/profile/character_v03.png" alt="Rova" />
						</div>
						<div className="text-center">
							<h3 className="text-2xl font-semibold">Rova</h3>
							<p className="text-lg">Product Manager</p>
							<p className="text-md">Veteran project manager and business analyst</p>
						</div>
					</div>
				</div>
				<div className="basis-1/2 lg:basis-1/4">
					<div className="flex flex-col">
						<div className="grow basis-full self-center">
							<img src="/images/profile/character_v04.png" alt="Silverado" />
						</div>
						<div className="text-center">
							<h3 className="text-2xl font-semibold">Silverado</h3>
							<p className="text-lg">UX/UI Designer</p>
							<p className="text-md">Interactive design and digital marketing specialist</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex pt-2">
				<a
					className="nd:text-2xl btn mx-auto my-5 gap-3 border-none bg-slate-100 text-lg text-slate-500 drop-shadow-sm hover:bg-slate-200"
					href="mailto:info@theyta.com"
				>
					<SiMinutemailer />
					info@theyta.com
				</a>
			</div>
		</div>
	)
}

export default Team
