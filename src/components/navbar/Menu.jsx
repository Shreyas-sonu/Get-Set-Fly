import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./_navbar.module.css";

const Menu = () => {
  return (
    <div className={Style.menuBlock}>
      <ul>
        <li>
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
        </li>
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
      </ul>
    </div>
  );
};

export default Menu;
