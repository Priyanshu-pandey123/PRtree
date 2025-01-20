import React from 'react'

import home from "../css/home.module.css";
import headImage from "../assets/headImage.png"


const NavHome = () => {
    return (
        <>

            <div className={`${home.backImage}`}>

                <div className={`${home.content}`}>
                    <div className={home.left}>
                        <div>
                            <div className="">
                                <p className={home.leftHead}>The PR Tree: Evolving the art of storytelling through digital PR</p>
                            </div>
                            <div className={home.orangeText}>
                                INDIA'S LEADING DIGITAL PR PLATFORM
                                <div className={home.normalText}>
                                    THE PRTREE WELCOMES YOU TO <br />
                                    PERFECT PR TECH ECOSYSTEM
                                </div>
                            </div>
                        </div>
                        <p className={home.leftPara}>
                            The PR Tree is an innovative digital PR marketplace redefining modern public relations.
                            Join us in transforming the future of PR,
                            making it accessible and impactful.
                        </p>
                        <button to="/" className={home.btn}>
                            Get Started
                        </button >
                    </div>
                    <div className={home.right}>
                        <img src={headImage} alt='head Image Not found' />
                    </div>



                </div>
            </div >
        </>
    )
}

export default NavHome