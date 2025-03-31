import React, { useState } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import prtreeLOGO from "../assets/prtreeLOGO.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "../store/apiSlice";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/userSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [logout, { isLoading, isSuccess, isError, error, data }] =
    useLogoutMutation();

  const handleLogOut = async () => {
    try {
      await logout();
      dispatch(logoutUser());
      toast.success("logout successfully ");
    } catch (err) {
      toast.error("some error in logout");
    }
  };

  return (
    <div className="bg-black w-full p-4">
      <nav className="border border-white mx-[50px] md:mx-[auto] sm:mx-[20px] flex items-center justify-between  px-6 md:px-12 py-4 rounded-full  sm:mx=[10px] mt-4  top-0 left-0 right-0 z-50 w-[80%] bg-black">
        <div>
          <img src={prtreeLOGO} alt="logo not found" className="h-10 w-auto" />
        </div>
        <div className="hidden md:flex gap-12 font-dm-sans font-medium text-sm tracking-wider text-white">
          <ul className="flex gap-5">
            <Link to={"/"}>Home</Link>
            <a href="#ourNetwork">About</a>
            <a href="#ourApproach">Pricing</a>
            <Link>FAQ</Link>
            <Link>Subscribe</Link>
            <Link to={"/meeting"}>Talk Now</Link>
          </ul>
        </div>
        <div className="hidden md:flex">
          {user.isAuthenticated ? (
            <Link
              onClick={handleLogOut}
              to="/"
              className="font-dm-sans font-medium text-sm tracking-wider text-center bg-orange-600 text-white rounded-full px-6 py-2 mr-4"
            >
              Log Out
            </Link>
          ) : (
            <Link
              to="/signIn"
              className="font-dm-sans font-medium text-sm tracking-wider text-center bg-orange-600 text-white rounded-full px-6 py-2 mr-4"
            >
              Log In
            </Link>
          )}
          {/* <Link
            to="/auth"
            className="font-dm-sans font-medium text-sm tracking-wider text-center bg-orange-600 text-white rounded-full px-6 py-2"
          >
            Sign Up
          </Link> */}
        </div>
        <div className="md:hidden">
          <HiOutlineMenuAlt3
            className="text-white h-8 w-8 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-fit p-20 bg-black text-white flex flex-col items-center py-6 md:hidden z-20">
            <ul className="flex flex-col gap-4 font-dm-sans font-medium text-sm tracking-wider text-center">
              <Link to="/">Home</Link>
              <Link>About</Link>
              <Link>Pricing</Link>
              <Link>FAQ</Link>
              <Link>Subscribe</Link>
              <Link to="/contact">Contact</Link>
              <Link to={"/meeting"}>Talk Now</Link>
            </ul>
            <div className="flex flex-col gap-4 mt-6">
              {user.isAuthenticated ? (
                <Link
                  onClick={handleLogOut}
                  to="/"
                  className="font-dm-sans font-medium text-sm tracking-wider text-center bg-orange-600 text-white rounded-full px-6 py-2 mr-4"
                >
                  Log Out
                </Link>
              ) : (
                <Link
                  to="/signIn"
                  className="font-dm-sans font-medium text-sm tracking-wider text-center bg-orange-600 text-white rounded-full px-6 py-2 mr-4"
                >
                  Log In
                </Link>
              )}
              {/* <Link
                to="/auth"
                className="font-dm-sans font-medium text-sm tracking-wider bg-orange-600 text-white rounded-full px-6 py-2"
              >
                Sign Up
              </Link> */}
            </div>
          </div>
        )}
      </nav>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
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
