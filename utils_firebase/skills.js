import firebase from "firebase/app";
import { fireStore } from "./config";

export const createSkills = (data) => {
  // console.log(data, "data");
  // const datas = [
  //   {
  //     name: "Angular",
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/blogs-e8354.appspot.com/o/icons%2Fangular.png?alt=media&token=dff1235e-97bb-42f5-a1c9-8810665f39e6",
  //   },
  //   {
  //     name: "Node JS",
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/blogs-e8354.appspot.com/o/icons%2Fnode-js.png?alt=media&token=0d277f73-23f6-474c-bade-6527fe9b06f5",
  //   },
  //   {
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/blogs-e8354.appspot.com/o/icons%2F1200px-Nextjs-logo.svg.png?alt=media&token=874d1eaf-2fd9-4b6e-99b7-e095542245d5",
  //     name: "Next JS",
  //   },
  //   {
  //     name: "MongoDB",
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/blogs-e8354.appspot.com/o/icons%2Fmongo.png?alt=media&token=fe7a9015-e461-41d5-b6a0-876371ba0a26",
  //   },
  //   {
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/blogs-e8354.appspot.com/o/icons%2F985px-Laravel.svg.png?alt=media&token=094e4785-13f7-4046-8564-c3d49bdd01aa",
  //     name: "Laravel",
  //   },
  //   {
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/blogs-e8354.appspot.com/o/icons%2Fjavascript.png?alt=media&token=fb09334c-5e11-42b1-a8f9-7d104e20ecb1",
  //     name: "JavaScript",
  //   },
  //   {
  //     name: "SEO",
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/blogs-e8354.appspot.com/o/images%2Fpngwing.com.png?alt=media&token=e600b7c4-dd3a-4d76-9bf1-7bc70706e727",
  //   },
  //   {
  //     name: "PHP",
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/blogs-e8354.appspot.com/o/icons%2FPHP-logo.svg.png?alt=media&token=86a94f28-a306-4e5c-aa19-8eba5921ed7c",
  //   },
  //   {
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/blogs-e8354.appspot.com/o/images%2Flogo-standard.png?alt=media&token=f00653b3-f138-4b91-b2e6-441f8d8c68bb",
  //     name: "Firebase",
  //   },
  //   {
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/blogs-e8354.appspot.com/o/images%2F1260218.png?alt=media&token=a608298c-467b-47c8-8b10-39eb137afb25",
  //     name: "Marketing",
  //   },
  //   {
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/blogs-e8354.appspot.com/o/icons%2FExpressjs.png?alt=media&token=92f0b731-d94b-4133-abeb-8ebfa0e44ec5",
  //     name: "Express JS",
  //   },
  //   {
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/blogs-e8354.appspot.com/o/icons%2Freact.png?alt=media&token=ecf2866f-1a3f-48f7-bd57-948589c3261a",
  //     name: "React Js",
  //   },
  //   {
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/blogs-e8354.appspot.com/o/icons%2FNET-Framework-Logo-2010.png?alt=media&token=62b297b3-3bb1-4787-8fba-768f4b076da1",
  //     name: ".Net",
  //   },
  // ];

  // // Add a new document with a generated id.

  // datas.forEach((element) => {
  //   fireStore
  //     .collection("skills")
  //     .add({
  //       image: element.image,
  //       name: element.name,
  //     })
  //     .then((docRef) => {
  //       console.log("Document written with ID: ", docRef.id);
  //     })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     });
  // });
  fireStore
    .collection("skills")
    .add({
      image: data.image,
      name: data.name,
      indemand: false,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

// get all skills
export const getAllSkillsWithImage = async () => {
  const allSkills = [];
  const skills = await fireStore.collection("skills").get();
  // console.log(skills.docs);
  for (const doc of skills.docs) {
    allSkills.push({ ...doc.data(), id: doc.id });
  }
  return allSkills;
};

// -----get all indemand skills -----
export const getAllIndemandSkillsWithImage = async () => {
  const allIndemandSkills = [];
  const skills = await fireStore
    .collection("skills")
    .where("indemand", "==", true)
    .get();
  // console.log(skills.docs);

  for (const doc of skills.docs) {
    allIndemandSkills.push({ ...doc.data(), id: doc.id });
  }
  return allIndemandSkills;
};

export const getAllSkillsOnly = async () => {
  const allSkills = [];
  const skills = await fireStore.collection("skills").get();
  for (const doc of skills.docs) {
    allSkills.push({
      id: doc.id,
      value: doc.data().name,
      label: doc.data().name,
    });
  }
  return allSkills;
};

//  filter sills by user intrest
export const getSkillsByUserIntrest = async (data) => {
  try {
    const allfilterSession = [];
    // console.log(data, "skr");
    // const ref = fireStore.collection("settings").doc("skills");
    const doc = await fireStore
      .collection("skills")
      .where("name", "in", data)
      .get();
    for (const element of doc.docs) {
      allfilterSession.push(element.data());
    }
    return allfilterSession;
  } catch (error) {
    console.log(error);
  }
};
export const updateIndemandSkill = (data) => {
  const ref = fireStore.collection("skills").doc(data.id);

  return ref
    .update({
      indemand: data.indemand,
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
};
