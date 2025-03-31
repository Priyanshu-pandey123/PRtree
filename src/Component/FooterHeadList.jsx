import React from "react";
import style from "../css/footer.module.css";
import { Link } from "react-router-dom";

const FooterHeadList = ({ head = "prine", data }) => {
  return (
    <div className={style.footerHeadMain}>
      <h2 className={style.footerHead}>{head}</h2>
      <ul className={style.listContainer}>
        {data.map((text, ind) => (
          <Link to="/signIn" className={style.footerMapList} key={ind}>
            {text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterHeadList;
