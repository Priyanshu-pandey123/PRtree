import React from 'react'
import style from "../css/OutCome.module.css";
import { OurStoryImage } from '../ImageConstant';
console.log(OurStoryImage)

const OurStory = () => {
    return (
        <div className={style.OurStoryMain}>
            <h2 className={style.OurStoryHead}>THIS IS WHAT<span className={style.OurStoryColorText}>YOUR STORY</span><br />
                WILL FINALLY, LOOK LIKE</h2>
            <div className={style.OurStoryImageContainer}>
                {
                    OurStoryImage.map((img, ind) => (
                        <div key={ind} className={style.OurStoryImageBorder}>
                            <div className={style.OurStoryImageHead}>
                                <div className={style.OurStoryLeft}>
                                    <span className={style.OurStoryDot}></span>
                                    <span className={style.OurStoryDot}></span>
                                    <span className={style.OurStoryDot}></span>
                                </div>
                                <div className={style.OurStoryRight}>X</div>
                            </div>
                            <img src={img} alt="Our story image not found" />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default OurStory

