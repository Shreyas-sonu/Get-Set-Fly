import React from 'react';
import Style from "./profile.module.css";
import { NavLink } from 'react-router-dom';


const ProfileSidebar = () => {
  return (
    <div className={Style.profileSidebar}>
      <nav>
        <ul>
          <li>
            <NavLink to="/profile" activeClassName="active">
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/upload-pp" activeClassName="active">
              Update Profile Photo
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/update-phone">Update Phone Number</NavLink>
          </li>
          <li>
            <NavLink to="/profile/upload-profile">Update Profile</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProfileSidebar