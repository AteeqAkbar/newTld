import { useContext, useEffect, useState } from "react";
import { auth, fireStore } from "../utils_firebase/config";
import { AuthContext } from "../contexts/auth_context";
import { getSingleUser } from "../utils_firebase/users";
import { toast } from "react-toastify";

export const useSinup = () => {
  const { setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [cancelled, setCancelled] = useState(false);
  const [isPanding, setIsPanding] = useState(false);
  const signup = async (data, router) => {
    setError(null);
    setIsPanding(true);
    try {
      // Sign Up create user

      const image = data.image
        ? data.image
        : "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png";
      const userCredential = await auth.createUserWithEmailAndPassword(
        data.gmail,
        data.password
      );

      await userCredential.user.sendEmailVerification();
      await userCredential.user.updateProfile({
        displayName: data.firstName + data.lastName,
      });
      // Email verification sent!
      console.log("Email send");

      await fireStore
        .collection("users")
        .doc(userCredential.user.uid)
        .set({
          uid: userCredential.user.uid,
          summry: {
            displayName: data.firstName + " " + data.lastName,
            email: data.gmail,
            image: image,
          },
          points: {
            learningPoint: 100,
            coachingPoint: 100,
          },
          followers: [],
          following: [],
          interest: [],
          learning: [],
        });

      const userData = await getSingleUser(userCredential.user.uid);
      setUser((prev) => {
        return {
          ...prev,
          user: !(userData == "No such document!") ? userData : false,
          authIsValide: true,
        };
      });

      console.log("Document successfully written!");
      if (!cancelled) {
        setError(null);
        setIsPanding(false);
      }
      toast.success("Successfully Sigin In");
      router.push("/home");
      // Signed in
      var user = userCredential.user;
      console.log(user, "Signed in");
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
      if (!cancelled) {
        setError(error.message);
        setIsPanding(false);
      }
    }
  };

  // useEffect(() => {
  //   return () => {
  //     setCancelled(true);
  //   };
  // }, []);

  return { signup, error, isPanding };
};
