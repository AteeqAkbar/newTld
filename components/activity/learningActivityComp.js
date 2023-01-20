import React, { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth_context";
import { getSessionByUserSkills } from "../../utils_firebase/sessions";
import { getSingleUser } from "../../utils_firebase/users";
import Spinner from "../spinner";
import LearningCard from "../tiles/learningCard";

const LearningActivityBlock = () => {
  // Taking the data from backend....
  const { user } = useContext(AuthContext);
  const [session, setSession] = useState();

  useEffect(() => {
    getSingleUser(user.user.uid).then((userData) => {
      console.log(userData.interest, "jjjj");

      getSessionByUserSkills(userData.interest).then((data) => {
        setSession(data);
      });
    });
  }, []);

  if (!session) {
    return <Spinner />;
  }

  console.log(session, "LearningActivityBlock");
  return (
    <>
      <div className="mt-[64px]">
        <div className="mb-[32px]">
          <h1 className="text-[24px] leading-[28px] font-bold font-['Relaway'] text-[#1C2D56]">
            Learning
          </h1>
        </div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          {session.map((session) => {
            return (
              <Fragment key={Math.random() + 10}>
                <LearningCard data={session} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LearningActivityBlock;
