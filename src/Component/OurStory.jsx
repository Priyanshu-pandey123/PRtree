import React from "react";
import style from "../css/OutCome.module.css";
import { OurStoryImage } from "../ImageConstant";

const OurStory = () => {
  return (
    <div className={style.OurStoryMain}>
      <h2 className={style.OurStoryHead}>
        THIS IS WHAT<span className={style.OurStoryColorText}>YOUR STORY</span>
        <br />
        WILL FINALLY, LOOK LIKE
      </h2>
      <div
        className={`${style.OurStoryImageContainer} grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}
      >
        {OurStoryImage.map((img, ind) => (
          <div key={ind} className={style.OurStoryImageBorder}>
            <div className={style.OurStoryImageHead}>
              <div className={style.OurStoryLeft}>
                <span className={style.OurStoryDot}></span>
                <span className={style.OurStoryDot}></span>
                <span className={style.OurStoryDot}></span>
              </div>
              <div className={style.OurStoryRight}>X</div>
            </div>
            <img
              src={img}
              className={style.OurStoryImg}
              alt="Our story image not found"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStory;
