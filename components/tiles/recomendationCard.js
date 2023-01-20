import React from "react";
import Image from "next/image";

const RecomendationCard = () => {
  return (
    <>
      <div className="w-full flex justify-between hover:translate-x-6 py-[24px] border-b-[#D7D6D6] border-b-[1px]">
        <div className="w-[52.9%] flex justify-between">
          <div className="w-[23.36%]">
            <Image
              src={"/img/Image (16).png"}
              width={100}
              height={100}
              alt="img"
            />
          </div>
          <div className="w-[69.15%] flex items-center">
            <p className="text-[20px] leading-[23px] text-[#3E3E43] font-semibold">
              Everything You Need To Know About Java
            </p>
          </div>
        </div>
        <div className="w-[5.55%]">
          <Image src="/img/Group.png" width={26} height={26} alt="img" />
        </div>
      </div>
    </>
  );
};

export default RecomendationCard;
