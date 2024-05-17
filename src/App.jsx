import { useState } from "react"
import Header from "./components/header/Header"
import Progress from "./components/header/ProgressSection"
import Main0 from "./components/main/Main0"
import Main1 from './components/main/Main1'
import Button from '@mui/material/Button'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined'

function App() {
	const [disable, setDisable] = useState({
		count: 0,
		left: true,
		right: false,
	})
	const [bar, setBar] = useState({
		b1: 'rgb(200, 200, 200)',
		b2: 'rgb(66, 80, 93)',
		b3: 'rgb(66, 80, 93)',
		image1: 'rgb(200, 200, 200)',
		image2: 'rgb(66, 80, 93)',
		image3: 'rgb(66, 80, 93)',
		exp: 'white',
		temp: 'white'
	})
	const handleButton = (e) => {
		const name = e.target.name
		name == 'left' ? setDisable({...disable, count: disable.count-- }) : setDisable({...disable, count: disable.count++ })
			if (disable.count < 1) {setDisable({...disable, right: false, left: true})} 
			else if (disable.count > 0) {setDisable({...disable, right: false, left: false})}
			if (disable.count == 2) {setDisable({...disable, right: true, left: false})} 
			else if (disable.count <= 2) {setDisable({...disable, right: false, left: false})}
			if (disable.count == 0) {setDisable({...disable, right: false, left: true})}
		if (disable.count == 1) {
			setBar({...bar, b2: 'rgb(200, 200, 200)', b3: 'rgb(66, 80, 93)', image2: 'rgb(200, 200, 200)', image3: 'rgb(66, 80, 93)', exp: 'black', temp:'white'})
		}
		if (disable.count == 2) {
			setBar({...bar, b2: 'rgb(200, 200, 200)', b3: 'rgb(200, 200, 200)', image2: 'rgb(200, 200, 200)', image3: 'rgb(200, 200, 200)', exp: 'black', temp: 'black'})
		}
		if (disable.count == 0) {
			setBar({...bar, b1: 'rgb(200, 200, 200)', b2: 'rgb(66, 80, 93)', b3: 'rgb(66, 80, 93)', image1: 'rgb(200, 200, 200)', image2: 'rgb(66, 80, 93)', image3: 'rgb(66, 80, 93)', temp: 'white', exp: 'white'})
		}
	}

	const [display, setDisplay] = useState(0)

	return (
		<div className="content">
			<div className="backside"></div>
			<header className="headerSection">
				<Header />
				<Progress {...bar}/>
			</header>
			<main className="main" style={{display: disable.count == 0 ? "flex" : 'none'}}>
				<div className="mainContainer">
					{
						disable.count == 0 ? <Main0 /> : console.log()
					}
				</div>
			</main>
			<div className="main2" style={{display: disable.count == 1 ? "grid" : 'none'}}>
				{
					disable.count == 1 ? <Main1 /> : console.log()
				}
			</div>
			<footer className="footerContainer">
				<Button variant="contained" size="large" name='left' disabled={disable.left} onClick={handleButton}>
				<KeyboardArrowLeftOutlinedIcon />
					Previous Step
				</Button>
				<Button variant="contained" size="large" name='right' disabled={disable.right} onClick={handleButton}>
					Next Step
					<KeyboardArrowRightOutlinedIcon />
				</Button>
			</footer>
		</div>
	)
}

export default App
