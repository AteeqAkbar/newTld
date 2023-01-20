import React from "react";

const CoachingTile = ({ data }) => {
  return (
    <>
      <div className="min-w-[9%] h-[35px] rounded-[12px] border-[#1C2D56] border-[1px] flex justify-center">
        <p className="text-[#1C2D56] text-[16px] leading-[19px] font-medium my-[7.5px] mx-[24px]">
          {data}
        </p>
      </div>
    </>
  );
};
export default CoachingTile;
