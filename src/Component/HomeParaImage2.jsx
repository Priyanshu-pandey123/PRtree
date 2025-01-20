import React from 'react'
import styles from "../css/Step.module.css"
import { paraImage1, paraImage2, click } from '../ImageConstant'


const HomeParaImage2 = () => {
    const PRlistData = [
        " Affordable prices & guaranteed quantifiable results",
        " Dedicated customer support by your trusted PR experts",
        " 100% guaranteed coverages with a quicker turnaround time",
        " Get your accomplishments/achievements recognised",
        " Put forth your idea in your own words to set your own reach",
        " Get your story independently verified by trusted media/communication",
        " professionals"


    ]
    return (
        <div className={styles.PRmain1}>
            <div className={styles.PRLeft}>
                <h2 className={styles.PRHead}>Transforming the traditional PR Industry with
                    <span className={styles.PRcolorPara}> a modern digitals</span></h2>
                <ul className={styles.PRul}>
                    {PRlistData.map((item, index) => (
                        <li key={index} className={styles.PRListItem}>
                            <img src={click} alt="click icon" className={styles.icon} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.PRRight}>
                <img src={paraImage2} alt='para image 1 not found' />
            </div>
        </div>
    )
}

export default HomeParaImage2