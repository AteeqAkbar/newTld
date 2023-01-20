import Link from "next/link";
import React from "react";
import { useRef, useState } from "react";
import { LoginWithEmailPassword } from "../utils_firebase/users";
import Image from "next/image";

export let switchAuthModeHandler;

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);

  const inputFirstName = useRef();
  const inputLastName = useRef();
  const inputGamil = useRef();
  const inputPassword = useRef();
  const inputConfirmPassword = useRef();

  let formData;

  switchAuthModeHandler = function () {
    setIsLogin((prevState) => !prevState);
    return "toggle";
  };

  function submitHandler(event) {
    event.preventDefault();

    if (isLogin) {
      const enteredGmail = inputGamil.current.value;
      const enteredPassword = inputPassword.current.value;
      formData = {
        gmail: enteredGmail,
        password: enteredPassword,
      };
    }

    LoginWithEmailPassword();
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className=" flex">
          <div className="hidden sm:flex relative w-[50%] h-[764px]">
            <Image
              src="/img/Image (15).png"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col w-[100%] sm:w-[50%]">
            <Link className="ml-[auto] mr-[6.198%]" href="/">
              <Image
                src="/img/X.png"
                alt="img"
                height={48}
                width={48}
                className="object-cover"
              />
            </Link>

            <h1 className="font-semibold text-[36px] text-[#357A7B] mx-auto font-[Raleway] leading-[38px]">
              Login
            </h1>

            <h1 className="leading-[19px] font-medium mx-auto text-[16px] text-[#1C2D56] mt-[16px] mb-[19px]">
              For All Your Mentoring Needs
            </h1>

            <div className="w-[63.88%] mx-auto flex flex-col gap-6 justify-between">
              <input
                type="text"
                placeholder="Enter your Email"
                className="border-[1px] placeholder:pl-[10px] border-[#1C2D56] h-[48px] rounded-[8px] w-full "
                ref={inputGamil}
              />
              <input
                type="text"
                placeholder="Enter your Email"
                className="border-[1px] placeholder:pl-[10px] border-[#1C2D56] h-[48px] rounded-[8px] w-full "
                ref={inputGamil}
              />
            </div>

            <div className="mx-auto mb-4 bg-[#1C2D56]  rounded-[4px] py-[5px] px-[18px] mt-[32px]">
              <button className="bg-[#1C2D56] px-3 text-[white]">Login</button>
            </div>

            <div className="  ">
              <h1 className="leading-[28px]  text-[16px] font-medium text-center">
                <button type="button" onClick={switchAuthModeHandler}>
                  <Link href={"/auth"}> create your account now</Link>
                </button>
              </h1>
            </div>

            <div className="w-[32.22%] gap-[5px] flex justify-between mx-auto mb-[15.57%] mt-[64px]">
              <Image
                src="/img/Frame 77.png"
                alt=""
                height={56}
                width={56}
                className="object-cover"
              />
              <Image
                src="/img/Frame 78.png"
                alt=""
                height={56}
                width={56}
                className="object-cover"
              />
              <Image
                src="/img/Frame 79.png"
                alt=""
                height={56}
                width={56}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Index;
