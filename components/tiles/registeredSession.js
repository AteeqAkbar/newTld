import React, { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth_context";
import { getSessionInUserRegister } from "../../utils_firebase/sessions";
import Spinner from "../spinner";
// import RegisteredSessionCard from "./registeredSessionCard";
import LearningCard from "./learningCard";

const RegisteredSession = () => {
  const { user } = useContext(AuthContext);
  const [session, setSession] = useState(null);
  // console.log(user.user.uid, "RegisteredSession");

  useEffect(() => {
    getSessionInUserRegister(user.user.uid).then((data) => setSession(data));
  }, []);

  if (!session) {
    return <Spinner />;
  }
  // console.log(session, "registeredSession11111");
  return (
    <>
      <div className=" flex flex-col gap-6 mx-[5%] xs:mx-[10%] lg:mx-[15%] ">
        <div className="m-auto text-center">
          <p className="text-[32px] font-semibold font-['Raleway'] leading-[38px] text-[#1C2D56]">
            Registered Sessions
          </p>
        </div>
        <div className="m-auto text-center">
          <p className="text-[20px] font-medium leading-[23px] text-[#1C2D56] font-['Raleway']">
            Sessions that you have Registered
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2  mt-10 mx-[5%] xs:mx-[10%] lg:mx-[15%]">
        {session === "You are not register any Sessions"
          ? "You are not register any Sessions"
          : session.map((data) => {
              return (
                <Fragment key={Math.random()}>
                  <LearningCard key={Math.random()} data={data} />
                  {/* <RegisteredSessionCard data={data} /> */}
                </Fragment>
              );
            })}
      </div>
    </>
  );
};
export default RegisteredSession;
