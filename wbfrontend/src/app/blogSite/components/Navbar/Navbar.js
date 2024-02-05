import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const Navbar = ({ isAdmin }) => {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="30"
          width="30"
        >
          <path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z" />
        </svg>
        <span className="icon">Blog Post</span>
        <input type="text" className="searchBar" placeholder="search"></input>
        <a className="navbarHome">Home</a>
        <a className="navbarAbout">About</a>
        {!isAdmin && (
          <button onClick={handleSignUp} class="signup">
            Sign Up
          </button>
        )}
        {!isAdmin && (
          <button onClick={handleLogin} class="login">
            Login
          </button>
        )}
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
