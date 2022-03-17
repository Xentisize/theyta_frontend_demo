const ArticleCarousel = () => {
	return (
		<div className="carousel h-96 w-full">
			<div id="slide1" className="carousel-item relative w-full">
				<div
					className="hero"
					style={{ backgroundImage: "url(https://api.lorem.space/image/furniture?w=1000&h=800&hash=8B7BCDC2)" }}
				>
					<div className="hero-overlay bg-opacity-40"></div>
					<div className="hero-content grow text-center">
						<div className="max-w-md">
							<h1 className="text-4xl leading-relaxed text-slate-300">Best priced furniture for new home</h1>
						</div>
					</div>
				</div>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide4" className="btn btn-circle">
						❮
					</a>
					<a href="#slide2" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<div
					className="hero"
					style={{ backgroundImage: "url(https://api.lorem.space/image/house?w=800&h=400&hash=2D297A22)" }}
				>
					<div className="hero-overlay bg-opacity-40"></div>
					<div className="hero-content grow text-center">
						<div className="max-w-md">
							<h1 className="text-4xl leading-relaxed text-slate-300">Property price will drop in 12 years</h1>
						</div>
					</div>
				</div>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide1" className="btn btn-circle">
						❮
					</a>
					<a href="#slide3" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<div
					className="hero"
					style={{ backgroundImage: "url(https://api.lorem.space/image/house?w=800&h=400&hash=500B67FB)" }}
				>
					<div className="hero-overlay bg-opacity-40"></div>
					<div className="hero-content grow text-center">
						<div className="max-w-md">
							<h1 className="text-4xl leading-relaxed text-slate-300">Will housing problems ever be solved?</h1>
						</div>
					</div>
				</div>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide2" className="btn btn-circle">
						❮
					</a>
					<a href="#slide4" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full">
				<div
					className="hero"
					style={{ backgroundImage: "url(https://api.lorem.space/image/movie?w=800&h=400&hash=225E6693)" }}
				>
					<div className="hero-overlay bg-opacity-40"></div>
					<div className="hero-content grow text-center">
						<div className="max-w-md">
							<h1 className="text-4xl leading-relaxed text-slate-300">The biggest hit of box office in 2047</h1>
						</div>
					</div>
				</div>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide3" className="btn btn-circle">
						❮
					</a>
					<a href="#slide1" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
		</div>
	)
}

export default ArticleCarousel
