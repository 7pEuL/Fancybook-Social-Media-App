// import axios from "axios";
import { createContext, useEffect, useState } from "react";
import images from "../images";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // const login = async (inputs) => {
  //   const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
  //     withCredentials: true,
  // });

  //   setCurrentUser(res.data)
  // };

  const login = () => {
    setCurrentUser({
      id: 7,
      name: "Almond Jacobin",
      profilePic: images.UserPhoto,
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
