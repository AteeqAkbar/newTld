import React from "react";
import IntrestsTile from "../../components/tiles/intrestsTile";
import LearningCard from "../../components/tiles/learningCard";
import CoachingCard from "../../components/tiles/coachingCard";
import AboutBlock from "../../components/about/aboutComp";
import InterestsBlock from "../../components/about/interestComp";
import LearningBlock from "../../components/about/learningComp";
import CoachingBlock from "../../components/about/coachingComp";
import BadgesBlock from "../../components/about/badgesComp";
import MyRecomendationBlock from "../../components/about/myRecomendationComp";
import MyEndorsmentComp from "../../components/about/myEndorsmentComp";

const About = ({ data }) => {
  return (
    <>
      <AboutBlock data={data?.about}></AboutBlock>
      <InterestsBlock data={data?.interest}></InterestsBlock>
      <LearningBlock data={data?.learning}></LearningBlock>
      <CoachingBlock data={data?.learning}></CoachingBlock>
      <BadgesBlock></BadgesBlock>
      <MyRecomendationBlock></MyRecomendationBlock>
      <MyEndorsmentComp />
    </>
  );
};

export default About;
