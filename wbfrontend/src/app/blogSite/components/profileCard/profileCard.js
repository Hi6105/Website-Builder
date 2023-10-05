import React from "react";
import "./profileCard.css";
import "font-awesome/css/font-awesome.min.css";

function ProfileCard() {
  return (
    <>
      <div className="profileCard">
        <div className="profilePicture">
          <label>
            <i class="fa fa-upload fa-4x" id="elementID"></i>
            <input type="file"></input>
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
            <button>Start Writing</button>
            <button>Follow</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
