import React from "react"
import ReactDOM from "react-dom"
// import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"
import Feature from "./components/Feature"
import NotFound from "./components/NotFound"
import Contact from "./components/Contact"
import ArticlesListPage from "./components/articles_list/ArticlesListPage"

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/feature/:featureId" element={<Feature />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/articles" element={<ArticlesListPage />} />
				{/* <Route path="/contact" element={<Contact />} />
        <Route path="/features/a" element={<Feature feature={}} /> */}
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
)
