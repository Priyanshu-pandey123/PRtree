import React from "react";
import style from "../css/OutCome.module.css";

const NumberText = ({ number = "3000+", text = "ARTICLES PUBLISHED" }) => {
  return (
    <div className={style.NumberText}>
      <p className={style.NumberTextBorder}></p>
      <span className={style.NumberTextNumber}>{number}</span>
      <p className={style.NumberTextText}>{text}</p>
    </div>
  );
};

export default NumberText;
