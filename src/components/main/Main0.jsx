import styles from '../../styles/Main0.module.css'
import cameraicon from '../../assets/cameraicon.svg'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import plusicon from '../../assets/plusicon.svg'
import AddIcon from '@mui/icons-material/Add'
import { dataB } from '../../data'
import { useState } from 'react'
import MoreInfo from './MoreInfo'

export default function Main() {

	const [moreInfo, setMoreInfo] = useState(dataB.moreInfo)

	const [data, setData] = useState({
		firstName: dataB.firstName,
		lastName: dataB.lastName,
		email: dataB.email,
		country: dataB.country,
		city: dataB.city,
		phone: dataB.phone
	})

	const handleData = (e) => {
		const name = e.target.name
		const value = e.target.value
		setData((prev) => {
			return {...prev, [name]: value}
		})
		dataB[name] = value
	}

	const [image, setImage] = useState(dataB.photo)

	const imageHandler = event => {
		const input_file = document.getElementById('imageInput')
		const file = event.target.files
		const inputContainer = document.getElementById('inputContainer')
		let value
		input_file.addEventListener('change', handler)
		const convert_to_base64 = file => new Promise((response) => {
			const file_reader = new FileReader()
			file_reader.readAsDataURL(file)
			file_reader.onload = () => response(file_reader.result)
		})
		async function handler() {
			const file = document.querySelector('#imageInput').files
			value = await convert_to_base64(file[0])
			inputContainer.childNodes.forEach(element=>{element.style.display = 'none'})
			inputContainer.style.backgroundSize = ''
			setImage(value)
			dataB.photo = value
		}
		handler()
	}

	// console.log(data)
	// console.log(dataB)

	return (
		<div className={styles.container}>	
			<header className={styles.header}>
				<h3 className={styles.headerText}>Personal details</h3>
				<hr className={styles.hr} />
			</header>
			<section className={styles.section1}>
				<div id='photoContainer' className={styles.photoContainer}>
					<label style={{backgroundImage: `url(${image})`, backgroundSize: '64px'}} id='inputContainer' htmlFor="imageInput" className={styles.lable}>
						<p className={styles.phototext}>Add photo (optional)</p>
						<input id='imageInput' onChange={imageHandler} className={styles.imageInput} type="file" accept="image/*"/>
					</label>
				</div>
				<div className={styles.nameContainer}>
					<TextField
						name='firstName'
						className='firstNameInput'
						label="First name"
						id="outlined-size-medium"
						size="big"
						value={data.firstName}
						onChange={handleData}
					/>
					<TextField
						name='lastName'
						label="Last name"
						id="outlined-size-medium"
						size="big"
						fullWidth
						value={data.lastName}
						onChange={handleData}
					/>
				</div>
			</section>
			<section className={styles.section2}>
				<div className={styles.mailContainer}>
				<TextField
						name='email'
						label="Email adress"
						id="outlined-size-medium"
						size="big"
						fullWidth
						value={data.email}
						onChange={handleData}
					/>
					<TextField
						name='phone'
						label="Phone number"
						id="outlined-size-medium"
						size="big"
						fullWidth
						value={data.phone}
						onChange={handleData}
					/>
				</div>
				<div className={styles.locationContainer}>
					<TextField
						name='country'
						label="Country"
						id="outlined-size-medium"
						size="big"
						fullWidth
						value={data.country}
						onChange={handleData}
					/>
					<TextField
						name='city'
						label="City"
						id="outlined-size-medium"
						size="big"
						fullWidth
						value={data.city}
						onChange={handleData}
					/>
				</div>
			</section>
			{
				moreInfo ? 
				<>
					<MoreInfo />
					<Button
						variant="text"
						size='big'
						fullWidth
						id='moreInfoButton'
						className={styles.moreInfo}
						onClick={()=> setMoreInfo(false)}
					>
						Less information
						<img className={styles.plusicon} src={plusicon} alt="" />
					</Button>
				</>
				: <div className={styles.button}>
				<Button
					variant="text"
					size='big'
					fullWidth
					id='moreInfoButton'
					className={styles.moreInfo}
					onClick={()=> setMoreInfo(true)}
				>
					More information
					<AddIcon />
				</Button>
			</div>
			}
		</div>
	)
}