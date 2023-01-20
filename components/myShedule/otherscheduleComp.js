import React from "react";
import LearningCard from "../tiles/learningCard";

const OtherScheduleBlock = ()=>{
    return(
        <>
            <div className="border-b-[1px] border-b-[#DADADA] mb-[32px]">
            <div className="mb-[36px]">
                <h1 className="text-[24px] leading-[28px] font-semibold">Friday 25<sup>st</sup></h1>
            </div>
            <div className="grid grid-cols-2 gap-[36px] mb-[64px] ">
                <LearningCard/>
                
            </div>
        </div>
        </>
    )
}
export default OtherScheduleBlock;