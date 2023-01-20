import React from "react";
import Image from "next/image";

const SmIntoCard = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col justify-between">
            <p className="font-extrabold text-[20px] mt-2">ArslanMughal</p>
            <button className="w-[74px] max-h-[26px] border-[1px] text-[#1C2D56] text-[16px] font-medium rounded-xl">
              Follow
            </button>
          </div>
          <div className="flex gap-[10px] w-[70%] flex-wrap ml-[45px] justify-between">
            <div>
              <p className="text-[20px] leading-[23px] text-center text-[#1C2D56]">
                Followers
              </p>
              <p className="text-[20px] leading-[23px] text-center text-[#1C2D56]">
                100
              </p>
            </div>
            <div className="flex flex-wrap justify-center">
              <p className="text-[20px] leading-[23px] text-center text-[#1C2D56]">
                Points
              </p>
              <p className="text-[20px] leading-[23px] text-center text-[#1C2D56]">
                200
              </p>
            </div>
          </div>
        </div>
        <div className="w-[48.07%] flex mx-auto justify-between mb-[10px] mt-[10px]">
          <Image
            src="/img/LinkedIn.png"
            alt="img"
            height={32}
            width={32}
            className="object-cover"
          />
          <Image
            src="/img/Discord.png"
            alt="img"
            height={32}
            width={32}
            className="object-cover"
          />
          <Image
            src="/img/Github.png"
            alt="img"
            height={32}
            width={32}
            className="object-cover"
          />
          <Image
            src="/img/Twitter (1).png"
            alt="img"
            height={32}
            width={32}
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default SmIntoCard;
