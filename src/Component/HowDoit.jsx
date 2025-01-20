import React from 'react'
import howDoIt from "../assets/howDoIt.png"
import howDoIt1 from "../assets/WeDoItImage.png"
import styles from "../css/home.module.css"
import Step from './Step'
import icon1 from "../assets/ii1.png.webp"
import icon2 from "../assets/ii2.png.webp"
import icon4 from "../assets/ii4.png.webp"
import icon3 from "../assets/ii3.webp"

const HowDoit = () => {
    return (
        <div className={styles.howDoWeDoIt}>
            <div className={styles.contentWrapper}>
                <img
                    className={styles.mainImage}
                    src={howDoIt1}
                    alt="How Do We Do It"
                />
                <h2 className={styles.sectionTitle}>HOW DO WE DO IT?</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <Step img={icon1} step={1} para="Register: Create an account to register yourself" />
                    <Step img={icon2} step={2} para="Choose a package: Select a customized media package to suit you the best" />
                    <Step img={icon3} step={3} para="Upload: Post your story, in your words & get it approved/vetted by our media experts" />
                    <Step img={icon4} step={4} para="Track : Keep on tracking your article’s status and finally watch it go live" />
                </div>

            </div>
        </div>
    )
}

export default HowDoit

