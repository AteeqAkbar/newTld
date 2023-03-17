import Link from "next/link";
import React from "react";
import { useRef, useState, useContext } from "react";
import { useSinin } from "../hooks/useSignin";
import Image from "next/image";
import { loginWithGoogle } from "../utils_firebase/users";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/auth_context";
import { ToastContainer, toast } from "react-toastify";

export let switchAuthModeHandler;

const Index = () => {
  const [isLogin, setIsLogin] = useState(false);

  // Validation
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState(null);
  // end Validation

  const { setUser } = useContext(AuthContext);
  const router = useRouter();
  const inputGamil = useRef();
  const inputPassword = useRef();
  const { signin, errors } = useSinin();

  let formData;

  // Email Validation Functions
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError(null);
    }
    setEmail(event.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (password.length < 5) {
      setPassError("Password must be greater than 6");
    } else {
      setPassError(null);
    }
  };
  // -----------------------------------

  switchAuthModeHandler = function () {
    setIsLogin((prevState) => !prevState);
    return "toggle";
  };

  function submitHandler(event) {
    event.preventDefault();

    const enteredGmail = inputGamil.current.value;
    const enteredPassword = inputPassword.current.value;

    if (enteredGmail === "" || enteredPassword === "") {
      toast.error("Please Fill the form Carefully");
      return;
    } else {
      formData = {
        gmail: enteredGmail,
        password: enteredPassword,
      };

      console.log(formData);
      signin(formData, router);
    }

    // LoginWithEmailPassword(formData, router);
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
              <div>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="border-[1px] pl-[10px] border-[#1C2D56] h-[48px] rounded-[8px] w-full "
                  ref={inputGamil}
                  onChange={handleChange}
                />
                {emailError && (
                  <h2 className="absolute text-[red]">{emailError}</h2>
                )}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="border-[1px]  pl-[10px] border-[#1C2D56] h-[48px] rounded-[8px] w-full "
                  ref={inputPassword}
                  onChange={passwordHandler}
                />
                {passError && (
                  <h2 className="absolute text-[red]">{passError}</h2>
                )}
              </div>
            </div>

            {emailError == null && passError == null ? (
              <div className="mx-auto mb-4 bg-[#1C2D56]  rounded-[4px] py-[5px] px-[18px] mt-[32px]">
                <button className="bg-[#1C2D56] px-3 text-[white]">
                  Login
                </button>
              </div>
            ) : (
              <div className="mx-auto mb-4  bg-gray-500  rounded-[4px] py-[5px] px-[18px] mt-[32px]">
                <button className=" px-3 text-[white] " disabled>
                  Login
                </button>
              </div>
            )}

            <div className="  ">
              <h1 className="leading-[28px]  text-[16px] font-medium text-center">
                <button type="button" onClick={switchAuthModeHandler}>
                  <Link href={"/auth"}> create your account now</Link>
                </button>
              </h1>
            </div>

            <div className="w-[32.22%] gap-[5px] flex justify-between mx-auto mb-[15.57%] mt-[64px]">
              <div
                onClick={() => loginWithGoogle(router, setUser, toast)}
                className="relative h-[52px] w-[52px]"
              >
                <Image
                  src="/img/Frame 77.png"
                  alt=""
                  height={56}
                  width={56}
                  className="object-cover"
                />
              </div>
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
