
const Hero = () => {
  return (
    <div className="hero min-h-fit" style={{backgroundImage: "url(/images/banner_hero_upl_v08.jpg)"}} id="hero">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="prose lg:max-w-xl max-w-sm">
          <h1 className="mb-5 font-bold text-white/90">TheyTa.com</h1>
          <h3 className="prose-lead">A revolutionary data platform enabling a new communication era.</h3>
          <p className="mb-5 prose prose-p prose-neutral lg:prose-2xl">TheyTa aims to revolutionize how we interact with data. Leveraging latest technology, theyta.com provides tools for data analysis, visualization for online sharing, interactions and collaboration. It is a platform for domain experts or retail users to capture the value of their data and analysis. At the same time, it is a community for people to verify and understand the truth behind data.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
