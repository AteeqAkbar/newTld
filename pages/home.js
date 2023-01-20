import React, { useContext, useEffect, useState } from "react";

import MyMentor from "../components/tiles/myMentor";
import RegisteredSession from "../components/tiles/registeredSession";
import { AuthContext } from "../contexts/auth_context";
import UpCommingSection from "../components/homePage/upCommingSection";
import { getSessionByUserSkills } from "../utils_firebase/sessions";
import InterestSkills from "../components/tiles/interestSkills";
import {
  getAllSkillsWithImage,
  getSkillsByUserIntrest,
} from "../utils_firebase/skills";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [RecommendedSession, setRecommendedSession] = useState();
  const [skill, setskill] = useState([]);
  const [allSkill, setAllSkill] = useState([]);
  console.log(user, "userHome");

  const generalSkills = ["Node JS", "MongoDB"];
  console.log(user.user, "userHome...");

  useEffect(() => {
    if (user.user) {
      getAllSkillsWithImage().then((data) => setAllSkill(data));
      getSkillsByUserIntrest(
        user.user.interest.length === 0 ? generalSkills : user.user.interest
      ).then((data) => {
        setskill(data);
      });
      getSessionByUserSkills(
        user.user.interest.length === 0 ? generalSkills : user.user.interest
      ).then((data) => {
        setRecommendedSession(data);
      });
    }
  }, []);

  if (!user.user) {
    return (
      <div className=" text-center  items-center  text-5xl pb-20 pt-20">
        <p>First Login Please</p>
        <p>Loading.... </p>
      </div>
    );
  }

  console.log(RecommendedSession, "RecommendedSession....");
  return (
    <>
      {/* <Header /> */}
      <RegisteredSession />
      <MyMentor />
      {/* <FeatureMentor /> */}
      {skill.length > 0 ? (
        <InterestSkills
          title={"Interested Skills"}
          dis={"Skills in which you are interested"}
          skills={skill}
        />
      ) : (
        ""
      )}
      {skill.length > 0 ? (
        <InterestSkills
          title={"Recomended Skills"}
          dis={"Skills Recomended for you"}
          skills={allSkill}
        />
      ) : (
        ""
      )}

      <UpCommingSection
        sessions={RecommendedSession}
        title="Recommended Sessions"
        dis="Sign Up to one of our sessions and start your journey"
      />
    </>
  );
};
export default Home;
