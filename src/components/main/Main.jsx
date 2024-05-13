import styles from '../../styles/Main.module.css'
import cameraicon from '../../assets/cameraicon.svg'

export default function Main() {

	return (
		<div className={styles.container}>	
			<header className={styles.header}>
				<h3 className={styles.headerText}>Personal details</h3>
				<hr className={styles.hr} />
			</header>
			<section className={styles.section1}>
				<div className={styles.photoContainer}>
					<img className={styles.cameraicon} src={cameraicon} alt="" />
					<p className={styles.phototext}>Add photo (optional)</p>
				</div>
			</section>
		</div>
	)
}