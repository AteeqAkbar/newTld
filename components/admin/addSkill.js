import { Fragment, useContext, useState, useRef } from "react";
import { AuthContext } from "../../contexts/auth_context";
import { storage } from "../../utils_firebase/config";
import Image from "next/image";
import { createSkills } from "../../utils_firebase/skills";
import { toast } from "react-toastify";

const AddSkill = () => {
  const { user } = useContext(AuthContext);
  // const [skills, setskills] = useState([]);
  const inputSkill = useRef("");
  const [Url, setURL] = useState("");
  const [file, setFile] = useState(null);
  const [fileSelect, setFileSelect] = useState(false);
  // useEffect(() => {
  //   getAllSkillsOnly().then((data) => {
  //     setskills(data);
  //     // console.log(data);
  //   });
  // }, []);

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
  let formData;
  function submitHandler(event) {
    event.preventDefault();

    const enteredSkill = inputSkill.current.value;
    const imageUrl = Url;

    // Spliting by comma...
    // const Tags = enteredTags.split(",");
    formData = {
      name: enteredSkill,
      image: imageUrl,
    };
    console.log(formData);

    createSkills(formData);
    inputSkill.current.value = "";
    setFileSelect(false);
    setURL("");
    toast.success("You add New Skill");

    // createSession(formData, router, user?.user.uid);
  }

  return (
    <Fragment>
      <div className="mt-5 bg-slate-50">
        <div className="w-11/12 ml-12 m-5">
          <div className="grid w-[60%] ">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0 mt-5">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Add New Skill
                </h3>
              </div>
              {/* form */}
              <div className="mt-5 md:grid md:col-span-1 md:mt-0">
                <form action="#" method="POST" onSubmit={submitHandler}>
                  <div className="shadow sm:overflow-hidden sm:rounded-md mt-5">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="skill"
                            className="block text-lg font-medium text-gray-700"
                          >
                            Skill
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="skill"
                              id="skill"
                              className="block w-full h-9 pl-[4px] flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please entered the Title"
                              ref={inputSkill}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Here is photo and coverphoto Start */}
                      <div>
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
                              <Image
                                src={Url}
                                alt=""
                                height={150}
                                width={150}
                              />
                            )}
                          </div>
                        </div>

                        {/*  Here is photo and coverphoto End */}
                      </div>

                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        {Url ? (
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md  border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Add Skill
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
};

export default AddSkill;
