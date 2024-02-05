import React from "react";
import "./profileModal.css";
const ProfileModal = ({ modalShow, setmodalShow, handleClose }) => {
  return (
    <>
      <div className="profileModal">
        <div className="top">
          <h2>Upload Profile Picture</h2>
          <button className="close" onClick={handleClose}>
            close
          </button>
        </div>
        <input type="file"></input>
        <button className="upload">Upload</button>
      </div>
    </>
  );
};

export default ProfileModal;
