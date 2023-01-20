import React from "react";

const IntrestsTile = ({ data }) => {
  return (
    <>
      <div className="min-w-[14%]  h-[35px] bg-[#1C2D56] rounded-[17.5px] flex justify-center">
        <p className="  font-medium text-white my-[6px] mx-[24px] ">{data}</p>
      </div>
    </>
  );
};

export default IntrestsTile;
