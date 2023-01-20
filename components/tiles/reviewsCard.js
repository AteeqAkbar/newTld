import React from "react";
import Image from "next/image";

const ReviewsCard = () => {
  return (
    <>
      <div className="w-[100%] h-auto bg-[#F4F4F4] flex flex-col rounded-[12px]">
        <div className="flex justify-between mx-4 mt-4">
          <div className="min-w-[50.2%] flex gap-2 items-center">
            <div className="w-[15.61%]">
              <Image
                src={"/img/Image (22).png"}
                width={22.156}
                height={22.156}
                alt="img"
              />
            </div>

            <p className=" w-[79.73%] overflow-hidden text-[14px] flex leading-[16px] font-bold  text-[#1C2D56]">
              Everything Design
            </p>
          </div>
          <div className="w-[31.27%] flex gap-[9.33px] h-[70.3%]">
            <Image
              src={"/img/Star 1 (Stroke).png"}
              width={13.625}
              height={22.484}
              alt="img"
            />
            <Image
              src={"/img/Star 1 (Stroke).png"}
              width={13.625}
              height={22.484}
              alt="img"
            />
            <Image
              src={"/img/Star 1 (Stroke).png"}
              width={13.625}
              height={22.484}
              alt="img"
            />
            <Image
              src={"/img/Star 1 (Stroke).png"}
              width={13.625}
              height={22.484}
              alt="img"
            />
            <Image
              src={"/img/Star 1 (Stroke).png"}
              width={13.625}
              height={22.484}
              alt="img"
            />
          </div>
        </div>
        <div className="text-[112.5%] leading[23px] font-medium text-[#000000] w-[84.13%] h-auto mt-[24px]   mr-[40px] ml-[26px]">
          “I learnt so much about design in this session, I totally reccomend
          this to everyone.”
        </div>

        <div className="flex justify-between mx-[26px] mt-[24px] mb-4 ">
          <div className="text-[100%] leading-[19px] font-semibold ">-Me</div>
          <div className="text-[100%] leading-[19px] font-medium text-[#8B8B8B]">
            5th Nov 2022
          </div>
        </div>
      </div>
    </>
  );
};
export default ReviewsCard;
