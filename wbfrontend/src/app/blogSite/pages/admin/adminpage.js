import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileCard from "../../components/profileCard/profileCard";

function Admin() {
  const isAdmin = true;

  return (
    <>
      <Navbar isAdmin={isAdmin} />
      <div>
        <ProfileCard />
      </div>
    </>
  );
}

export default Admin;
