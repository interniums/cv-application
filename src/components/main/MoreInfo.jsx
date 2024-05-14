import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import TextField from '@mui/material/TextField'
import styles from '../../styles/Main.module.css'
import { dataB } from '../../data'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import plusicon from '../../assets/plusicon.svg'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { useState } from 'react'

export default function MoreInfo() {

	const [data, setData] = useState({
		maritual: dataB.maritual,
		date: dataB.date,
		gender: dataB.gender,
		website: dataB.website,
		linkdln: dataB.linkdln
	})

	const handleData = (e) => {
		const name = e.target.name
		const value = e.target.value
		setData((prev) => {
			return {...prev, [name]: value}
		})
		dataB[name] = value
	}

	return (
		<div className={styles.moreInfoContainer}>
			<section className={styles.ageSection}>
				{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker inputFormat="MM/DD/YYYY" disableFuture name='date' value={data.date} onChange={handleData} label="Date of birth"/>
				</LocalizationProvider> */}
				<input placeholder='Chose birth date' type="date" value={data.date} onChange={handleData} name='date' className={styles.datePicker}/>
				<TextField
					value={data.maritual}
					fullWidth
					name='maritual'
					label="Maritual Status"
					id="outlined-size-medium"
					size="big"
					onChange={handleData}
				/>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Gender</InputLabel>
					<Select
						value={data.gender}
						name='gender'
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="Gender"
						onChange={handleData}
					>
						<MenuItem value='man'>Man</MenuItem>
						<MenuItem value='woman'>Women</MenuItem>
						<MenuItem value='else'>Else</MenuItem>
					</Select>
      </FormControl>
			</section>
			<section className={styles.websiteSection}>
				<TextField
					value={data.website}
					fullWidth
					name='website'
					label="Website"
					id="outlined-size-medium"
					size="big"
					onChange={handleData}
				/>
				<TextField
					value={data.linkdnl}
					fullWidth
					name='linkdln'
					label="Linkdln"
					id="outlined-size-medium"
					size="big"
					onChange={handleData}
					type='text'
				/>
			</section>
		</div>
	)
}