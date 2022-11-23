import React, { useState } from 'react';
import Style from "./_auth.module.css";
import Regimg from "./reg.png"
import { toast } from 'react-toastify';
// import { } from "firebase/auth"; //way1
// import fireBaseApp from '../../apis/firebase'; //way2
import { auth } from './../../apis/firebase';
import { useNavigate } from "react-router-dom";
import md5 from "md5";


//built in firebase function for authentication
import { createUserWithEmailAndPassword,sendEmailVerification,updateProfile } from '@firebase/auth';
//internally they are jwt web token
const Register = () => {
    let navigate = useNavigate();
    let [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isLoading:false,
    })
  let { username, email, password, confirmPassword, isLoading } = state;
    let handleChange = e => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    let handleSubmit = async e => {
        e.preventDefault();
        try {
            if (password !== confirmPassword) {
                toast.error("Password is Not Matched")
            }
            else {
                setState({ isLoading: true })
                let userData = await createUserWithEmailAndPassword(
                      auth,
                      email,
                      password,
              );
              sendEmailVerification(userData.user);
              let msg = `Email Verification has been send to Email Adress Please Verify Your Email...`
              updateProfile(userData.user, {
                displayName: username,
                photoURL:`https://www.gravatar.com/avatar/${md5(email)}?q=identicon`
              })
              toast.success(`${msg}}`)
              console.log(userData.user)
                navigate("/login")
            }
        } catch (error) {
            toast.error(error.code)
        }
        //Resetting Fields after submit
        setState({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            isLoading:false,
        });
    }
  return (
    <section id={Style.authBlock}>
      <article>
        <div className={Style.authRight}>
          <h1>Register</h1>
          <img src={Regimg} alt="" width="90%" />
        </div>
        <div className={Style.authLeft}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter User Name"
                value={username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Set Password</label>
              <input
                type="Password"
                id="password"
                name="password"
                placeholder="Enter New Password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm the Password"
                value={confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div>
                <button>{isLoading?"Loading...":"Register"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}

export default Register
