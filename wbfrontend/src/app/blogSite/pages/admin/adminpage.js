import React from "react";
import AdminNavbar from "./components/adminNavbar/AdminNavbar";
import "./style.css";
import ProfileCard from "./components/profileCard/profileCard";

function admin() {
  return (
    <>
      <AdminNavbar />
      <div style={{ backgroundColor: "#f6edea" }}>
        <ProfileCard />
      </div>
    </>
  );
}

export default admin;
