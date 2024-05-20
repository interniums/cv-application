/* eslint-disable react/prop-types */
import { eduData, jobData } from "../../data"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import styles from '../../styles/Main1.module.css'
import { useState } from "react"


export default function EduExp(props) {
	const [rerender, setRerender] = useState()

	return (
		<div className={styles.workExp}>
			{eduData.map((element, i) => (
				<div key={eduData[i].id}>
					<hr className={styles.lines} />
						<div className={styles.jobItem}>
							<div className={styles.leftItem}>
								<h4 className={styles.itemh4}>
									{eduData[i].degree}
								</h4>
								<p className={styles.itemp}>
									{eduData[i].start + '-' + eduData[i].end}
								</p>
							</div>
							<div className={styles.rightItem}>
								<div onClick={() => {eduData.splice(i, 1); setRerender(Symbol())}}><DeleteIcon /></div>
								{/* <div onClick={() => {props.setEduData(eduData[i]); props.setShowEdu(true); eduData.splice(i, 1);}}><EditIcon /></div> */}
							</div>
						</div>
						<hr className={styles.lines}/>
				</div>
			))}
		</div>
	)
}