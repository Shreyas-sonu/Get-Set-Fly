import React, { Fragment, useContext } from "react";
import { NavLink,Link } from "react-router-dom";
import Style from "./_navbar.module.css";
import { AuthContextApi } from "../../apis/AuthContextApi";
import {FaPowerOff} from "react-icons/fa"

const Menu = () => {
  let { authuser, isLoading,logOut } = useContext(AuthContextApi);
  let AuthenticatedUser = () => {
    return (
      <Fragment>
        <li className={Style.userAvatar}>
          <Link to="/profile" className={Style.profile}>
            <img src={authuser.photoURL} alt={authuser.displayName} />
          </Link>
          {/* <span>
            Welcome <b style={{ color: "#673987",fontWeight:"bolder" }}>{authuser.displayName}</b>
          </span> */}
        </li>
        <li>
          <button onClick={logOut} title="Logout from Account">
            <FaPowerOff />
          </button>
        </li>
      </Fragment>
    );
  }
  let AnonymousUser = () => {
    return (
      <Fragment>
        <li>
          <NavLink activeclassname="active" to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/login">
            Login
          </NavLink>
        </li>
      </Fragment>
    );
  }
  return (
    <div className={Style.menuBlock}>
      <ul>
        <li>
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
        </li>
        {isLoading === true? "Loading...":authuser===null?<AnonymousUser/>:<AuthenticatedUser/>}
        {/* <li>
          <NavLink activeclassname="active" to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/login">
            Login
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default Menu;
