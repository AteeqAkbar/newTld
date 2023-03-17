import Link from "next/link";
import React from "react";
import { useRef, useState, useContext } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../contexts/auth_context";
import { updatePassword } from "../utils_firebase/users";
import { useRouter } from "next/router";

const UpdatePassword = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const inputEmail = useRef();
  const inputOldPassword = useRef();
  const inputNewPassword = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = inputEmail.current.value;
    const enteredOldPassword = inputOldPassword.current.value;
    const enteredNewPassword = inputNewPassword.current.value;
    console.log(enteredEmail, enteredOldPassword, enteredNewPassword);
    updatePassword(
      enteredEmail,
      enteredOldPassword,
      enteredNewPassword,
      router
    );
  };

  return (
    <>
      <form onSubmit={submitHandler} className="gro">
        <div className="flex">
          <div className="hidden sm:flex relative w-[50%] h-[764px]">
            <Image
              src="/img/Image (15).png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex flex-col w-[100%] sm:w-[50%]">
            <Link className="ml-[auto] mr-[6.198%]" href="/">
              <Image
                src="/img/X.png"
                alt=""
                width={48}
                height={48}
                className="object-cover"
              />
            </Link>

            <h1 className="font-semibold mt-[50px] text-[36px] text-[#357A7B] mx-auto font-[Raleway] leading-[38px]">
              Update Password
            </h1>

            <div className="w-[80%] md:w-[63.88%] mx-auto mt-[40px] h-[26%] flex flex-col gap-8  ">
              <div className="relative">
                <input
                  type="email"
                  className="peer border-[1px] rounded-[8px] w-full placeholder-transparent  h-[48px] border-[black]  focus:outline-none pl-[16px] text-[16px] font-semibold "
                  placeholder="Enter your Email"
                  ref={inputEmail}
                  // onChange={handleChange}
                />

                <label className="pointer-events-none peer-focus:px-1 px-1 absolute left-[16px] -top-3.5 peer-placeholder-shown:top-3 peer-focus:-top-3.5 bg-white">
                  Enter your Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  className="peer border-[1px] rounded-[8px] w-full placeholder-transparent  h-[48px] border-[black]  focus:outline-none pl-[16px] text-[16px] font-semibold "
                  placeholder="Enter Old Password"
                  ref={inputOldPassword}
                  // onChange={handleChange}
                />

                <label className="pointer-events-none peer-focus:px-1 px-1 absolute left-[16px] -top-3.5 peer-placeholder-shown:top-3 peer-focus:-top-3.5 bg-white">
                  Enter Old Password
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  className="peer border-[1px] rounded-[8px] w-full placeholder-transparent  h-[48px] border-[black]  focus:outline-none pl-[16px] text-[16px] font-semibold "
                  placeholder="Enter New Password"
                  ref={inputNewPassword}
                  // onChange={handleChange}
                />

                <label className="pointer-events-none peer-focus:px-1 px-1 absolute left-[16px] -top-3.5 peer-placeholder-shown:top-3 peer-focus:-top-3.5 bg-white">
                  Enter New Password
                </label>
              </div>
              <div className="mx-auto w-[30%] xs:w-[20%]  sm:w-[25%] md:w-[20%] lg:w-[20.85%] bg-[#1C2D56]  rounded-[4px] py-[5px] flex mt-[10px] ">
                <button className="bg-[#1C2D56] m-auto text-center text-[white]">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default UpdatePassword;
