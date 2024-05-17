import styles from '../../styles/TextField.module.css'
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined'
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined'
import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined'
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import SaveIcon from '@mui/icons-material/Save'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import { useRef, useState } from 'react'
import { dataB } from '../../data'
import { workExp } from '../../data'

export default function TextFieldMain(direction) {
	const [value, setValue] = useState('')
	const [alert, setAlert] = useState('none')
	const inputRef = useRef('')

	const getInput = () => {
		direction.direction == 'jobDescription' ? workExp.push({id: workExp.length, text: value}) : dataB[direction.direction] = value
	}

	const takeInput = (e) => {
		let input = e.target.innerHTML
		setValue(input)
	}

	const alertHandler = () => {
		alert == 'none' ? setAlert('flex') : null
		setTimeout(() => {
			setAlert('none')
		}, 2000)
	}

	console.log(value)
	console.log(workExp)

	return (

		<div className={styles.container}>
			<label className={styles.lable} htmlFor="">Description</label>
			<div className={styles.textField}>
				<header style={{display: 'flex'}} className={styles.header}>
					<button onClick={alertHandler} className={styles.button}><FormatBoldOutlinedIcon /></button>
					<button onClick={alertHandler} className={styles.button}><FormatItalicOutlinedIcon /></button>
					<button onClick={alertHandler} className={styles.button}><FormatUnderlinedOutlinedIcon /></button>
					<button onClick={alertHandler} className={styles.button}><FormatListNumberedOutlinedIcon /></button>
					<button onClick={alertHandler} className={styles.button}><FormatListBulletedOutlinedIcon /></button>
					<Alert
						color='#4c4c4c'
						style={{display: alert, transition: '.8s'}}
						severity="info">This feature is in progress...</Alert>
				</header>
				<div className={styles.main}>
					<p ref={inputRef} id='input' contentEditable={true} onKeyDown={takeInput} action="" className={styles.input}></p>
				</div>
			</div>
		</div>
	)
}