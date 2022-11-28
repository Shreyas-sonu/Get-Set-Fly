import React, { Fragment, useContext, useEffect, useState } from "react";
import Style from "./profile.module.css";
import { AuthContextApi } from "./../../apis/AuthContextApi";
import Spinner from "../../pages/Spinner";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";
import { onSnapshot, doc } from "firebase/firestore";
import { dataBase } from "../../apis/firebase";

const ProfileDefault = () => {
  let { authuser, isLoading } = useContext(AuthContextApi);
  let [profile, setProfile] = useState("");
  let { uid } = authuser === null ? "" : authuser;

  let fetchData = async () => {
    onSnapshot(doc(dataBase, "Users", uid), doc => {
      setProfile(doc.data());
    })
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {authuser === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1>My Profile</h1>
          <article>
            <aside>
              <figure>
                <img
                  src={authuser.photoURL || profile.photoURL}
                  alt={authuser.displayName || profile.displayName}
                />
                <Link to="/profile/upload-pp">
                  <span>
                    <FaCamera />
                  </span>
                </Link>
              </figure>
            </aside>
            <h1>
              {profile.firstName + profile.lastName || authuser.displayName}
            </h1>
            <main>{authuser.email}</main>
            <aside className={Style.profileUser}>
              <Fragment>
                <p>{profile.gender}</p>
                <p>{profile.city}</p>
                <p>{profile.address}</p>
              </Fragment>
            </aside>
          </article>
        </Fragment>
      )}
    </>
  );
};

export default ProfileDefault;
