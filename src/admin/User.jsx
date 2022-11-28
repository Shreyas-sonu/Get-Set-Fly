import React from "react";
import { Link } from 'react-router-dom';

const User = (props) => {
    let { displayName, photoURL, email,gender,uid }=props
    return (
      <div>
        <figure>
          <img src={photoURL} alt={displayName} />
        </figure>
        <p>{displayName}</p>
        <p>{gender}</p>
        <p>{email}</p>
        <Link to={`/admin/${uid}`} state={props}>View More</Link>
      </div>
    );
};

export default User;
