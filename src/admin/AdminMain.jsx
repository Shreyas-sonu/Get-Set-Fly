import React from "react";
import Style from "./_admin.module.css";
import ListOfUsers from './ListOfUsers';
import { Outlet } from 'react-router-dom';


const AdminMain = () => {
  return (
    <div className={Style.adminMain}>
        <Outlet/>
    </div>
  );
};

export default AdminMain;
