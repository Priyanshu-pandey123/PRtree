import React from "react";
import style from "../css/footer.module.css";

const FooterHeadList = ({ head = "prine", data }) => {
  return (
    <div className={style.footerHeadMain}>
      <h2 className={style.footerHead}>{head}</h2>
      <ul className={style.listContainer}>
        {data.map((text, ind) => (
          <li className={style.footerMapList} key={ind}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterHeadList;
