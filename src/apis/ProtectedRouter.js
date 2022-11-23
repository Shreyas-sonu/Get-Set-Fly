import { useContext } from "react";
import { Navigate} from "react-router-dom";
import { AuthContextApi } from "./AuthContextApi";


const ProtectedRouter = ({ children }) => {
    let {isLoading,authuser}=useContext(AuthContextApi)
    if ((isLoading===true && authuser.accessToken)|| window.sessionStorage.getItem("token")) {
        return <>{ children}</>
    } else {
        return <Navigate to="/login" />;
}
}

export default ProtectedRouter