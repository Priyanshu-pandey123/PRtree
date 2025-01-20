import React from "react";
import styles from "../css/OutCome.module.css";

const RotateLine = () => {
    return (
        <div className={styles.banners}>
            <div className={`${styles.banner} ${styles.bannerOrange}`}>
                <div className={styles.repeatedText}>
                    {Array(10)
                        .fill("DIGITAL PRESENCE")
                        .map((text, index) => (
                            <div key={index} className={styles.textBox}>
                                {text}
                            </div>
                        ))}
                </div>
            </div>
            <div className={`${styles.banner} ${styles.bannerBlack}`}>
                <div className={styles.repeatedText}>
                    {Array(10)
                        .fill("DIGITAL PRESENCE")
                        .map((text, index) => (
                            <div key={index} className={styles.textBox}>
                                {text}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default RotateLine;
