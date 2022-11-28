import react, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged,signOut } from "@firebase/auth";
import { auth } from "./firebase";
import { toast } from 'react-toastify';

export const AuthContextApi = createContext(null);

const AuthContextProvider = ({ children }) => {
    let [authuser, setAuthuser] = useState(null);
  let [isLoading, setLoading] = useState(false);
  let logOut = async () => {
    await signOut(auth);
    window.location.assign("/");
    toast.success("Successfully Logged Out")
    window.sessionStorage.removeItem("token")
  }
    useEffect(() => {
        return onAuthStateChanged(auth, userInfo => {
            if (userInfo.emailVerified===true && userInfo.isAnonymous===false ) {
                setLoading(true)
                setAuthuser(userInfo)
                let token = userInfo.accessToken;
              window.sessionStorage.setItem("token", token)
              console.log(userInfo)
            }
            else {
                setAuthuser(null)
                window.sessionStorage.removeItem("token")
            }
            setLoading(false)
        })
    },[])
  return (
    <AuthContextApi.Provider value={{ authuser, isLoading, logOut }}>
      {children}
    </AuthContextApi.Provider>
  )
}

export default AuthContextProvider;
