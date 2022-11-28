import React, { useState } from "react";
import Style from "./_auth.module.css";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "./../../apis/firebase";
import { useNavigate } from "react-router-dom";

//built in firebase function for authentication
import { sendPasswordResetEmail} from "firebase/auth";

const ResetPassword = () => {
  let [email, setEmail] = useState("");
  let [isLoading, setLoading] = useState(false);
  let navigate = useNavigate();

  let handleSubmit = async e => {
    e.preventDefault();
    try {
        setLoading(true);
        sendPasswordResetEmail(auth, email);
        toast.info(`A Link to Reset your Password has been sent to your Mail ID ${email}`)
        navigate("/login")

    } catch (error) {
      toast.error(error.code);
    }
    setLoading(false);
    setEmail("");
  };
  return (
    <section id={Style.authLoginBlock}>
      <article>
        <div className="container">
          <h1>Reset Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Enter Registered Email</label>
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
            <div>
              <span>
                Remember your Account want go back? &nbsp;{" "}
                <Link to="/login">Login</Link>
              </span>
            </div>
            <div>
              <button>{isLoading ? "Loading..." : "Reset Password"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default ResetPassword;
