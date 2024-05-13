import styles from '../../styles/Progress.module.css'
import personicon from '../../assets/personicon.svg'
import experianceicon from '../../assets/experianceicon.svg'
import experianceiconBlack from '../../assets/experianceicon-black.svg'
import templateicon from '../../assets/templateicon.svg'
import templateiconBlack from '../../assets/templateicon-black.svg'

export default function Progress() {

	return (
		<div className={styles.container}>
			<div className={styles.progressContainer}>
				<h1>Personal details</h1>
				<div className={styles.progress}>
					<div className={styles.progressBar}>
						<div className={styles.progressBarFiller1}></div>
						<div className={styles.progressBarFiller2}></div>
						<div className={styles.progressBarFiller3}></div>
					</div>
					<div className={styles.progressButtons}>
						<div className={styles.imgContainer}  id='personContainer'>
							<div className={styles.iconContainer} id='personImageContainer'>
								<img className={styles.personimage} src={personicon} alt="" />
							</div>
							<div className={styles.lable}>Personal</div>
						</div>
						<div className={styles.imgContainer} id='experianceContainer'>
							<div className={styles.iconContainer} id='experianceImageContainer'>
								<img className={styles.expimage} src={experianceicon} alt="" />
							</div>
								<div className={styles.lable}>Experiance</div>
						</div>
						<div className={styles.imgContainer} id='templateContainer'>
							<div className={styles.iconContainer} id='templateImageContainer'>
								<img className={styles.templateimage} src={templateicon} alt="" />
							</div>
							<div className={styles.lable}>Templates</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}