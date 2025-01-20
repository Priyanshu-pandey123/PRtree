import React from 'react'

import style from "../css/OutCome.module.css";



const ImageConatiner = ({ img }) => {
    return (
        <div className={style.ImageConatinerMain}>
            <img src={img} alt='out network image not found' />
        </div>
    )
}

export default ImageConatiner