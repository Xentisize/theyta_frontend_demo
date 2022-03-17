import NavBar from "../NavBar"
import ArticleCarousel from "./ArticleCarousel"
import ArticlesList from "./ArticlesList"
import TopicsNavBar from "./TopicsNavBar"
import Footer from "../Footer"

const ArticlesListPage = () => {
	return (
		<>
			<NavBar hasUser={true} />
			<TopicsNavBar />
			<ArticleCarousel />
			<ArticlesList />
			<Footer />
		</>
	)
}

export default ArticlesListPage
