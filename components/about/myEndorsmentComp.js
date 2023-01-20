import React from "react";
import Endorsment from "../tiles/endorsmentTile";

const MyEndorsmentComp = () => {
  return (
    <>
      <div className="mt-[64px] mb-[26px]">
        <p className="text-[24px] leading-[28px] font-bold text-[#1C2D56] font-['Raleway']">
          MyEndorsment
        </p>
      </div>
      <div className="mb-[64px] flex flex-wrap gap-8">
        <Endorsment />
        <Endorsment />
        <Endorsment />
        <Endorsment />
        <Endorsment />
        <Endorsment />
      </div>
    </>
  );
};
export default MyEndorsmentComp;
