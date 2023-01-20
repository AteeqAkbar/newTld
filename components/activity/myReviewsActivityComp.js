import React from "react";

import ReviewsCard from "../tiles/reviewsCard";

const MyReviewActivityBlock = () => {
  return (
    <>
      <div className="mt-[76px]">
        <div className="mb-[24px]">
          <h1 className="text-[24px] text-[#1C2D56] leading-[28px] font-bold">
            My Reviews
          </h1>
        </div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[32px]">
          <ReviewsCard />
          <ReviewsCard />
        </div>
      </div>
    </>
  );
};
export default MyReviewActivityBlock;
