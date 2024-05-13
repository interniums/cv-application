import styles from '../../styles/Header.module.css'
import githublogo from '../../assets/github-icon.png'

export default function Header() {

	return (
		<div className={styles.container}>
			<div className={styles.credits}>
				<a className={styles.anchor} href="https://github.com/interniums">
					<p className={styles.creditsText}>Interniums</p>
					<img 
						src={githublogo} 
						alt="github-logo" 
						className={styles.logo}
					/>
				</a>
			</div>
		</div>
	)
}