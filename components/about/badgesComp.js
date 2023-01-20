import React from "react";
import BadgesCircle from "../tiles/badgesCircle";

const BadgesBlock = () => {
  return (
    <>
      <div className="mt-[64px]">
        <div>
          <h1 className="text-[24px] leading-[28px] font-bold font-['Relaway'] text-[#1C2D56] mb-4">
            Interests
          </h1>
        </div>
        <div className="grid xl:grid-cols-7  lg:grid-cols-5 md:grid-cols-3 mr-[45px] gap-[32px]">
          <BadgesCircle />
          <BadgesCircle />
          <BadgesCircle />
          <BadgesCircle />
          <BadgesCircle />
          <BadgesCircle />
          <BadgesCircle />
        </div>
      </div>
    </>
  );
};
export default BadgesBlock;
