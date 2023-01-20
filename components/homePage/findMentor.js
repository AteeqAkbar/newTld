import React, { Fragment } from "react";

const FindMentor = () => {
  return (
    <div className="text-center flex flex-col bg-gradient-to-l from-[#F8FBFE] to-[rgba(157,213,200,0.9)] w-full ">
      <div className="mx-auto pt-[32px] xs:pt-[64px]">
        <h1 className="text-[32px] xs:text-[40px] leading-[47px] text-[#1C2D56] font-bold font-['Raleway']">
          Helping the world one Mentor at a time
        </h1>
      </div>
      <div className="mx-auto pt-[24px] xs:pt-[42px]">
        <p className="text-[18px] xs:text-[24px] leading-[28px] text-[#1C2D56] text-center font-normal">
          Sifting through the overwhelming content on the internet will slow you
          down. Break through the
          <br />
          noise and get specific advice directly from the experts
        </p>
      </div>
      <div className="mx-auto py-[32px] xs:py-[45px] ">
        <button className="border-[#1C2D56] rounded-[5px] border-[1.5px] text-[#1C2D56] px-4 text-[20px] hover:bg-[#1C2D56] hover:text-white">
          Lets Find a Mentor
        </button>
      </div>
    </div>
  );
};

export default FindMentor;
