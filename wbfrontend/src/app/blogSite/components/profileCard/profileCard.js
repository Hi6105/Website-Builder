import React, { useState } from "react";
import "./profileCard.css";
import ProfileModal from "../profileModal/profileModal";
import { useRouter } from "next/navigation";

function ProfileCard() {
  const [modalShow, setmodalShow] = useState(false);
  const Router = useRouter();

  const handleClose = () => {
    setmodalShow(false);
  };
  const handleShow = () => {
    setmodalShow(true);
  };
  return (
    <>
      <div className="profileCard">
        <div className="profilePicture" onClick={handleShow}>
          <label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="50"
              weight="50"
            >
              <path
                fill="#61677a"
                d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
              />
            </svg>
          </label>
        </div>
        <div className="box2">
          <div className="username">
            <h3>Name</h3>
          </div>
          <div className="useremail">
            <p>example@gmail.com</p>
          </div>
          <div className="togglebutton">
            <button
              className="write"
              onClick={() => Router.push(`/blogSite/components/TextEditor`)}
            >
              Start Writing
            </button>
          </div>
        </div>
      </div>
      {modalShow && (
        <ProfileModal
          modalShow={modalShow}
          setmodalShow={setmodalShow}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

export default ProfileCard;
