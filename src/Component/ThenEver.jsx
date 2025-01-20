import React from 'react';
import style from "../css/OutCome.module.css";
import then from "../assets/ourNetwork/Team.webp";

const ThenEver = () => {
    return (
        <div className={style.ThenEverMain}>
            {/* White background overlay */}
            <div className={style.whiteOverlay}></div>

            {/* Content with image */}
            <div className={style.ThenEveroverlay}>

                <img className={style.midImage} src={then} alt='thenEver image not found' />

                <h2 className={style.ThenEverText}>
                    BUILDING A STRONG<br />
                    <span className={style.ThenEverColorText}> WEB PRESENCE</span> HAS BECOME<br />
                    IMPORTANT MORE <span className={style.ThenEverColorText}>THAN EVER!</span>
                </h2>
                <p className={style.ThenEverPara}>
                    The PR Tree strives to provide solutions for world-renowned brands and leading startups towards long-term value
                    generation and game-changing results through target PR. Our innovative souls steer us every day to convey experiences
                    that educate, thoughts that move, and effect that affects!
                </p>
                <button className={style.ThenEverBtn}>
                    Get Started
                </button>
            </div>

        </div>
    );
};

export default ThenEver;
