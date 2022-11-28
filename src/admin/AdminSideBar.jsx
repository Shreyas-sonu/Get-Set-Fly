import React from "react";
import Style from "./_admin.module.css";
import { Link } from 'react-router-dom';
import {AiOutlineDashboard} from "react-icons/ai"


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
          </nav>
          <main></main>
          <footer></footer>
        </aside>
      </div>
    );
};

export default AdminSideBar;
