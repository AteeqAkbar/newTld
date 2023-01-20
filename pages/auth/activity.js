import React from "react";
import LearningActivityBlock from "../../components/activity/learningActivityComp";
import CoachingActivityBlock from "../../components/activity/coachingActivityComp";
import MyReviewActivityBlock from "../../components/activity/myReviewsActivityComp";
import LoadMoreButton from "../../components/tiles/loadmoreButton";
import FeedBackActivityBlock from "../../components/activity/feedBackActivityComp";

const Activity = () => {
  return (
    <>
    <LearningActivityBlock/>
    <CoachingActivityBlock/>
    <MyReviewActivityBlock/>
    <LoadMoreButton/>
    <FeedBackActivityBlock/>
    
    </>
  )
};

export default Activity;
