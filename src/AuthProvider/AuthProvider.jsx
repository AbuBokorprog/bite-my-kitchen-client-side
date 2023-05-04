import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext("null");

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState();

  const createUser = (email, password, displayName, image) => {
    return createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName,
      image
    );
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const AuthInfo = { user, createUser, loginUser };

  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
