import React, { useEffect, useState } from "react";
import { dataBase } from "./../apis/firebase";
import { getDocs, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import Moment from "react-moment";
import Style from "./_admin.module.css";
import { Link } from "react-router-dom";
import { HiUsers } from "react-icons/hi";

const ListOfUsers = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      let fetchUser = async () => {
        let userCollectionRef = collection(dataBase, "Users");
        let userData = await getDocs(userCollectionRef);
        let payload = userData.docs.map(val => {
          return { ...val.data(), id: val.id };
        });
        let filteredUser = payload.filter(user => user.role !== "admin");
        console.log(payload);
        // setUsers(payload);// including admin
        setUsers(filteredUser);

      };
      fetchUser();
    } catch (error) {
      toast.error(error.code);
    }
  }, []);
    return (
      <aside>
        <div className={Style.card}>
          <h1>
            <HiUsers />
            Users
          </h1>
          <p>
            No. of Users:<b>{users.length > 0 ? users.length : ""}</b>
          </p>
          <p>
            <Moment format="D/MMM/YYYY">{new Date()}</Moment>
          </p>
          <Link to="/admin/users">View Users</Link>
        </div>
      </aside>
    );
};

export default ListOfUsers;
