import React from "react";
import Navbar from "../../components/header/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Outlet } from "react-router-dom";

function Promot() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Promot;
