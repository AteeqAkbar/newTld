import { useContext, useEffect, useState } from "react";
import { auth } from "../utils_firebase/config";
import { AuthContext } from "../contexts/auth_context";

import { toast } from "react-toastify";

export const useSinin = () => {
  const { setUser } = useContext(AuthContext);
  const [errors, setError] = useState(null);
  const [isPandings, setIsPanding] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const signin = async (data, router) => {
    setError(null);
    setIsPanding(true);
    try {
      // Sign Up create user
      const userCredential = await auth.signInWithEmailAndPassword(
        data.gmail,
        data.password
      );
      const userData = await getSingleUser(userCredential.user.uid);
      setUser((prev) => {
        return {
          ...prev,
          user: !(userData == "No such document!") ? userData : false,
          authIsValide: true,
        };
      });
      if (!cancelled) {
        setError(null);
        setIsPanding(false);
      }
      toast.success("Successfully Sigin In");

      router.push("/home");
      // Signed in
      var user = userCredential.user;
      console.log(user, "login");
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
  return { signin, errors, isPandings };
};
