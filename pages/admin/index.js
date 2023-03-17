import React, { use, useEffect, useState } from "react";
import Aside from "../../components/admin/aside";
import Header from "../../components/admin/header";
import Table from "../../components/admin/table";
import Spinner from "../../components/spinner";
import { getUsers } from "../../utils_firebase/users";
import { getAllSessions } from "../../utils_firebase/sessions";
import { getAllPastSessionsWOLink } from "../../utils_firebase/sessions";
import { getAllSkillsWithImage } from "../../utils_firebase/skills";
import SessionTable from "../../components/admin/sessionTable";
import AddSkill from "../../components/admin/addSkill";
import AllSkills from "../../components/admin/allSkills";
import PastSessionForm from "../../components/admin/pastSessionForm";
import CreateSession from "../../components/admin/createSession";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth_context";
import { useRouter } from "next/router";
import CreateUser from "../../components/admin/createUser";

function Index() {
  const [userData, setUserData] = useState([]);
  const [sessionData, setSessionData] = useState([]);
  const [sessionRequest, setSessionRequest] = useState([]);
  const [pastSession, setPastSession] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [select, setSelect] = useState("user");
  const { user } = useContext(AuthContext);
  const router = useRouter();

  if (user.user.role != "superAdmin" && user.user.role != "admin") {
    router.push("/");
  }
  console.log(user.user.role);

  useEffect(() => {
    if (select == "user") {
      getUsers().then((data) => {
        console.log(data, "admin");
        setUserData(data);
      });
    } else if (select == "session") {
      getAllSessions(true).then((sdata) => {
        setSessionData(sdata);
      });
    } else if (select == "requestSession") {
      getAllSessions(false).then((sdata) => {
        setSessionRequest(sdata);
      });
    } else if (select == "pastSession") {
      getAllPastSessionsWOLink().then((pdata) => {
        setPastSession(pdata);
      });
    } else if (select == "allSkills") {
      getAllSkillsWithImage().then((skill) => {
        setSkillData(skill);
        console.log(skill);
      });
    }
  }, [select]);
  const selectHandler = (str) => {
    setSelect(str);
  };

  return (
    <div className="min-h-[50vh]">
      {user.user &&
        (user.user.role == "superAdmin" || user.user.role == "admin") && (
          <div className="relative bg-blue-50 overflow-hidden max-h-full">
            <Header />
            <Aside selectHandler={selectHandler} />

            <main className="ml-60 pt-16 ">
              <div className="px-6 bg-white py-8">
                {select == "user" &&
                  (userData.length > 0 ? (
                    <Table users={userData} />
                  ) : (
                    <Spinner />
                  ))}
                {select == "session" &&
                  (sessionData.length > 0 ? (
                    <SessionTable sessions={sessionData} select={"Sessions"} />
                  ) : (
                    <Spinner />
                  ))}
                {select == "requestSession" &&
                  (sessionRequest.length > 0 ? (
                    <SessionTable
                      sessions={sessionRequest}
                      select={"Requested Sessions"}
                    />
                  ) : (
                    <Spinner />
                  ))}
                {select == "pastSession" &&
                  (pastSession.length > 0 ? (
                    <SessionTable
                      sessions={pastSession}
                      select={"Past Sessions"}
                    />
                  ) : (
                    <Spinner />
                  ))}
                {select == "skill" && <AddSkill />}
                {select == "addUser" && <CreateUser />}
                {select == "allSkills" &&
                  (skillData.length > 0 ? (
                    <AllSkills skills={skillData} />
                  ) : (
                    <Spinner />
                  ))}
                {/* {select == "pastSessionForm" && <PastSessionForm />} */}
                {select == "pastSessionForm" &&
                  (userData.length > 0 ? (
                    <PastSessionForm users={userData} />
                  ) : (
                    <Spinner />
                  ))}
                {select == "createSessionForm" && (
                  <CreateSession users={userData} />
                )}
              </div>
            </main>
          </div>
        )}
    </div>
  );
}

export default Index;
