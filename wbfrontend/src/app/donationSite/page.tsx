"use client";
import "./page.css";
import frontImage from "public/pictures/frontImage.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Info from "./components/Info";
import manProfile from "public/pictures/manProfile.jpg";

export default function Home() {
  const [show, setShow] = useState(true);
  const route = useRouter();
  const handleClose = () => setShow(false);

  const handleDonate = () => {
    // Initiate a POST request to the server
    // If the server is on a different domain than the client
    // then this needs to be the full url
    // http://localhost:3000/create-checkout-session
    fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Send along all the information about the items
      body: JSON.stringify({
        items: [
          {
            id: 1,
            quantity: 2,
          },
          {
            id: 2,
            quantity: 1,
          },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        // If there is an error then make sure we catch that
        return res.json().then((e) => Promise.reject(e));
      })
      .then(({ url }) => {
        // On success redirect the customer to the returned URL
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <>
      {show === true ? (
        <Info show={show} setShow={setShow} handleClose={handleClose} />
      ) : (
        <div>
          <nav className="navbar">
            <div className="logo">
              <span className="charity-text">Charity</span>
            </div>
            <ul className="nav-links" style={{ listStyle: "none" }}>
              <li>
                <a>Home</a>
              </li>
              <li>
                <button onClick={handleDonate}>Donate</button>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </nav>
          <div className="mainImage">
            <Image src={frontImage} alt="NA" className="frontImage"></Image>
          </div>
          <div className="circular-div">
            <Image src={manProfile} alt="NA" className="manProfile"></Image>
          </div>
        </div>
      )}
    </>
  );
}
