import React from "react";
import Header from "../pages/shared/header/Header";
import Footer from "../pages/shared/footer/Footer";
import Home from "../pages/Home/Home/Home";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="">
      <div className="">
        <Header />
        <div className="px-20">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
