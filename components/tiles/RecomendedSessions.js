import React, { useEffect, useState } from "react";
import { getSessionByUserSkills } from "../../utils_firebase/sessions";
import Spinner from "../spinner";
import RecomendedSessionsCard from "./RecomendedSectionCard";

const RecomendedSessions = ({ Skills }) => {
  const [session, setSession] = useState();

  useEffect(() => {
    // This fn take array of Skills and return session according to that skills.....
    getSessionByUserSkills(Skills).then((data) => setSession(data));
  }, []);

  if (!session) {
    return <Spinner />;
  }

  console.log(session, "Hello from session");
  return (
    <>
      <div className="flex flex-col gap-6 mt-40">
        <div className="m-auto">
          <p className="text-[32px] font-semibold font-['Raleway'] leading-[38px] text-[#242424]">
            Recomended Sessions
          </p>
        </div>
        <div className="m-auto">
          <p className="text-[20px] font-medium leading-[23px] text-[#242424] font-['Raleway']">
            Register sessions and start your journey
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8  m-[64px]">
        {session.length > 0
          ? session.map((data) => (
              <RecomendedSessionsCard key={Math.random() + 10} data={data} />
            ))
          : "For this user have no Recomended sessions"}
      </div>
    </>
  );
};

export default RecomendedSessions;
