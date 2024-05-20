/* eslint-disable react/prop-types */
import { jobData } from "../../data"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import styles from '../../styles/Main1.module.css'
import { useState } from "react"


export default function WorkExp(props) {
	const [rerender, setRerender] = useState()

	return (
		<div className={styles.workExp}>
			{jobData.map((element, i) => (
				<div key={jobData[i].id}>
					<hr className={styles.lines} />
						<div className={styles.jobItem}>
							<div className={styles.leftItem}>
								<h4 className={styles.itemh4}>
									{jobData[i].jobTitle}
								</h4>
								<p className={styles.itemp}>
									{jobData[i].start + '-' + jobData[i].end}
								</p>
							</div>
							<div className={styles.rightItem}>
								<div onClick={() => {jobData.splice(i, 1); setRerender(Symbol())}}><DeleteIcon /></div>
								{/* <div onClick={() => {props.setData(jobData[i]); props.setShow(true); jobData.splice(i, 1)}}><EditIcon /></div> */}
							</div>
						</div>
						<hr className={styles.lines}/>
				</div>
			))}
		</div>
	)
}