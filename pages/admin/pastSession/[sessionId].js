import { useRouter } from "next/router";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { getSessionById } from "../../../utils_firebase/sessions";
import SkillTag from "../../../components/tiles/skillTag";
import { getAllSkillsOnly } from "../../../utils_firebase/skills";
import Image from "next/image";

const PastSessionForm = () => {
  const router = useRouter();
  const id = router.query.sessionId;
  const [skills, setskills] = useState([]);
  const [intrest, setintrest] = useState([]);
  const [Url, setURL] = useState("");
  const inputStartTime = useRef();
  const inputEndTime = useRef();
  const inputPoints = useRef();
  const inputTitle = useRef();
  const inputInstructor = useRef();
  const inputVideoLink = useRef();

  useEffect(() => {
    // getAllSkillsOnly().then((data) => {
    //   setskills(data);
    // });
    const dateConverter = (now) => {
      now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      return now.toISOString().slice(0, 16);
    };
    getSessionById(id).then((data) => {
      console.log(data.instructor.summry.displayName);
      inputTitle.current.value = data.title;
      inputInstructor.current.value = data.instructor.summry.displayName;
      inputPoints.current.value = data.poins;
      setURL(data.image);
      setintrest(data.tags);
      inputStartTime.current.value = dateConverter(
        new Date(data.startTime.seconds * 1000)
      );
      inputEndTime.current.value = dateConverter(
        new Date(data.endTime.seconds * 1000)
      );
    });
  }, []);

  let formData = {};
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredVideoLink = inputVideoLink.current.value;
    formData = {
      videoLink: enteredVideoLink,
    };
    console.log(formData);
  };
  const handleSelectedChange = (seleteditem) => {
    // console.log(fillterSkills(seleteditem));
    setintrest(fillterSkills(seleteditem));
  };
  const fillterSkills = (data) => {
    return data.map((ele) => ele.value);
  };
  const fillterSkillsforautocomplete = (data) => {
    return data.map((ele) => {
      return {
        value: ele,
        label: ele,
      };
    });
  };

  return (
    <Fragment>
      <div className="mt-5 bg-slate-50">
        <div className="w-11/12 ml-12 m-5">
          <div className="grid w-[60%] ">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0 mt-5">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Past Session Form
                </h3>
              </div>
              {/* form */}
              <div className="mt-5 md:grid md:col-span-1 md:mt-0">
                <form action="#" method="POST" onSubmit={submitHandler}>
                  <div className="shadow sm:overflow-hidden sm:rounded-md mt-5">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-3 ml-[20%] gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="company-website"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Title
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="company-website"
                              id="company-website"
                              className="block w-full h-9 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please entered the Title"
                              ref={inputTitle}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 ml-[20%] gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="instructor"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Instructor
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="instructor"
                              id="instructor"
                              className="block w-full h-9 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please entered the Title"
                              ref={inputInstructor}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 ml-[20%] gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="startTime"
                            className="block text-sm font-medium text-gray-700"
                          >
                            StartTime
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="datetime-local"
                              name="startTime"
                              id="startTime"
                              className="block w-full h-9 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please intered the Start time"
                              ref={inputStartTime}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 ml-[20%] gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="endTime"
                            className="block text-sm font-medium text-gray-700"
                          >
                            EndTime
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="datetime-local"
                              name="endTime"
                              id="endTime"
                              ref={inputEndTime}
                              className="block w-full h-9 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please enter End Time"
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 ml-[20%] gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="tags"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tags
                          </label>
                          {intrest.length > 0 ? (
                            <SkillTag
                              handleSelectedChange={handleSelectedChange}
                              skills={skills}
                              userSkills={
                                intrest.length > 0
                                  ? fillterSkillsforautocomplete(intrest)
                                  : []
                              }
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 ml-[20%] gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="points"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Points
                          </label>

                          <div className="mt-1 flex rounded-md shadow-sm">
                            <select
                              name="points"
                              id="points"
                              disabled
                              ref={inputPoints}
                              className="block w-full h-9 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 lg:text-lg pl-5 sm:text-sm"
                            >
                              <option value="10">10 Points</option>
                              <option value="20">20 Points</option>
                              <option value="30">30 Points</option>
                              <option value="40">40 Points</option>
                              <option value="50">50 Points</option>
                              <option value="60">60 Points</option>
                              <option value="70">70 Points</option>
                              <option value="80">80 Points</option>
                              <option value="90">90 Points</option>
                              <option value="100">100 Points</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 ml-[20%] gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="videoLink"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Video Link
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="videoLink"
                              id="videoLink"
                              className="block w-full h-9 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please enter video Link"
                              ref={inputVideoLink}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md  border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Create Session
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PastSessionForm;
