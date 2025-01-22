import React from "react";
import styles from "../css/Step.module.css";
import { paraImage1, paraImage2, click } from "../ImageConstant";
import HomeParaImage2 from "./HomeParaImage2";

const HomeParaImage = () => {
  const PRlistData = [
    " Assured inclusion in publications of your choice",
    " Watch your story come alive through an automated digital PR platform",
    " Get a chance to feature in leading media publications",
    " Protect, build, and enhance your reputation through digital intervention",
    " Be your own PR communicator & keep track of your articles",
  ];
  return (
    <div>
      <div className={styles.PRmain}>
        <div className={styles.PRLeft}>
          <h2 className={styles.PRHead}>
            India’s leading digital self-help{" "}
            <span className={styles.PRcolorPara}>PR platform</span>
          </h2>
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
          <img src={paraImage1} alt="para image 1 not found" />
        </div>
      </div>
      <HomeParaImage2 />
    </div>
  );
};

export default HomeParaImage;
