import React from "react";
import CoachingPoints from "../tiles/coachingPoints";
import LearnersPoints from "../tiles/learnersPoints";

const PointsBlock = () => {
  return (
    <>
      <div className="flex justify-around  mt-[64px]">
        <CoachingPoints />
        <LearnersPoints />
      </div>
    </>
  );
};
export default PointsBlock;
