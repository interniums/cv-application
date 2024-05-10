import { useState } from "react"
import Header from "./components/header-main/Header"

function App() {
  const [isPreview, setIsPreview] = useState(false)

	return (
		<Header />
	)
}

export default App
