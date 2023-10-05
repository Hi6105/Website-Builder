import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./Navbar.css";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const Navbar = () => {
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
      <div class="topNav">
        <span class="icon">BlogPost</span>
        <a href="#">
          <button onClick={handleSignUp} class="signup">
            Sign Up
          </button>
        </a>
        <a href="#">
          <button onClick={handleLogin} class="login">
            Login
          </button>
        </a>
      </div>
      {state === "login" ? (
        <Login show={show} setShow={setShow} handleClose={handleClose} />
      ) : (
        <SignUp show={show} setShow={setShow} handleClose={handleClose} />
      )}
    </>
  );
};

export default Navbar;
