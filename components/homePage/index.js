import React, { Fragment, useEffect, useState } from "react";
import Header from "./header";
import FeatureMentor from "./featureMentor";
import FindMentor from "./findMentor";
import SkillCard from "./skillCard";
import UpCommingSection from "./upCommingSection";
import {
  getAllSessions,
  getSessionByUserSkills,
} from "../../utils_firebase/sessions";
import Link from "next/link";
import Videos from "./videos";
import {
  getAllSkillsWithImage,
  getAllIndemandSkillsWithImage,
} from "../../utils_firebase/skills";
import VideoCard from "./videoCard";

const HomePage = () => {
  const [sessions, setSessions] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  useEffect(() => {
    async function name() {
      // const skill = await getAllSkillsWithImage();
      const skill = await getAllIndemandSkillsWithImage();
      const seasion = await getAllSessions(true);
      setSkills(skill);
      setSessions(seasion);
    }
    name();
  }, []);
  console.log(sessions, "sesasas");
  const onClickSkills = (ele, exist) => {
    let arr = [...selectedSkill];
    // if (arr.find((data) => data == ele) == ele) {
    // }

    if (exist) {
      setSelectedSkill((prev) => {
        arr.push(ele);
        return [ele, ...prev];
      });
      getSessionByUserSkills(arr).then((data) => {
        setSessions(data);
      });
    } else {
      arr = arr.filter((data) => ele != data);
      setSelectedSkill(arr);
      getSessionByUserSkills(arr).then((data) => {
        setSessions(data);
      });
    }
    console.log(ele, selectedSkill, exist, arr);
  };

  return (
    <Fragment>
      <Header />
      <FeatureMentor />
      <FindMentor />
      <VideoCard />
      <SkillCard onClickSkills={onClickSkills} skills={skills} />
      {sessions == undefined || sessions.length == 0 ? (
        <h2 className="flex justify-center text-[50px]">
          No Upcoming Sessions On this Skill
        </h2>
      ) : (
        <div>
          <UpCommingSection
            sessions={sessions}
            title="Upcomming Session"
            dis=" Sign Up to one of our sessions and start your journey"
          />
        </div>
      )}
    </Fragment>
  );
};

export default HomePage;
