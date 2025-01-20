import React from 'react'
import ApproachBox from './ApproachBox'
import styles from "../css/Step.module.css";
import { our1, our2, our3, our4 } from '../ImageConstant';
const OurApproach = () => {
    return (
        <div className={styles.OurApproachMain}>
            <h2 className={styles.OurApproachHead}>OUR APPROACH</h2>
            <div className={styles.OurApproachConatiners}>
                <ApproachBox img={our1} head="Result Oriented" para="Our result-oriented approach drives your business" />
                <ApproachBox img={our2} head="Think Tank" para="Our PR experts will be with you every step of the way till your story is delivered" />
                <ApproachBox img={our3} head="Story Tellers" para="Our Content experts will ensure that your story is told just right" />
                <ApproachBox img={our4} head="Success Builder" para="Our target-specific attitude gets you results on the mark" />


            </div>

        </div>
    )
}

export default OurApproach