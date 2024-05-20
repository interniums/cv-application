/* eslint-disable react/prop-types */
import { TextField } from "@mui/material"
import styles from '../../styles/Main1.module.css'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from "react"
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import { skillsData } from "../../data"
import { flushSync } from "react-dom"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'


export default function Skills(props) {
	const [rerender, setRerender] = useState()

	const handleData = (e) => {
		const name = e.target.name
		const value = e.target.value
		props.setSkill((prev) => {
			return {...prev, [name]: value}
		})
	}

	const pushData = () => {
		flushSync(() => {skillsData.push(props.skill)})
		props.setSkill({...props.skill, id: crypto.randomUUID(), skill: '', level: ''})
	}

	return (
		<>
		<div className={styles.skill}>
			<div className={styles.interestsDiv}>
				<TextField onChange={handleData} name="skill" id="skillid" label='Skill' fullWidth value={props.skill.skill}/>
			</div>
			<FormControl>
				<InputLabel id="demo-simple-select-label">Level</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					label="Level"
					value={props.skill.level}
					name="level"
					onChange={handleData}
				>
					<MenuItem value={'beginner'}>beginner</MenuItem>
					<MenuItem value={'intermediate'}>intermediate</MenuItem>
					<MenuItem value={'experienced'}>experienced</MenuItem>
					<MenuItem value={'expert'}>expert</MenuItem>
				</Select>
			</FormControl>
		</div>
		<div>
			{skillsData.map((element, i) => (
				<div className={styles.skillsexp} key={skillsData[i].id}>
					<hr className={styles.lines} />
						<div className={styles.jobItem}>
							<div className={styles.leftItem}>
								<h4 className={styles.itemh4}>
									{skillsData[i].skill}
								</h4>
								<p className={styles.itemp}>
									{skillsData[i].level}
								</p>
							</div>
							<div className={styles.rightItem}>
								<div onClick={() => {skillsData.splice(i, 1); setRerender(Symbol())}}><DeleteIcon /></div>
							</div>
						</div>
						<hr className={styles.lines}/>
				</div>
			))}
		</div>
			<Button
				variant="text"
				size='big'
				fullWidth
				id='addExperienceButton'
				className={styles.addExperience}
				onClick={pushData}
			>
				Add another skill
				<AddIcon />
			</Button>	
		</>
	)
}