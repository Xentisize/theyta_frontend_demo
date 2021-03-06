import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Feature from "./components/Feature"
import Team from "./components/Team"
import AppDownload from "./components/AppDownload"
import Footer from "./components/Footer"

function App() {
	return (
		<>
			<NavBar hasUser={false} />
			<Hero />
			<Feature />
			<Team />
			<AppDownload />
			<Footer />
		</>
	)
}

export default App
