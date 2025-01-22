// import React from "react";
// import style from "../css/homenav.module.css";
// import { Link } from "react-router-dom";
// import prtreeLOGO from "../assets/prtreeLOGO.webp";

// const Navbar = () => {
//   return (
//     <nav className={style.HomeNavBar}>
//       <div>
//         <img src={prtreeLOGO} alt="logo not found" className={style.logo} />
//       </div>
//       <div>
//         <ul className={style.navBar}>
//           <li>Home</li>
//           <li>About</li>
//           <li>Pricing</li>
//           <li>FAQ</li>
//           <li>Subscribe</li>
//         </ul>
//       </div>
//       <div className={style.BtnConatiner}>
//         <button className={style.logBtn}>Log In</button>
//         <button className={style.logBtn}>Sign Up</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import prtreeLOGO from "../assets/prtreeLOGO.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border border-white mx-[50px] md:mx-[30px] sm:mx-[20px] flex items-center justify-between px-6 md:px-12 py-4 rounded-full  sm:mx=[10px] mt-4 absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div>
        <img src={prtreeLOGO} alt="logo not found" className="h-10 w-auto" />
      </div>
      <div className="hidden md:flex gap-12 font-dm-sans font-medium text-sm tracking-wider text-white">
        <ul className="flex gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Subscribe</li>
        </ul>
      </div>
      <div className="hidden md:flex">
        <button className="font-dm-sans font-medium text-sm tracking-wider text-center bg-orange-600 text-white rounded-full px-6 py-2 mr-4">
          Log In
        </button>
        <button className="font-dm-sans font-medium text-sm tracking-wider text-center bg-orange-600 text-white rounded-full px-6 py-2">
          Sign Up
        </button>
      </div>
      <div className="md:hidden">
        <HiOutlineMenuAlt3
          className="text-white h-8 w-8 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-6 md:hidden">
          <ul className="flex flex-col gap-4 font-dm-sans font-medium text-sm tracking-wider text-center">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Subscribe</li>
          </ul>
          <div className="flex flex-col gap-4 mt-6">
            <button className="font-dm-sans font-medium text-sm tracking-wider bg-orange-600 text-white rounded-full px-6 py-2">
              Log In
            </button>
            <button className="font-dm-sans font-medium text-sm tracking-wider bg-orange-600 text-white rounded-full px-6 py-2">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
