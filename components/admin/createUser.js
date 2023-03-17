// This is the form used to create a new user from admin side using email and password
import React, { Fragment, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { createNewUser } from "../../utils_firebase/users";

const CreateUser = () => {
  const inputFirstName = useRef();
  const inputLastName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredFirstName = inputFirstName.current.value;
    const enteredLastName = inputLastName.current.value;
    const enteredEmail = inputEmail.current.value;
    const enteredPassword = inputPassword.current.value;
    console.log(
      enteredFirstName,
      enteredLastName,
      enteredEmail,
      enteredPassword
    );
    let formData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
    };
    // createNewUser(formData);

    inputFirstName.current.value = "";
    inputLastName.current.value = "";
    inputEmail.current.value = "";
    inputPassword.current.value = "";
  };

  return (
    <Fragment>
      <div className="min-h-[700px] mt-5 bg-slate-50">
        <div className="w-11/12 ml-12 m-5">
          <div className="grid w-[60%] ">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0 mt-5">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Create New User
                </h3>
              </div>
              {/* form */}
              <div className="mt-5 md:grid md:col-span-1 md:mt-0">
                {/* <form onSubmit={submitHandler} className="gro">
                  <div className="flex">
                    x{" "}
                    <div className="relative flex flex-col w-[100%] sm:w-[50%]">
                      <h1 className="font-semibold text-[36px] text-[#357A7B] mx-auto font-[Raleway] leading-[38px]">
                        Signup
                      </h1>

                      <h1 className="leading-[19px] font-medium mx-auto text-[16px] text-[#1C2D56] mt-[16px] mb-[19px]">
                        For All Your Mentoring Needs
                      </h1>

                      <div className="w-[80%] md:w-[63.88%] mx-auto h-[26%] flex flex-col gap-8  ">
                        <div className="flex justify-between ">
                          <div className="w-[46.52%]  ">
                            <div className="relative">
                              <input
                                type="text"
                                className="peer border-[1px] rounded-[8px] w-full placeholder-transparent  h-[48px] border-[black]  focus:outline-none pl-[16px] text-[16px] font-semibold "
                                placeholder="First Name"
                                // ref={inputFirstName}
                              />
                              <label className="pointer-events-none peer-focus:px-1 px-1 absolute left-[16px] -top-3.5 peer-placeholder-shown:top-3 peer-focus:-top-3.5 bg-white">
                                First Name
                              </label>
                            </div>
                          </div>
                          <div className=" w-[46.52%]  ">
                            <div className="relative">
                              <input
                                type="text"
                                className="peer border-[1px] rounded-[8px] w-full placeholder-transparent  h-[48px] border-[black]  focus:outline-none pl-[16px] text-[16px] font-semibold "
                                placeholder="Last Name"
                                // ref={inputLastName}
                              />
                              <label className="pointer-events-none peer-focus:px-1 px-1 absolute left-[16px] -top-3.5 peer-placeholder-shown:top-3 peer-focus:-top-3.5 bg-white">
                                Last Name
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <input
                            type="email"
                            className="peer border-[1px] rounded-[8px] w-full placeholder-transparent  h-[48px] border-[black]  focus:outline-none pl-[16px] text-[16px] font-semibold "
                            placeholder="Enter your Email"
                            // ref={inputGamil}
                            // onChange={handleChange}
                          />

                          <label className="pointer-events-none peer-focus:px-1 px-1 absolute left-[16px] -top-3.5 peer-placeholder-shown:top-3 peer-focus:-top-3.5 bg-white">
                            Enter your Email
                          </label>
                        </div>

                        <div className="flex justify-between">
                          <div className="relative w-[46.52%]">
                            <input
                              type="Password"
                              className="peer border-[1px] rounded-[8px] w-full placeholder-transparent  h-[48px] border-[black]  focus:outline-none pl-[16px] text-[16px] font-semibold "
                              placeholder="Password"
                              // ref={inputPassword}
                              // onChange={passwordHandler}
                            />

                            <label className="pointer-events-none peer-focus:px-1 px-1 absolute left-[16px] -top-3.5 peer-placeholder-shown:top-3 peer-focus:-top-3.5 bg-white">
                              Password
                            </label>
                          </div>

                          <div className="relative w-[46.52%]">
                            <input
                              type="Password"
                              className="peer border-[1px] rounded-[8px] w-full placeholder-transparent  h-[48px] border-[black]  focus:outline-none pl-[16px] text-[16px] font-semibold "
                              placeholder="Confirm Password"
                              // ref={inputConfirmPassword}
                              // onChange={matchHandler}
                            />

                            <label className="pointer-events-none peer-focus:px-1 px-1 absolute left-[16px] -top-3.5 peer-placeholder-shown:top-3 peer-focus:-top-3.5 bg-white">
                              Password
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="mx-auto w-[30%] xs:w-[20%]  sm:w-[25%] md:w-[20%] lg:w-[14.85%] bg-[#1C2D56]  rounded-[4px] py-[5px] flex mt-[64px] sm:mt-[42px]">
                        <button className="bg-[#1C2D56] m-auto text-center text-[white]">
                          Signup
                        </button>
                      </div>
                    </div>
                  </div>
                </form> */}

                <form method="POST" action="/api/addUserByAdmin">
                  <div className="shadow sm:overflow-hidden sm:rounded-md mt-5">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="firstName"
                            className="block text-lg font-medium text-gray-700"
                          >
                            First Name
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="firstName"
                              id="firstName"
                              className="block w-full h-9 pl-[4px] flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please enter the First Name"
                              ref={inputFirstName}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="lastName"
                            className="block text-lg font-medium text-gray-700"
                          >
                            Last Name
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="lastName"
                              id="lastName"
                              className="block w-full h-9 pl-[4px] flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please enter the Last Name"
                              ref={inputLastName}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="email"
                            className="block text-lg font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="block w-full h-9 pl-[4px] flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please enter the Email"
                              ref={inputEmail}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="Password"
                            className="block text-lg font-medium text-gray-700"
                          >
                            Password
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="Password"
                              name="Password"
                              id="Password"
                              className="block w-full h-9 pl-[4px] flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please enter the Password"
                              ref={inputPassword}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md  border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Create User
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateUser;
