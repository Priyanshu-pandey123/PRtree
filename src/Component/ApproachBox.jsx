import React from 'react'
import styles from "../css/Step.module.css";


const ApproachBox = ({ img, head, para }) => {
    return (
        <div className={styles.ApproachBoxMain}>
            <img className={styles.ourImage} src={img} />
            <h3 className={styles.ApproachBoxHead}>{head}</h3>
            <p className={styles.ApproachBoxPara}>{para}</p>
        </div>
    )
}

export default ApproachBox