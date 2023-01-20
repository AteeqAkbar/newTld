import React, { Fragment, useContext, useEffect } from "react";
import IntrestsTile from "../../components/tiles/intrestsTile";
import { getSessionById, registorSession } from "../../utils_firebase/sessions";
import { useRouter } from "next/router";
import { useState } from "react";
import Students from "../../components/sessionDetail/students";
import Spinner from "../../components/spinner";
import { AuthContext } from "../../contexts/auth_context";
import { followUser } from "../../utils_firebase/users";
import Image from "next/image";
import Link from "next/link";
import Followbtn from "../../components/tiles/followbtn";
import { toast } from "react-toastify";

const SessionDetail = () => {
  const { user } = useContext(AuthContext);
  const [isLoaded, setIsLoaded] = useState([]);
  const router = useRouter();
  const id = router.query.sessionDetail;

  useEffect(() => {
    getSessionById(id).then((user) => {
      setIsLoaded(user);
    });
    // declare the async data fetching function
  }, [id]);

  const onFollowHenddler = (id, name) => {
    console.log(id, "foll", user.user.uid);

    followUser(id, user.user.uid);
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    toast.promise(resolveAfter3Sec, {
      pending: "please wait ",
      success: "You Follow " + name,
      error: "Error 🤯",
    });
  };
  if (isLoaded.length === 0) {
    return <Spinner />;
  }
  console.log(isLoaded.instructor.uid, "id in dinamic");
  // const [A, B] =
  // console.log(A, B, "data");
  // console.log(isLoaded, "loaded.....", id);

  return (
    <>
      <div className="flex">
        <div className="w-[40%] h-[110vh] ">
          <div className="border-[2px] m-[40px] rounded-[20px]">
            <div className="relative h-[80vh] w-[80%] m-auto ">
              <Image
                src={isLoaded.image}
                alt="img"
                fill
                className="p-3 object-inherit rounded-[30px]"
              />
            </div>
          </div>
        </div>
        <div className="w-[55%] mx-4 py-5">
          <div>
            <div className="border-b-[2px]  flex ">
              {/* <h1 className=" font-bold text-[#1C2D56] text-[25px]">Title:</h1> */}
              <h1 className="font-bold text-[25px] text-[#1C2D56]">
                {isLoaded.title}
              </h1>
            </div>
            <div className="flex flex-wrap gap-5 my-4 pb-5 border-b-[2px]">
              {isLoaded.tags.map((tag) => {
                return (
                  <Fragment key={Math.random()}>
                    <IntrestsTile data={tag} />
                  </Fragment>
                );
              })}
            </div>

            <div className="border-b-[2px]">
              Instructor
              <div className="flex justify-between border-[2px] rounded-[10px] mb-[20px] p-[10px]">
                <Link href={`/auth/${isLoaded.instructor.uid}`}>
                  <div className="flex items-center">
                    <div className="relative w-[32px] h-[32px]">
                      <Image
                        src={isLoaded.instructor.summry.image}
                        alt=""
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h1 className="font-bold ml-[15px] text-[#1C2D56]">
                      {isLoaded.instructor.summry.displayName}
                    </h1>
                  </div>
                </Link>

                <div>
                  <Followbtn />
                </div>
              </div>
            </div>
            <div className="border-b-[2px] p-5 flex justify-around ">
              <div className="flex flex-col">
                <h1 className="font-bold text-[20px]">CoachingPoints</h1>
                <h1 className="font-bold m-auto text-[30px]">
                  {isLoaded.poins}
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-[20px]">LearningPoints</h1>
                <h1 className="font-bold m-auto text-[30px]">
                  {isLoaded.poins}
                </h1>
              </div>
            </div>

            <div className="border-b-[2px] p-5 ">
              <p>Timing</p>
              <div className="flex justify-between ">
                <p className="text-[12px] leading-[14px] font-medium text-[#8B8B8B] group-hover:text-green-800">
                  Start:
                  {new Date(isLoaded.startTime.seconds * 1000).toLocaleString()}
                </p>
                <p className="text-[12px] leading-[14px] font-medium text-[#8B8B8B] group-hover:text-green-800">
                  End:
                  {new Date(isLoaded.endTime.seconds * 1000).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="p-5">
              <div
                onClick={() => {
                  const data = registorSession(id, user.user.uid);
                  const resolveAfter3Sec = new Promise((resolve) =>
                    setTimeout(resolve, 1000)
                  );
                  toast.promise(resolveAfter3Sec, {
                    pending: "please wait ",
                    success: data,
                    error: "Error 🤯",
                  });
                }}
                className="w-[63.63%] cursor-pointer bg-[#E6E5E5] p-[30px]  mx-auto  flex justify-center"
              >
                <p className="text-[40px] leading-[18px] text-[#1C2D56] m-auto">
                  Register Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[60%] m-auto">
          <div className="w-[90] flex justify-center">
            <h1 className="font-semibold text-[30px] text-[#1C2D56] ">
              Attendees
            </h1>
          </div>
          <div className="flex flex-col w-[90%] mx-auto my-[10px] px-[10px] border-[2px] rounded-[10px] pt-4 ">
            {isLoaded.students.map((student) => {
              return (
                <Fragment key={Math.random()}>
                  <Students
                    onFollowHenddler={onFollowHenddler}
                    student={student}
                  />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionDetail;
