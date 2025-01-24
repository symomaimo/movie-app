import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="main-header">
      <div className="inner-header">
        <div className="logo-container">
          <img className="logo-image" src="/movies-app.png" alt="logo" />
        </div>
        <div className="links">
          <NavLink to="/">Movies</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/series">Series</NavLink>
          <NavLink to="/trending">Trending</NavLink>
          <NavLink to="/trending-shows">Tv shows</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
