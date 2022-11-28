import React, { useState,useRef } from "react";
import Style from "./_auth.module.css";
import { BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "./../../apis/firebase";
import { useNavigate } from "react-router-dom";

//built in firebase function for authentication
import { signInWithPhoneNumber,RecaptchaVerifier } from "firebase/auth";
import { display } from "@mui/system";

const PhoneAuth = () => {
  let [phone, setphone] = useState("");
  let [otp, setOtp] = useState("");
  let [isLoading, setLoading] = useState(false);
  let navigate = useNavigate();
  let otpRef = useRef();
  let phnRef = useRef();

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      let reCaptchaVerifier = new RecaptchaVerifier(
        "captcha-container",
        {
          size: "invisible",
          callback: response => {
            // Recaptch Solved
            console.log(response);
          },
        },
        auth
      );
      signInWithPhoneNumber(auth, phone,reCaptchaVerifier)
        .then(confirmationResult => {
          phnRef.current.style.display = "none";
          otpRef.current.style.display = "block";
          window.confirmationResult = confirmationResult;
            let code = otp;
            confirmationResult.confirm(code).then(result => {
                const user = result.user;
                  console.log(auth)
                  })
                  .catch(error => {
                  console.log(error);
                  });
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      toast.error(error.code);
    }
    setLoading(false);
    setphone("");
    };
  return (
    <section id={Style.authLoginBlock}>
      <article>
        <div className="container">
          <h1 style={{ fontSize: "larger" }}>Login with Phone</h1>
          <form onSubmit={handleSubmit} ref={phnRef}>
            <div className="form-group">
              <label htmlFor="">Enter Registered Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={phone}
                onChange={e => setphone(e.target.value)}
                required
              />
              <span className={Style.user}>
                <BsPhone />
              </span>
            </div>
            <div id="captcha-container"></div>
            <div>
              <button>{isLoading ? "Loading..." : "Send OTP"}</button>
            </div>
          </form>
          <form onSubmit={e => {
            e.preventDefault();
          window.location.assign("/profile")}} ref={otpRef} style={{ display: "none" }}>
            <div className="form-group">
              <label htmlFor="">Enter Otp</label>
              <input
                type="text"
                id="otp"
                name="otp"
                placeholder="Enter The otp received to your Phone"
                value={otp}
                onChange={e => setOtp(e.target.value)}
                required
              />
              <span className={Style.user}>
                <BsPhone />
              </span>
            </div>
            <div id="captcha-container"></div>
            <div>
              <button>{isLoading ? "Loading..." : "Login"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default PhoneAuth;
