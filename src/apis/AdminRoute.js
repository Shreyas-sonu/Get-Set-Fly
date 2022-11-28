import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { dataBase } from "../apis/firebase";
import { getDoc, doc } from "@firebase/firestore";
import { toast } from "react-toastify";
import { AuthContextApi } from './AuthContextApi';

let AdminRoute = ({ children }) => {
  let [role, setRole] = useState(null);
  let { isLoading, authuser } = useContext(AuthContextApi);
  let { uid } = authuser === null ? "" : authuser;
  if (
    (isLoading === true && authuser.accessToken) ||
    window.sessionStorage.getItem("token")
  ) {
    let fetchData = async () => {
      let adminRef = doc(dataBase, "Users", uid);
      let adminUser = await getDoc(adminRef);
      let { role } = adminUser.data();
        // console.log(role);
        setRole(role)
    };
    fetchData();
    if (role !== undefined || (role !== null && role === "admin")) {
      return <>{children}</>;
    } else {
      toast.warn("You are not authorized");
      return <Navigate to="/profile" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

export default AdminRoute;
