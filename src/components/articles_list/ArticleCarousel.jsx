const ArticleCarousel = () => {
	return (
		<div className="carousel w-full">
			<div id="slide1" className="carousel-item relative w-full">
				<img src="/images/banners/img_banner01.jpg" className="w-full" alt="carousel" />
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide4" className="btn btn-sm btn-circle md:btn-md">
						❮
					</a>
					<a href="#slide2" className="btn btn-sm btn-circle md:btn-md">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<img src="/images/banners/img_banner02.jpg" className="w-full" alt="carousel" />
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide1" className="btn btn-sm btn-circle md:btn-md">
						❮
					</a>
					<a href="#slide3" className="btn btn-sm btn-circle md:btn-md">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<img src="/images/banners/img_banner03.jpg" className="w-full" alt="carousel" />
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide2" className="btn btn-sm btn-circle md:btn-md">
						❮
					</a>
					<a href="#slide4" className="btn btn-sm btn-circle md:btn-md">
						❯
					</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full bg-contain">
				<img src="/images/banners/img_banner04.jpg" className="w-full" alt="carousel" />
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide3" className="btn btn-sm btn-circle md:btn-md">
						❮
					</a>
					<a href="#slide1" className="btn btn-sm btn-circle md:btn-md">
						❯
					</a>
				</div>
			</div>
		</div>
	)
}

export default ArticleCarousel
