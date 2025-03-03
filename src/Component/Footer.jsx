import React from "react";
import style from "../css/footer.module.css";
import FooterHeadList from "./FooterHeadList";
import PRtreeLOGO from "../assets/prtreeLOGO.webp";

const Footer = () => {
  const Our = ["Target PR", "Quick & Guaranteed Coverage", "Content Solutions"];
  const Company = ["About Us", "Company", "blog"];
  const Support = ["Login"];
  const Help = ["FAQ", "business@savincommunication.com", "7217827243"];
  return (
    <footer className={style.FooterContainer}>
      <div className={style.footerMain}>
        <div className={style.footerLogoPara}>
          <div className={style.footerImage}>
            <img alt="not found" src={PRtreeLOGO} />
          </div>
          <p className={style.footerList}>
            INDIA'S LEADING DIGITAL PRPLATFORM THE
            <br />
            PRTREE WELCOMES YOU TO THE PERFECT
            <br />
            PRTECH ECOSYSTEM
          </p>
        </div>
        <div className={style.footerListMain}>
          <FooterHeadList head="Our Speciality" data={Our} />
          <FooterHeadList head="Company" data={Company} />
          <FooterHeadList head="Help" data={Help} />
          <FooterHeadList head="Support" data={Support} />
        </div>
      </div>
      <div className={style.footerBottom}></div>
    </footer>
  );
};

export default Footer;
