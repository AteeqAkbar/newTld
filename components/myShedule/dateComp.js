import React from "react";
import Image from "next/image";

const DateBlock = () => {
  return (
    <>
      <div className="w-full border-b-[1px] border-b-[#DADADA] my-[64px]  flex justify-between ">
        <div className="my-4">
          <Image
            src="/img/PathAr.png"
            alt="img"
            height={18}
            width={18}
            className="object-cover"
          />
        </div>
        <div className="my-4">
          <h1 className="text-[24px] leading-[28px] font-semibold">
            20-26 November
          </h1>
        </div>
        <div className="my-4">
          <Image
            src="/img/PathAr2.png"
            alt="img"
            height={18}
            width={18}
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default DateBlock;
