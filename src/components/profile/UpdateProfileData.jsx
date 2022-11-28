import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import Style from "./profile.module.css";
import { dataBase, auth } from "../../apis/firebase";
import { doc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { AuthContextApi } from "./../../apis/AuthContextApi";

const UpdateProfileData = () => {
  let { authuser } = useContext(AuthContextApi);
  let { uid } = authuser === null ? "" : authuser;
  console.log(uid);
  let [state, setState] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    city: "",
    address: "",
    isLoading: false,
  });
  let { firstName, lastName, gender, city, address, isLoading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    console.log(state);
    try {
      let payload = {
        firstName,
        lastName,
        gender,
        city,
        address,
        isLoading,
      };
      //Collection Path(database path where files to be stored)
      let userCollectionRef = doc(dataBase, `Users`, uid);
      // Saving the data in the set Path
      let { displayName, photoURL, email } = authuser; // Default Data (Present Before)
      // linking auth with dataBase With a reference Address (Unique for each User)
      await setDoc(userCollectionRef, {
        uid,
        displayName,
        photoURL,
        email,
        ...payload,
      });
    toast.success(`${displayName} Profile Updated Successfully`);
    window.location.assign("/profile");
    } catch (error) {
      toast.error(error.code);
    }
  };
  return (
    <div className={Style.ProfileMainBlock}>
      <h1>Add Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Firstname</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Lastname</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group" value={gender} onChange={handleChange}>
          <label htmlFor="gender">Gender</label>
          <input type="radio" name="gender" value="Male" />
          Male
          <input type="radio" name="gender" value="Female" />
          Female
        </div>
        <div className="form-group">
          <label htmlFor="city">city</label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            cols="30"
            value={address}
            onChange={handleChange}
            rows="10"
          ></textarea>
        </div>
        <div className="form-group">
          <button>{isLoading ? "Loading..." : "Submit"}</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileData;
