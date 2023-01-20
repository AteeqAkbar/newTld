import React from "react";
import RecomendationCard from "../tiles/recomendationCard";

const MyRecomendationBlock = ()=>{
    return(
        <>
            <div className="mt-[48px]">
            <div>
            <h1 className="text-[24px] leading-[28px] font-bold font-['Relaway'] text-[#1C2D56] mb-4">My Recomendations</h1>
            </div>
            <div className="flex flex-col gap-4">
                <RecomendationCard/>
                <RecomendationCard/>
                <RecomendationCard/>
                <RecomendationCard/>
            </div>

            </div>
        </>
    )
}
export default MyRecomendationBlock;