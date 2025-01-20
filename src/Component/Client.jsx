

import React from 'react'
import styles from "../css/Step.module.css"
import { clientImageArray } from '../ImageConstant'

const Client = () => {
    return (
        <div className={styles.clientMain}>
            <p className={styles.clientHead}>Trusted by 1000+ clients</p>
            <div className={styles.imageArray}>
                {
                    clientImageArray.map((img, ind) => <img key={ind} src={img} alt="clinet image not found" />)
                }
            </div>
        </div>
    )
}

export default Client