import { Fragment, useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../../contexts/auth_context";
import SkillTag from "../../../components/tiles/skillTag";
import { getAllSkillsOnly } from "../../../utils_firebase/skills";
import Image from "next/image";
import { useRouter } from "next/router";
import { getSessionById } from "../../../utils_firebase/sessions";
import { data } from "jquery";
import { updateSessionMeeting } from "../../../utils_firebase/sessions";
import Link from "next/link";

function SessionForm() {
  const router = useRouter();
  const id = router.query.sessionId;
  const [skills, setskills] = useState([]);
  const [intrest, setintrest] = useState([]);
  const [Url, setURL] = useState("");
  const inputStartTime = useRef();
  const inputEndTime = useRef();
  const inputPoints = useRef();
  const inputTitle = useRef();
  const inputMeetingUrl = useRef();
  const inputStatus = useRef();
  const [file, setFile] = useState(null);
  const [fileSelect, setFileSelect] = useState(false);
  useEffect(() => {
    getAllSkillsOnly().then((data) => {
      setskills(data);
    });
    const dateConverter = (now) => {
      now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      return now.toISOString().slice(0, 16);
    };
    getSessionById(id).then((data) => {
      inputTitle.current.value = data.title;
      inputPoints.current.value = data.poins;
      setURL(data.image);
      inputStartTime.current.value = dateConverter(
        new Date(data.startTime.seconds * 1000)
      );
      inputEndTime.current.value = dateConverter(
        new Date(data.endTime.seconds * 1000)
      );
      setintrest(data.tags);
      if (data.meetingLink) {
        inputMeetingUrl.current.value = data.meetingLink;
      }

      console.log(data, new Date(data.startTime.seconds * 1000));
    });
  }, []);

  function handleChange(e) {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    setFile(file);
    setFileSelect(true);
  }
  async function handleUpload() {
    if (file) {
      const path = `/images/${file.name}`;
      const ref = storage.ref(path);
      await ref.put(file);
      const url = await ref.getDownloadURL();
      setURL(url);
      console.log(url, "sasasa", Url);
    }
  }
  let formData = {};
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = inputTitle.current.value;
    const enteredStartTime = inputStartTime.current.value;
    const enteredEndTime = inputEndTime.current.value;
    const enteredPoints = inputPoints.current.value;
    const enteredMeetingUrl = inputMeetingUrl.current.value;
    const enteredStatus = inputStatus.current.value;
    formData = {
      Title: enteredTitle,
      StartTime: enteredStartTime,
      EndTime: enteredEndTime,
      Tags: intrest,
      Points: enteredPoints,
      Meeting: enteredMeetingUrl,
      Status: enteredStatus,
      Image: Url,
    };
    // console.log(formData, id, router.push("/admin"));
    updateSessionMeeting(formData, id, router);
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
                  Admin Session Form
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
                          {skills.length > 0 && intrest.length > 0 ? (
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
                            htmlFor="status"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Status
                          </label>

                          <div className="mt-1 flex rounded-md shadow-sm">
                            <select
                              name="status"
                              id="status"
                              ref={inputStatus}
                              className="block w-full h-9 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 lg:text-lg pl-5 sm:text-sm"
                            >
                              <option value="true">Approve</option>
                              <option value="false">Reject</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 ml-[20%] gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="meeting-url"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Meeting Url
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="meeting-url"
                              id="meeting-url"
                              className="block w-full h-9 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please enter the Meeting Url"
                              ref={inputMeetingUrl}
                            />
                            {/* <button
                              onClick={window.open(
                                `http://localhost:8000/google`,
                                "_blank"
                              )}
                            >
                              Generate
                            </button> */}
                            <Link
                              href={`http://localhost:3000/api/calendar/google?title=${inputTitle.current?.value}&start=${inputStartTime.current?.value}&end=${inputEndTime.current?.value}`}
                              target="_blank"
                            >
                              Generate
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Here is photo and coverphoto Start */}
                      {/* <div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Upload photo
                          </label>
                          <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            {!Url ? (
                              <div className="space-y-1 text-center">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                  <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                  >
                                    {fileSelect ? (
                                      <span onClick={handleUpload}>
                                        Click to Upload file
                                      </span>
                                    ) : (
                                      <>
                                        <span>Select a file</span>
                                        <input
                                          id="file-upload"
                                          name="file-upload"
                                          type="file"
                                          className="sr-only"
                                          onChange={handleChange}
                                        />
                                      </>
                                    )}
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                  PNG, JPG, GIF up to 10MB
                                </p>
                              </div>
                            ) : (
                              <Image src={Url} alt="" height={48} width={48} />
                            )}
                          </div>
                        </div>
                      </div> */}
                      {/*  Here is photo and coverphoto End */}
                      {/* <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        {Url ? (
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md  border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Create Session
                          </button>
                        ) : (
                          <p>Please Upload file First</p>
                        )}
                      </div> */}

                      <div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Upload photo
                          </label>
                          <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <Image src={Url} alt="" height={150} width={150} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        {Url ? (
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md  border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Create Session
                          </button>
                        ) : (
                          <p>Please Upload file First</p>
                        )}
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
}
export default SessionForm;
