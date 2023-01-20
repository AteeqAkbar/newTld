import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";

const InterestSkillsCard = ({ skill, click }) => {
  const [selectSkill, setSelectSkill] = useState(false);
  const [con, setCon] = useState(false);
  useEffect(() => {
    if (click) {
      if (con) {
        // if (selectSkill) {
        click(skill.name, selectSkill);
        // }
      }
    }
  }, [selectSkill]);
  return (
    <div
      onClick={() => {
        setCon(true);
        setSelectSkill((prev) => !prev);
      }}
    >
      <div
        className={
          selectSkill
            ? "min-w-[21.53%] mb-[15px] rounded-[12px] flex items-center shadow-md gap-2 px-2 cursor-pointer scale-105 shadow-2xl bg-[rgba(157,213,200,0.14)]"
            : "min-w-[21.53%] mb-[15px] rounded-[12px] flex items-center shadow-md gap-2 px-2 cursor-pointer"
        }
      >
        <div className="flex w-[42px] h-[42px] m-2 ">
          <Image
            src={skill.image}
            alt="img"
            height={42}
            width={42}
            className="m-auto"
          />
        </div>
        <div className="flex">
          <p className="text-[24px] font-bold text-[#1C2D56] font['Raleway'] leading-[28px]">
            {skill.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterestSkillsCard;
