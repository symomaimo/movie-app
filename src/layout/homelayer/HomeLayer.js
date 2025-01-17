import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import "./homelayer.css"

const HomeLayer = () => {
  return (
    <>
      <Header />
      {/* page */}
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayer;
