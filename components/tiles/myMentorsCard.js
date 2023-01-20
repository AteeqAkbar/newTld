import React from "react";
import Image from "next/image";
import SessionTile from "./sessionTile";
const MyMentorsCard = () => {
  return (
    <>
      <div className="bg-[#F4F4F4] xs:w-[70%] sm:w-[62%] md:w-[48%] lg:w-[31.6%] mb-[20px] px-6 py-4 rounded-xl">
        <div className="border-b-[0.5px] border-black">
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-[#1C2D56] ">Alya S.</p>
              <p className="text-[grey]">Top-rated marketing expert</p>
            </div>
            <div className="min-w-[62px] mx-h-[62px] rounded-[50px]">
              <Image
                src="/img/Image (7).png"
                alt=""
                width={64}
                height={64}
                className="rounded-[50px]"
              />
            </div>
          </div>
          <div className="py-4">
            <SessionTile Mentorship="Mentorship" dollar="$150" month="/month" />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <SessionTile Mentorship="Intro Session" dollar="$100" />
          <SessionTile Mentorship="React Mastery" dollar="$39" />
          <SessionTile Mentorship="Graphic Designing" dollar="$60" />
        </div>
      </div>
    </>
  );
};

export default MyMentorsCard;
