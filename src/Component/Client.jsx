import React from "react";
import styles from "../css/Step.module.css";
import { clientImageArray } from "../ImageConstant";

const Client = () => {
  return (
    <div className={styles.clientMain}>
      <p className={styles.clientHead}>Trusted by 1000+ clients</p>
      <div className={`${styles.imageArray} overflow-hidden relative w-full`}>
        <div className="flex animate-marquee space-x-5">
          {clientImageArray.map((img, ind) => (
            <img
              key={ind}
              src={img}
              alt="client image not found"
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover flex-shrink-0"
            />
          ))}
          {/* Repeat the images for seamless looping */}
          {clientImageArray.map((img, ind) => (
            <img
              key={`clone-${ind}`}
              src={img}
              alt="client image not found"
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
