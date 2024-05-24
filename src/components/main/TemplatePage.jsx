import styles from '../../styles/Template.module.css'
import { dataB } from '../../data'
import { jobData } from '../../data'
import { eduData } from '../../data'
import { skillsData } from '../../data'
import { languageData } from '../../data'
import cameraicon from '../../assets/cameraicon.svg'


export default function TemplatePage() {

	return (
		<div id='pdf' className={styles.container}>
			<section className={styles.section}>
				<header className={styles.header}>
					<img src={dataB.photo} alt="" className={styles.image}/>
					<div className={styles.info}>
						<h3>{dataB.firstName} {dataB.lastName}</h3>
						<p>{dataB.email}</p>
						<p>{dataB.phone}</p>
						<p>{dataB.country}, {dataB.city}</p>
						<p>{dataB.gender}, {dataB.maritual}</p>
						<p>Birth: {dataB.date}</p>
					</div>
				</header>
				<main className={styles.main}>
					<div className={styles.section1}>
						<h2 className={styles.mainh2}>Description</h2>
						<div className={styles.description}>
							<hr />
							<div className={styles.descriptionText}>
								<p>{dataB.resumeObjective}</p>
							</div>
							<hr />
						</div>
					</div>
					<div className={styles.section2}>
						<h2 className={styles.mainh2}>Education</h2>
						<hr />
							{eduData.map(element=>(
								<div key={element.id} className={styles.edudiv}>
									<h3>{element.degree}</h3>
									<p>{element.school}</p>
									<p>{element.start}-{element.end}</p>
									<p>{element.description}</p>
								</div>
							))}
						<hr />
					</div>
					<div className={styles.section3}>
					<h2 className={styles.mainh2}>Experiance</h2>
						<hr />
							{jobData.map(element=>(
								<div key={element.id} className={styles.edudiv}>
									<h3>{element.jobTitle}</h3>
									<p>{element.employer}</p>
									<p>{element.start}-{element.end}</p>
									<p>{element.description}</p>
								</div>
							))}
						<hr />
					</div>
				</main>
			</section>
		</div>
	)
}