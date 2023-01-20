import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { getSessionByUserSkills } from "../../utils_firebase/sessions";
import Spinner from "../spinner";
import SessionItem from "./upCommingSessionItem";

const UpCommingSection = ({ sessions, title, dis }) => {
  // console.log(sessions, " UpCommingSection");
  if (!sessions) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div className="flex flex-col gap-6 mt-[28px] ">
        <div className="m-auto">
          <p className="text-[32px] text-center font-semibold font-['Raleway'] leading-[38px] text-[#242424]">
            {title}
          </p>
        </div>
        <div className="m-auto">
          <p className="text-[20px] px-2 text-center font-medium leading-[23px] text-[#242424] font-['Raleway']">
            {dis}
          </p>
        </div>
      </div>

      <div className="mx-[16px] xs:mx-[32px] ">
        <div>
          <div className="flex flex-wrap justify-center  gap-[2.22%] my-[24px]  ">
            {sessions.length === 0
              ? "We have no Recommended sessions for you"
              : sessions.map((session) => {
                  return (
                    <Fragment key={Math.random()}>
                      <SessionItem session={session} />
                    </Fragment>
                  );
                })}
          </div>
        </div>
      </div>

      {/* <!-- Footer button --> */}
      {/* <div className="flex my-16">
        <div className="m-auto bg-[#F3F3F4] rounded-[7px]">
          <button className="text-[20px] font-medium text-[#1C2D56] leading-[24px] font-['Raleway'] px-5 py-1 hover:bg-[#1C2D56] hover:text-white">
            <Link href="/calender">Calender</Link>
          </button>
        </div>
      </div> */}
    </Fragment>
  );
};

export default UpCommingSection;
