
import React from 'react'
import { Outlet } from 'react-router-dom';
import Style from "./profile.module.css";


const ProfileMainblock = () => {
    return (
      <div className={Style.profileMainblock}>
        <Outlet />
      </div>
    );
}

export default ProfileMainblock;
