import { useState } from "react"
import Header from "./components/header/Header"
import Progress from "./components/header/ProgressSection"
import Main from "./components/main/Main"

function App() {
  const [isPreview, setIsPreview] = useState(false)

	return (
		<div className="content">
			<header className="headerSection">
				<Header />
				<Progress />
			</header>
			<main className="main">
				<div className="mainContainer">
					<Main />
				</div>
			</main>
		</div>
	)
}

export default App
