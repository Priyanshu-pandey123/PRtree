import React from "react";
import NavHome from "../Component/NavHome";
import HowDoit from "../Component/HowDoit";
import home from "../css/home.module.css";
import Client from "../Component/Client";
import HomeParaImage from "../Component/HomeParaImage";
import OurApproach from "../Component/OurApproach";
import OutCome from "../Component/OutCome";
import OurNetwork from "../Component/OurNetwork";
import ThenEver from "../Component/ThenEver";
import OurStory from "../Component/OurStory";
import RotateLine from "../Component/RotateLine";
import Accordion from "../Component/Accordion";
import Footer from "../Component/Footer";
import MultiForm from "./MultiForm";

const HeroSection = () => {
  return (
    <div className={home.main}>
      {/* <MultiForm /> */}
      <NavHome />
      <HowDoit />
      <Client />
      <HomeParaImage />
      <OurApproach />
      <OutCome />
      <OurNetwork />
      <ThenEver />
      <OurStory />
      <RotateLine />
      <Accordion />
    </div>
  );
};

export default HeroSection;
