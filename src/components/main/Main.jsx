import styles from '../../styles/Main.module.css'
import cameraicon from '../../assets/cameraicon.svg'
import TextField from '@mui/material/TextField'

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
				<div className={styles.nameContainer}>
					<TextField
						label="First name"
						id="outlined-size-medium"
						size="big"
					/>
					<TextField
						label="Last name"
						id="outlined-size-medium"
						size="big"
						fullWidth
					/>
				</div>
			</section>
			<section className={styles.section2}>
				<div className={styles.mailContainer}>
				<TextField
						label="Email adress"
						id="outlined-size-medium"
						size="big"
						fullWidth
					/>
					<TextField
						label="Phone number"
						id="outlined-size-medium"
						size="big"
						fullWidth
					/>
				</div>
				<div className={styles.locationContainer}>
					<TextField
						label="Country"
						id="outlined-size-medium"
						size="big"
						fullWidth
					/>
					<TextField
						label="City"
						id="outlined-size-medium"
						size="big"
						fullWidth
					/>
				</div>
			</section>
		</div>
	)
}