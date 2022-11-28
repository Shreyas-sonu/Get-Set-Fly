import React, { useEffect, useState } from "react";
import { dataBase } from "./../apis/firebase";
import { getDocs, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import Moment from "react-moment";
import Style from "./_admin.module.css";
import { Link } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import Spinner from './../pages/Spinner';
import User from './User';

const Users = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      let fetchUser = async () => {
        let userCollectionRef = collection(dataBase, "Users");
        let userData = await getDocs(userCollectionRef);
        let payload = userData.docs.map(val => {
          return { ...val.data(), id: val.id };
        });
        console.log(payload);
        setUsers(payload);
      };
      fetchUser();
    } catch (error) {
      toast.error(error.code);
    }
  }, []);
    return (
      <>
        <h1 className={Style.adminUserHeading}>Users</h1>
        <div className={Style.cardBody}>
          {users?.map.length === 0 ? (
            <Spinner />
          ) : (
            users?.map(val => {
              return <User key={val.id} {...val} />;
            })
          )}
        </div>
      </>
    );
};

export default Users;
