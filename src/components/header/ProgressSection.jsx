import styles from '../../styles/Progress.module.css'
import personicon from '../../assets/personicon.svg'
import experianceicon from '../../assets/experianceicon.svg'
import experianceiconBlack from '../../assets/experianceicon-black.svg'
import templateicon from '../../assets/templateicon.svg'
import templateiconBlack from '../../assets/templateicon-black.svg'
import { useState } from 'react'

export default function Progress(bar) {

	return (
		<div className={styles.container}>
			<div className={styles.progressContainer}>
				<h1>Personal details</h1>
				<div className={styles.progress}>
					<div className={styles.progressBar}>
						<div style={{backgroundColor: bar.b1}} className={styles.progressBarFiller1}></div>
						<div style={{backgroundColor: bar.b2}} className={styles.progressBarFiller2}></div>
						<div style={{backgroundColor: bar.b3}} className={styles.progressBarFiller3}></div>
					</div>
					<div className={styles.progressButtons}>
						<div className={styles.imgContainer}  id='personContainer'>
							<div style={{backgroundColor: bar.image1}} className={styles.iconContainer} id='personImageContainer'>
								<img className={styles.personimage} src={personicon} alt="" />
							</div>
							<div className={styles.lable}>Personal</div>
						</div>
						<div className={styles.imgContainer} id='experianceContainer'>
							<div style={{backgroundColor: bar.image2}} className={styles.iconContainer} id='experianceImageContainer'>
								<img className={styles.expimage} src={bar.exp == 'white' ? experianceicon : experianceiconBlack} alt="" />
							</div>
								<div className={styles.lable}>Experiance</div>
						</div>
						<div className={styles.imgContainer} id='templateContainer'>
							<div style={{backgroundColor: bar.image3}} className={styles.iconContainer} id='templateImageContainer'>
								<img className={styles.templateimage} src={bar.temp == 'white' ? templateicon : templateiconBlack} alt="" />
							</div>
							<div className={styles.lable}>Templates</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}