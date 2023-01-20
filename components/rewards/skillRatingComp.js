import React from "react";
import SkillRating from "../tiles/skillRating";
import SkillRating2 from "../tiles/skillRating2";

const SkillRatingBlock = () => {
  return (
    <>
      <div>
        <div className="flex justify-between mb-[40px] mt-[64px]">
          <div>
            <h1 className="text-[#1C2D56] text-[24px] font-bold leading-[28px]">
              Skill Ratings
            </h1>
          </div>
          <div>
            <input
              type="search"
              Placeholder="Skill Name"
              className="border-[1px] rounded-[8px]"
            ></input>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4  md:grid-cols-2 gap-4 mb-[64px]">
          <SkillRating />
          <SkillRating2 />
          <SkillRating />
          <SkillRating2 />
          <SkillRating />
          <SkillRating2 />
          <SkillRating />
          <SkillRating2 />
          <SkillRating />
          <SkillRating2 />
          <SkillRating />
          <SkillRating2 />
          <SkillRating />
          <SkillRating2 />
          <SkillRating />
          <SkillRating2 />
        </div>
      </div>
    </>
  );
};

export default SkillRatingBlock;
