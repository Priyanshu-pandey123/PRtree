import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import style from "../css/auth.module.css";
import prtreeLOGO from "../assets/prtreeLOGO.webp";
import { MdOutlineMail } from "react-icons/md";
import { CiLock, CiMobile3 } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import Client from "./Client";
import authImage from "../assets/ourNetwork/authImage.webp";
import {
  useLoginMutation,
  useSignupMutation,
  useChangePasswordMutation,
} from "../store/apiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [signup, { isLoading: isSignupLoading }] = useSignupMutation();
  const [forgetPassword, { isLoading: isForgetPasswordLoading }] =
    useChangePasswordMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const handleForgetPassword = () => {
    setIsForgetPassword(true);
  };
  const handleLoginPassword = () => {
    setIsForgetPassword(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: forgetRegister,
    handleSubmit: forgetHandleSubmit,
    formState: { errors: forgetErrors },
  } = useForm();

  const onForgetEmailSubmit = async (data) => {
    console.log("Forget password data:", data);
    try {
      const result = await forgetPassword(data).unwrap();
      toast.success("Reset email sent!", result);
      setIsForgetPassword(true);
    } catch (err) {
      toast.error("Failed to send reset email.", err);
    }
  };

  const onSubmit = async (formData) => {
    if (isSignIn) {
      // SIGN UP mode
      try {
        const result = await signup(formData).unwrap();
        console.log("Sign up successful:", result);
        toast.success("Sign up successful!");
        setIsSignIn(false);
      } catch (err) {
        console.error("Sign up failed:", err);
        toast.error("Sign up failed. Please check your information.");
      }
    } else {
      // LOGIN mode
      try {
        const result = await login(formData).unwrap();
        console.log("Login successful:", result);
        toast.success("Login successful!");
        dispatch(setUser(result?.data));
        setTimeout(() => {
          navigate("/auth");
        }, 1000);
      } catch (err) {
        console.error("Login failed:", err);
        toast.error("Login failed. Please check your credentials.");
      }
    }
  };

  const isSubmitting = isSignIn ? isSignupLoading : isLoginLoading;
  return (
    <div className={style.authMain}>
      <div className={style.authOverlay}>
        {!isForgetPassword ? (
          <>
            <div className={style.authLeft}>
              <img src={prtreeLOGO} alt="logo not found" />
              <h1 className={style.authLogHead}>
                {!isSignIn ? "Log In" : "Sing Up"}
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                {isSignIn && (
                  <>
                    <div className={style.authInputMain}>
                      <CiMobile3 className={style.authIcon} />
                      <input
                        className={style.authInput}
                        placeholder="Enter your Number*"
                        type="text"
                        {...register("number", {
                          required: "Number is required",
                          pattern: {
                            value: /^[0-9]+(\.[0-9]+)?$/,
                            message: "Only valid numbers are allowed",
                          },
                        })}
                      />
                    </div>
                    {errors.email && (
                      <p className={style.errorText}>{errors.number.message}</p>
                    )}
                  </>
                )}

                <div className={style.authInputMain}>
                  <MdOutlineMail className={style.authIcon} />
                  <input
                    className={style.authInput}
                    placeholder="Enter your mail*"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className={style.errorText}>{errors.email.message}</p>
                )}

                <div className={style.authInputMain}>
                  <CiLock className={style.authIcon} />
                  <input
                    className={style.authInput}
                    placeholder="Enter your Password*"
                    type="text"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <p className={style.errorText}>{errors.password.message}</p>
                )}

                <button type="submit" className={style.logBtn}>
                  {!isSignIn ? "Log In" : "Sing Up"}
                </button>
              </form>
              <button className={style.googleLogin}>
                <FaGoogle className={style.GoogleLogo} />
                <span> Log in with Google</span>
              </button>
              <p className={`${style.authPara} cursor-pointer`}>
                <span className={`${style.para1} cursor-pointer`}>
                  {!isSignIn
                    ? " Don’t have an account?"
                    : "Already have an account?"}
                </span>
                <span className={style.para2} onClick={handleIsSignIn}>
                  {!isSignIn ? "  Sign up for free" : "Sign In here"}
                </span>
              </p>
              <p
                onClick={handleForgetPassword}
                className={`${style.authPara} cursor-pointer text-white text-left`}
              >
                forget Pasword ?
              </p>
            </div>
          </>
        ) : (
          <>
            <div className={style.authLeft}>
              <img src={prtreeLOGO} alt="logo not found" />
              <h1 className={style.authLogHead}>Forget Password</h1>
              <form onSubmit={forgetHandleSubmit(onForgetEmailSubmit)}>
                <div className={style.authInputMain}>
                  <MdOutlineMail className={style.authIcon} />
                  <input
                    className={style.authInput}
                    placeholder="Enter your mail*"
                    type="email"
                    {...forgetRegister("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className={style.errorText}>{errors.email.message}</p>
                )}

                <button type="submit" className={style.logBtn}>
                  Send Email
                </button>
              </form>
              <p
                onClick={handleLoginPassword}
                className={`${style.authPara} cursor-pointer text-white text-left`}
              >
                Login{" "}
              </p>
            </div>
            ;
          </>
        )}
        <div className={style.authRight}>
          <img
            className={style.rightImage}
            src={authImage}
            alt="sign Up image not found"
          />
          <ToastContainer />
        </div>
      </div>
      <Client />
    </div>
  );
};

export default Auth;
