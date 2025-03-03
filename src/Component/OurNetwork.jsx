import React from "react";
import style from "../css/OutCome.module.css";
import ImageConatiner from "./ImageConatiner";
import { ourNetworkImage } from "../ImageConstant";

const OurNetwork = () => {
  return (
    <div
      className="lg:px-[150px] lg:py-11  flex flex-col items-center mt-[10px] mb-[30px]"
      id="ourNetwork"
    >
      <h2 className={style.OurNetworkHead}>OUR NETWORK</h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ">
        {ourNetworkImage.map((img, ind) => (
          <ImageConatiner key={ind} img={img} />
        ))}
      </div>
    </div>
  );
};

export default OurNetwork;
