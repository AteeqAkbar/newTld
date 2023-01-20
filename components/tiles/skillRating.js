import React from "react";
import Image from "next/image";

const SkillRating = () => {
  return (
    <>
      <div className="w-[100%] h-auto flex flex-col items-center border-[1px] border-[#D6D6D6] rounded-[8px]">
        <div className="w-[52.7%]  my-[16px] bordr">
          <Image
            src="/img/Frame 123.png"
            width={99.266}
            height={75.438}
            className="object-cover"
            alt="img"
          />
        </div>

        <div className="flex  w-[63.2%] gap-[9.33px] mb-[24px] items-end">
          <Image
            src="/img/Star 1 (Stroke).png"
            className="object-cover"
            width={16}
            height={16}
            alt="img"
          />
          <Image
            src="/img/Star 1 (Stroke).png"
            className="object-cover"
            width={16}
            height={16}
            alt="img"
          />
          <Image
            src="/img/Star 1 (Stroke).png"
            className="object-cover"
            width={16}
            height={16}
            alt="img"
          />
          <Image
            src="/img/Star 1 (Stroke) (1).png"
            className="object-cover"
            width={16}
            height={16}
            alt="img"
          />
          <Image
            src="/img/Star 1 (Stroke) (1).png"
            className="object-cover"
            width={16}
            height={16}
            alt="img"
          />
          {/* <img src="/img/Star 1 (Stroke).png" className="object-cover" />
          <img src="/img/Star 1 (Stroke).png" className="object-cover" />
          <img src="/img/Star 1 (Stroke).png" className="object-cover" />
          <img src="/img/Star 1 (Stroke) (1).png" className="object-cover" />
          <img src="/img/Star 1 (Stroke) (1).png" className="object-cover" /> */}
        </div>
      </div>
    </>
  );
};
export default SkillRating;
