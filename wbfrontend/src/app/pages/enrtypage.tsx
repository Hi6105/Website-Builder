"use client";
import React, { useState } from "react";
import pic from "public/pictures/4300580.jpg";
import Image from "next/image";
import "./entrypage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../../../components/login/login.js";
import SignUp from "../../../components/signup/signup.js";
import { useRouter } from "next/navigation";

export default function Enrtypage() {
  const [show, setShow] = useState(false);
  const [state, setState] = useState("");
  const [site, setSite] = useState("");
  const Router = useRouter();

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
            <select
              id="form-select"
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setSite(e.target.value);
              }}
            >
              <option value="0" selected>
                Select Website type
              </option>
              <option value="donationSite">Donation Website</option>
              <option value="e-com">E-Commerce Website</option>
              <option value="blogSite">Blog Website</option>
            </select>
          </div>
          <button
            className="selectedtype"
            onClick={() => Router.push(`/${site}`)}
          >
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
