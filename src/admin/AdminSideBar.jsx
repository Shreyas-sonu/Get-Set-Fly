import React from "react";
import Style from "./_admin.module.css";
import { Link } from 'react-router-dom';
import { AiOutlineDashboard } from "react-icons/ai"
import { BiHotel } from "react-icons/bi";



const AdminSideBar = () => {
    return (
      <div className={Style.adminSideBar}>
        <aside>
          <nav>
            <Link to="/admin">
              <span>
                <AiOutlineDashboard />
              </span>
              <span>Dashboard</span>
            </Link>
            <Link to="/admin/add-hotels">
              <span>
                <BiHotel />
              </span>
              <span>Add Hotels</span>
            </Link>
          </nav>
          <main></main>
          <footer></footer>
        </aside>
      </div>
    );
};

export default AdminSideBar;
