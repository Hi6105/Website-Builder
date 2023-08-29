import React, { useState } from "react";
import Image from "next/image";
import pic from "./4300580.jpg";
import "./entrypage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../../../components/login/login.js";
import SignUp from "../../../components/signup/signup.js";

export default function Enrtypage() {
  const [show, setShow] = useState(false);
  const [state, setState] = useState("");

  const handleClose = () => setShow(false);
  const handleSignUp = () => {
    setState("signup");
    setShow(true);
  };

  const handleLogin = () => {
    setState("login");
    setShow(true);
  };

  return (
    <>
      <div className="frontpage">
        <div className="leftimage">
          <Image src={pic} alt="" className="pic" />
        </div>
        <div className="content">
          <div className="credentials">
            <button onClick={handleLogin} className="Login">
              Login
            </button>
            <button onClick={handleSignUp} className="Signup">
              Signup
            </button>
          </div>
          <div className="sitetype">
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Website type</option>
              <option value="1">DonationWebsite</option>
              <option value="2">E-Commerce Website</option>
              <option value="3">Blog Website</option>
              <option value="3">Portfolio</option>
            </select>
          </div>
          <button className="selectedtype" type="submit">
            Submit
          </button>
        </div>
      </div>
      {state === "login" ? (
        <Login show={show} setShow={setShow} handleClose={handleClose} />
      ) : (
        <SignUp show={show} setShow={setShow} handleClose={handleClose} />
      )}
    </>
  );
}
