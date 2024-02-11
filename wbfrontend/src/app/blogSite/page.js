"use client";
import React, { useState } from "react";
import Blog from "./pages/blog/blog";
import Admin from "./pages/admin/adminpage";

function Home() {
  let isAdmin = false;
  return (
    <>
      <Admin isAdmin={isAdmin} />
    </>
  );
}

export default Home;
