import React from "react";
import FeedbackCard from "../tiles/feedbackCard";
import LoadMoreButton from "../tiles/loadmoreButton";

const FeedBackActivityBlock = ()=>{
    return(
        <>
           <div className="mt-[64px] ">
            <div className="mb-[24px]">
                <h1 className="text-[24px] text-[#1C2D56] leading-[28px] font-bold">Feedback</h1>
            </div>
            <div className="flex flex-col gap-3 mb-[64px]">
                <FeedbackCard/>
                <FeedbackCard/>
                <LoadMoreButton/>
            </div>
           </div>
        </>
    )
}
export default FeedBackActivityBlock;