import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContextApi } from "./AuthContextApi";

const PublicRouter = ({ children }) => {
  let { isLoading, authuser } = useContext(AuthContextApi);
  if (
    (isLoading === true && authuser.accessToken) ||
    window.sessionStorage.getItem("token")
  ) {
    return <Navigate to="/"/>
  } else {
    return <>{children}</>;
  }
};

export default PublicRouter;
