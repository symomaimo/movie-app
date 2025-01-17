import React, { useState, useEffect } from "react";
import "./pill.css";
const Pill = ({ genre, handleChooseGenre, activeTab, setActiveTab }) => {
  return (
    <div
      onClick={() => handleChooseGenre(genre)}
      className="pill"
      style={{
        backgroundColor: activeTab == genre.name ? "blue" : "white",
        color: activeTab == genre.name ? "white" : "black",
      }}
    >
      <p className="pill-title">{genre.name}</p>
    </div>
  );
};

export default Pill;
