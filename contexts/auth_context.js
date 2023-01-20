import React, { createContext, useState, useEffect } from "react";
import { auth } from "../utils_firebase/config";

import { getSingleUser } from "../utils_firebase/users";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ user: false, authIsValide: false });
  const [trigger, setTrigger] = useState(false);

  const triggerAuthEffect = () => {
    if (trigger == true) {
      setTrigger(false);
    } else if (trigger == false) {
      setTrigger(true);
    }
  };

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((userCredential) => {
      console.log(userCredential, "on auth state change");
      getSingleUser(userCredential?.uid).then((userData) => {
        setUser((prev) => {
          return {
            ...prev,
            user: !(userData == "No such document!") ? userData : false,
            authIsValide: true,
          };
        });
      });

      unSub();
    });
  }, [trigger]);
  console.log(user, "auth user");

  return (
    <AuthContext.Provider value={{ user, setUser, triggerAuthEffect }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
