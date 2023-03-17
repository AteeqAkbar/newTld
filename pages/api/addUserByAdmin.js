// import db from "../../utils_firebase/firebaseAdmin";
// import { auth } from "../../utils_firebase/config";
import { fireStore } from "../../utils_firebase/config";
import auth from "../../utils_firebase/firebaseAdmin";

// export default async (_, res) => {
//   const ref = await db.collection("sessions").get();
//   const allSessions = [];
//   ref.forEach((doc) => {
//     allSessions.push({ id: doc.id, ...doc.data() });
//   });
//   res.status(200).json(allSessions);
// };
export default (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.Password;
  console.log(firstName, lastName, email, password);
  // console.log(db);

  auth
    .createUser({
      email: email,
      emailVerified: false,
      password: password,
      displayName: `${firstName} ${lastName}`,
      photoURL:
        "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png",
      disabled: false,
    })
    .then((userRecord) => {
      fireStore
        .collection("users")
        .doc(userRecord.uid)
        .set({
          uid: userRecord.uid,
          summry: {
            displayName: userRecord.displayName,
            email: userRecord.email,
            image: userRecord.photoURL,
          },
          role: "user",
          points: {
            learningPoint: 100,
            coachingPoint: 100,
          },
          followers: [],
          following: [],
          interest: [],
          learning: [],
        });
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully created new user:", userRecord.uid);
    })
    .catch((error) => {
      console.log("Error creating new user:", error);
    });

  res.redirect("/admin");
};
