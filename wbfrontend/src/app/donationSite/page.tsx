"use client";
import "./page.css";
import frontImage from "public/pictures/frontImage.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Info from "./components/Info";
import manProfile from "public/manProfile.jpg";

export default function Home() {
  const [show, setShow] = useState(true);
  const route = useRouter();
  const handleClose = () => setShow(false);

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
                <a onClick={() => route.push("/paymentGateway")}>Donate</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </nav>
          <div className="mainImage">
            <Image src={frontImage} alt="NA" className="frontImage"></Image>
          </div>
          <div className="circular-div"></div>
        </div>
      )}
    </>
  );
}
