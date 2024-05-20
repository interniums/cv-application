import styles from '../../styles/Main1.module.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import WorkIcon from '@mui/icons-material/Work'
import TextFieldMain from './TextFieldMain'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import SchoolIcon from '@mui/icons-material/School'
import InfoIcon from '@mui/icons-material/Info'
import { useState } from 'react'
import { dataB, languageData, skillsData } from '../../data'
import { jobData } from '../../data'
import { eduData } from '../../data'
import WorkExp from './WorkExp'
import Main1Inputs from './Main1Inputs'
import EducationInputs from './EducationInputs'
import EduExp from './EduExp'
import { TextField } from '@mui/material'
import Skills from './Skills'
import Languages from './Languages'

export default function Main1() {
	const [start, setStart] = useState(2010)
	const [end, setEnd] = useState(2022)
	const [show, setShow] = useState(true)
	const [showEducation, setShowEducation] = useState(true)
	const [edit, setEdit] = useState()
	let id = crypto.randomUUID()
	const [data, setData] = useState({
		id: id,
		jobTitle: '',
		city: '',
		employer: '',
		start: 2015,
		end: 2022,
		description: ''
	})

	let eduId = crypto.randomUUID()
	const [dataEdu, setEduData] = useState({
		id: eduId,
		degree: '',
		city: '',
		school: '',
		start: 2015,
		end: 2022,
		description: ''
	})
	const [showEdu, setShowEdu] = useState(true)

	let skillId = crypto.randomUUID()
	const [skill, setSkill] = useState({
		id: skillId,
		skill: '',
		level: ''
	})

	let languageID = crypto.randomUUID()
	const [language, setLanguage] = useState({
		id: languageID,
		language: '',
		level: ''
	})

	// console.log(dataB)
	// console.log(jobData)
	// console.log(eduData)
	// console.log(languageData)

	return (
		<>
			<section className={styles.objectiveContainer}>
				<header className={styles.objectiveHeader}>
					<div className={styles.objectiveText}><AccountCircleOutlinedIcon />Resume Objective</div>
					<hr className={styles.objectiveLine} />
				</header>
				<main className={styles.main}>
					<TextFieldMain direction='objective'/>
				</main>
			</section>
			<section className={styles.expContainer}>
				<header className={styles.objectiveHeader}>
					<div className={styles.objectiveText}><WorkIcon />Work experience</div>
					<hr className={styles.objectiveLine} />
				</header>
				<>
					{
						show == true ? 
						<>
						<Main1Inputs data={data} setData={setData} show={show} setShow={setShow}/>
						{/* <TextFieldMain 
							setData={setData}
							data={data}
							direction={'jobDescription'}
						/> */}
						</>  : null
					}
					<WorkExp setData={setData} setShow={setShow}/>
					{
						show == false ? <Button
							variant="text"
							size='big'
							fullWidth
							id='addExperienceButton'
							className={styles.addExperience}
							onClick={()=> setShow(true)}
						>
							Add another work experience
							<AddIcon />
						</Button>
						: null
					}
				</>
			</section>
			<section className={styles.educationContainer}>
				<header className={styles.objectiveHeader}>
					<div className={styles.objectiveText}><SchoolIcon />Education and Qualifications</div>
					<hr className={styles.objectiveLine} />
				</header>
				{
					showEdu == true ? 
						<>
							<EducationInputs dataEdu={dataEdu} setEduData={setEduData} showEdu={showEdu} setShowEdu={setShowEdu}/> 
							{/* <TextFieldMain 
								setEduData={setEduData}
								dataEdu={dataEdu}
								direction={'eduDescription'}
							/> */}
						</>
					: null
				}
				<EduExp setShowEdu={setShowEdu} eduData={eduData} setEduData={setEduData}/>
				{
						showEdu == false ? <Button
							variant="text"
							size='big'
							fullWidth
							id='addExperienceButton'
							className={styles.addExperience}
							onClick={()=> setShowEdu(true)}
						>
							Add another education
							<AddIcon />
						</Button>
						: null
					}
			</section>
			<section className={styles.otherContainer}>
				<header className={styles.objectiveHeader}>
					<div className={styles.objectiveText}><InfoIcon />Other information</div>
					<hr className={styles.objectiveLine} />
				</header>
				<div className={styles.other}>
					<div className={styles.interests}>
						<TextField label='Interests' fullWidth/>
					</div>
					<Skills skill={skill} setSkill={setSkill}/>
					<Languages language={language} setLanguage={setLanguage}/>
				</div>
			</section>
		</>
	)
}