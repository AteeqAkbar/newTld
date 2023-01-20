import { auth, fireStore, googleProvider } from "./config";
import firebase from "firebase/app";
// import { toast } from "react-toastify";

// get feature mentors
export const getUsers = async (condition) => {
  const resualt = [];
  if (condition) {
    const data = await fireStore
      .collection("users")
      .where("feature", "==", true)
      .get();
    data.docs.forEach((doc) => {
      resualt.push({ id: doc.id, ...doc.data() });
    });
  } else {
    const data = await fireStore.collection("users").get();
    data.docs.forEach((doc) => {
      resualt.push({ id: doc.id, ...doc.data() });
    });
  }

  return resualt;
};

//  login with google

export const loginWithGoogle = (router, setUser) => {
  auth
    .signInWithPopup(googleProvider)
    .then(async (result) => {
      const credential = result.credential;
      // console.log(credential);

      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // console.log(user, "user><><><><");
      // setUser((prev) => {
      //   return { ...prev, user };
      // });

      const userData = await getSingleUser(user.uid);
      console.log(userData, "userdata");
      if (!userData.uid) {
        await fireStore
          .collection("users")
          .doc(user.uid)
          .set(
            {
              uid: user.uid,
              summry: {
                displayName: user.displayName,
                email: user.email,
                image: user.photoURL,
              },
              points: {
                learningPoint: 100,
                coachingPoint: 100,
              },
              followers: [],
              following: [],
              interest: [],
              learning: [],
            },
            { merge: true }
          );

        const userData = await getSingleUser(user.uid);
        setUser((prev) => {
          return { ...prev, user: userData, authIsValide: true };
        });
        console.log("Document successfully written!");
        router.push("/home");
        // toast.success("Successfully Sigin In");
      } else {
        setUser((prev) => {
          return { ...prev, user: userData };
        });
        // toast.success("Successfully LogIn");

        router.push("/home");
      }
      // ...
    })
    .catch((error) => {
      // toast.error(error.message);
      // Handle Errors here.
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};

//  update profile image

export default function updateImage(image, uid) {
  var Ref = fireStore.collection("users").doc(uid);

  // Set the "capital" field of the city 'DC'
  return Ref.update({
    "summry.image": image,
  })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}
export const updatePoint = async(params) => {
  var Ref = await fireStore.collection("users").doc("99iQxqVi3gc7ppU7Yvq8cSd26Wr1");
  return Ref.update({
    // "points.learningPoint": learningPoint-sessionPoins,
    "points.learningPoint": 100 - 100,
  })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
};

export const getSingleUser = (id) => {
  return fireStore
    .collection("users")
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        // console.log("No such document!");
        return "No such document!";
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};

export const updateProfile = (data, uid) => {
  console.log(data, "update data");
  var Ref = fireStore.collection("users").doc(uid);
  return Ref.update({
    ...data,
  })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
};

// follow a user
export const followUser = async (followingId, userId) => {
  try {
    // add id in following table of login user
    await fireStore
      .collection("users")
      .doc(userId)
      .update({
        following: firebase.firestore.FieldValue.arrayUnion(followingId),
      });
    // add id in follower table

    await fireStore
      .collection("users")
      .doc(followingId)
      .update({
        followers: firebase.firestore.FieldValue.arrayUnion(userId),
      });
  } catch (error) {
    console.log(error);
  }
};
