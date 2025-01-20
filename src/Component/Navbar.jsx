import React from 'react'
import style from '../css/homenav.module.css';
import { Link } from 'react-router-dom';
import prtreeLOGO from "../assets/prtreeLOGO.webp"

const Navbar = () => {
    return (
        <nav className={style.HomeNavBar}>

            <div>
                <img src={prtreeLOGO} alt='logo not found' className={style.logo} />
            </div>
            <div>
                <ul className={style.navBar}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                    <li>Subscribe</li>

                </ul>
            </div>
            <div className={style.BtnConatiner}>
                <button className={style.logBtn}>Log In</button>
                <button className={style.logBtn}>Sign Up</button>
            </div >
        </nav >
    )
}

export default Navbar