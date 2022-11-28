import React, { useState } from 'react';
import Style from "./_auth.module.css"
import { BiUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from './../../apis/firebase';
import { useNavigate } from "react-router-dom";

//built in firebase function for authentication
import { signInWithEmailAndPassword } from 'firebase/auth';
import { textAlign } from '@mui/system';


const Login = () => {
   let [toggle, setToggle] = useState(false);
  let [showPass, setShowpass] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isLoading, setLoading] = useState(false);
  let navigate = useNavigate();

   let togglePassword = () => {
     setToggle(!toggle); //Important toggle operation on each click
     setShowpass(!showPass); //Important toggle operation on each click
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true)
      let userData = await signInWithEmailAndPassword(auth,email, password);
      if (userData.user.emailVerified === true) {
        toast.success(`${email} Logged in Successfully`);
        navigate("/");
      }
      else {
        navigate("/login");
        toast.error("Your Email Verification is Pending Please Verify and Come Back Again")
      }
    } catch (error) {
      toast.error(error.code)
    }
    setLoading(false);
    setEmail("");
    setPassword("");
  }
  return (
    <section id={Style.authLoginBlock}>
      <article>
        <div className="container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <span className={Style.user}>
                <BiUser />
              </span>
            </div>
            <div className="form-group">
              <span className={Style.pass}>
                <RiLockPasswordFill />
              </span>
              <label htmlFor="">Password</label>
              <input
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <span className={Style.showPassword} onClick={togglePassword}>
                {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <div>
              <Link to="/reset-password" className={Style.reset}>
                Reset Password
              </Link>
              <span>
                Don't Have an Account? &nbsp;{" "}
                <Link to="/register">Register</Link>
              </span>
            </div>
            <div>
              <button>{isLoading ? "Loading..." : "Login"}</button>
            </div>
            <p style={{ textAlign: "center" }}>
              <small>or</small>
            </p>
            <hr />
            <Link
              to="/phone-auth"
              style={{
                display: "block",
                textDecoration: "none",
                color: "#673987",
                marginTop: "15px",
                textShadow: "1px 1px 1px 1px #555",
                cursor: "pointer",
              }}
            >
              Login With Phone Number
            </Link>
          </form>
        </div>
      </article>
    </section>
  );
}

export default Login;
