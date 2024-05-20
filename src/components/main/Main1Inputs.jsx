/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import TextFieldMain from './TextFieldMain'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import AlertDialog from '../mui/AlertDialog'
import styles from '../../styles/Main1.module.css'
import { useState } from 'react'
import { flushSync } from 'react-dom'
import { jobData } from '../../data'
import WorkExp from './WorkExp'


export default function Main1Inputs(props) {

	const saveJobData = () => {
		flushSync(() => {jobData.push(props.data)})
		props.setData({...props.data, jobTitle: '', city: '', employer: '', description: '', start: 2015, end: 2022, id: crypto.randomUUID()})
		props.setShow(false)
	}
	
	const handleData = (e) => {
		const name = e.target.name
		const value = e.target.value
		props.setData((prev) => {
			return {...prev, [name]: value}
		})
	}

	const deleteJobData = () => {
		props.setData({...props.data, jobTitle: '', city: '', employer: '', description: '', start: 2015, end: 2022, id: crypto.randomUUID()})
		props.setShow(false)
	}

	function showHandler() {
		props.setShow(true)
	}

	return (
		<>
			<main className={styles.expMain}>
				<div className={styles.expSection1}>
					<TextField
						name='jobTitle'
						className='jobTitleInput'
						label="Job Title"
						id="outlined-size-medium"
						size="big"
						fullWidth
						onChange={handleData}
						value={props.data.jobTitle}
					/>
					<TextField
						fullWidth
						name='city'
						className='jobCityinput'
						label="City/Town"
						id="outlined-size-medium"
						size="big"
						onChange={handleData}
						value={props.data.city}
					/>
				</div>
				<div className={styles.expSection2}>
					<TextField
						fullWidth
						name='employer'
						className='employerInput'
						label="Employer"
						id="outlined-size-medium"
						size="big"
						onChange={handleData}
						value={props.data.employer}
					/>
				</div>
				<div className={styles.section3}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Start year</InputLabel>
						<Select
							name='start'
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={props.data.start}
							label="Start year"
							onChange={handleData}
						>
							<MenuItem value={1960}>1960</MenuItem><MenuItem value={1961}>1961</MenuItem><MenuItem value={1962}>1962</MenuItem><MenuItem value={1963}>1963</MenuItem><MenuItem value={1964}>1964</MenuItem><MenuItem value={1965}>1965</MenuItem><MenuItem value={1966}>1966</MenuItem><MenuItem value={1967}>1967</MenuItem><MenuItem value={1968}>1968</MenuItem><MenuItem value={1969}>1969</MenuItem><MenuItem value={1970}>1970</MenuItem><MenuItem value={1971}>1971</MenuItem><MenuItem value={1972}>1972</MenuItem><MenuItem value={1973}>1973</MenuItem><MenuItem value={1974}>1974</MenuItem><MenuItem value={1975}>1975</MenuItem><MenuItem value={1976}>1976</MenuItem><MenuItem value={1977}>1977</MenuItem><MenuItem value={1978}>1978</MenuItem><MenuItem value={1979}>1979</MenuItem><MenuItem value={1980}>1980</MenuItem><MenuItem value={1981}>1981</MenuItem><MenuItem value={1982}>1982</MenuItem><MenuItem value={1983}>1983</MenuItem><MenuItem value={1984}>1984</MenuItem><MenuItem value={1985}>1985</MenuItem><MenuItem value={1986}>1986</MenuItem><MenuItem value={1987}>1987</MenuItem><MenuItem value={1988}>1988</MenuItem><MenuItem value={1989}>1989</MenuItem><MenuItem value={1990}>1990</MenuItem><MenuItem value={1991}>1991</MenuItem><MenuItem value={1992}>1992</MenuItem><MenuItem value={1993}>1993</MenuItem><MenuItem value={1994}>1994</MenuItem><MenuItem value={1995}>1995</MenuItem><MenuItem value={1996}>1996</MenuItem><MenuItem value={1997}>1997</MenuItem><MenuItem value={1998}>1998</MenuItem><MenuItem value={1999}>1999</MenuItem><MenuItem value={2000}>2000</MenuItem><MenuItem value={2001}>2001</MenuItem><MenuItem value={2002}>2002</MenuItem><MenuItem value={2003}>2003</MenuItem><MenuItem value={2004}>2004</MenuItem><MenuItem value={2005}>2005</MenuItem><MenuItem value={2006}>2006</MenuItem><MenuItem value={2007}>2007</MenuItem><MenuItem value={2008}>2008</MenuItem><MenuItem value={2009}>2009</MenuItem><MenuItem value={2010}>2010</MenuItem><MenuItem value={2011}>2011</MenuItem><MenuItem value={2012}>2012</MenuItem><MenuItem value={2013}>2013</MenuItem><MenuItem value={2014}>2014</MenuItem><MenuItem value={2015}>2015</MenuItem><MenuItem value={2016}>2016</MenuItem><MenuItem value={2017}>2017</MenuItem><MenuItem value={2018}>2018</MenuItem><MenuItem value={2019}>2019</MenuItem><MenuItem value={2020}>2020</MenuItem><MenuItem value={2021}>2021</MenuItem><MenuItem value={2022}>2022</MenuItem><MenuItem value={2023}>2023</MenuItem><MenuItem value={2024}>2024</MenuItem><MenuItem value={2025}>2025</MenuItem><MenuItem value={2026}>2026</MenuItem><MenuItem value={2027}>2027</MenuItem><MenuItem value={2028}>2028</MenuItem><MenuItem value={2029}>2029</MenuItem><MenuItem value={2030}>2030</MenuItem>
						</Select>
					</FormControl>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">End year</InputLabel>
						<Select
							name='end'
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={props.data.end}
							label="End year"
							onChange={handleData}
						>
							<MenuItem value={1960}>1960</MenuItem><MenuItem value={1961}>1961</MenuItem><MenuItem value={1962}>1962</MenuItem><MenuItem value={1963}>1963</MenuItem><MenuItem value={1964}>1964</MenuItem><MenuItem value={1965}>1965</MenuItem><MenuItem value={1966}>1966</MenuItem><MenuItem value={1967}>1967</MenuItem><MenuItem value={1968}>1968</MenuItem><MenuItem value={1969}>1969</MenuItem><MenuItem value={1970}>1970</MenuItem><MenuItem value={1971}>1971</MenuItem><MenuItem value={1972}>1972</MenuItem><MenuItem value={1973}>1973</MenuItem><MenuItem value={1974}>1974</MenuItem><MenuItem value={1975}>1975</MenuItem><MenuItem value={1976}>1976</MenuItem><MenuItem value={1977}>1977</MenuItem><MenuItem value={1978}>1978</MenuItem><MenuItem value={1979}>1979</MenuItem><MenuItem value={1980}>1980</MenuItem><MenuItem value={1981}>1981</MenuItem><MenuItem value={1982}>1982</MenuItem><MenuItem value={1983}>1983</MenuItem><MenuItem value={1984}>1984</MenuItem><MenuItem value={1985}>1985</MenuItem><MenuItem value={1986}>1986</MenuItem><MenuItem value={1987}>1987</MenuItem><MenuItem value={1988}>1988</MenuItem><MenuItem value={1989}>1989</MenuItem><MenuItem value={1990}>1990</MenuItem><MenuItem value={1991}>1991</MenuItem><MenuItem value={1992}>1992</MenuItem><MenuItem value={1993}>1993</MenuItem><MenuItem value={1994}>1994</MenuItem><MenuItem value={1995}>1995</MenuItem><MenuItem value={1996}>1996</MenuItem><MenuItem value={1997}>1997</MenuItem><MenuItem value={1998}>1998</MenuItem><MenuItem value={1999}>1999</MenuItem><MenuItem value={2000}>2000</MenuItem><MenuItem value={2001}>2001</MenuItem><MenuItem value={2002}>2002</MenuItem><MenuItem value={2003}>2003</MenuItem><MenuItem value={2004}>2004</MenuItem><MenuItem value={2005}>2005</MenuItem><MenuItem value={2006}>2006</MenuItem><MenuItem value={2007}>2007</MenuItem><MenuItem value={2008}>2008</MenuItem><MenuItem value={2009}>2009</MenuItem><MenuItem value={2010}>2010</MenuItem><MenuItem value={2011}>2011</MenuItem><MenuItem value={2012}>2012</MenuItem><MenuItem value={2013}>2013</MenuItem><MenuItem value={2014}>2014</MenuItem><MenuItem value={2015}>2015</MenuItem><MenuItem value={2016}>2016</MenuItem><MenuItem value={2017}>2017</MenuItem><MenuItem value={2018}>2018</MenuItem><MenuItem value={2019}>2019</MenuItem><MenuItem value={2020}>2020</MenuItem><MenuItem value={2021}>2021</MenuItem><MenuItem value={2022}>2022</MenuItem><MenuItem value={2023}>2023</MenuItem><MenuItem value={2024}>2024</MenuItem><MenuItem value={2025}>2025</MenuItem><MenuItem value={2026}>2026</MenuItem><MenuItem value={2027}>2027</MenuItem><MenuItem value={2028}>2028</MenuItem><MenuItem value={2029}>2029</MenuItem><MenuItem value={2030}>2030</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className={styles.section4}>
					<TextFieldMain 
						setData={props.setData}
						data={props.data}
						direction={'jobDescription'}
					/>
					<div className={styles.buttonsContainer}>
						<AlertDialog direction={'job'}/>
						<div className={styles.buttonsChild}>
							<Button onClick={deleteJobData} id='saveButton' variant="outlined">
								DELETE
								<DeleteIcon />
							</Button>
							<Button onClick={saveJobData} id='saveButton' variant="outlined">
								SAVE
								<SaveIcon />
							</Button>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}