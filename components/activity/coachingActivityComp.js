import React, { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth_context";
import { getSessionByUserSkills } from "../../utils_firebase/sessions";
import { getSingleUser } from "../../utils_firebase/users";
import Spinner from "../spinner";
import CoachingCard from "../tiles/coachingCard";

const CoachingActivityBlock = () => {
  const { user } = useContext(AuthContext);
  const [session, setSession] = useState();

  useEffect(() => {
    getSingleUser(user.user.uid).then((userData) => {
      console.log(userData.interest, "jjjj");

      getSessionByUserSkills(userData.interest).then((data) => {
        setSession(data);
      });
    });
  }, [null]);

  if (!session) {
    return <Spinner />;
  }
  return (
    <>
      <div className="mt-[80px]">
        <div className="mb-[38px]">
          <h1 className="text-[#1C2D56] text-[24px] font-bold leading-[28px]">
            Coaching
          </h1>
        </div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          {session.map((session) => {
            return (
              <Fragment key={Math.random() + 10}>
                <CoachingCard data={session} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoachingActivityBlock;
