import React from "react";
import { useLocation } from "react-router-dom";
import Style from "./_admin.module.css";


const UserDetails = (props) => {
    let location = useLocation();
    let { displayName, photoURL, email, gender, firstName, lastName,address } = location.state;
    return <div className={Style.userInfo}>
        <figure>
            <img src={ photoURL} alt={displayName} />
        </figure>
        <main>
            <h2>{displayName}</h2>
            <p>{ firstName+" "+lastName}</p>
            <p>{email}</p>
            <p>{gender}</p>
            <p>{ address}</p>
        </main>
  </div>;
};

export default UserDetails;
