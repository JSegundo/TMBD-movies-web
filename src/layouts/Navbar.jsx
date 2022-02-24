import React from "react";
// import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar">
        <a href="/" className="nav-link">
          TMDB
        </a>

        <div className="dropdown">
          <a href="/" className="nav-link dropbtn">
            Movies
          </a>

          <div className="dropdown-content">
            <a href="/popular">Popular </a>
            <a href="/trending">Trending </a>
            <a href="/upcoming">Upcoming </a>
          </div>
        </div>

        <a href="/" className="nav-link">
          Tv Shows
        </a>

        <a href="/" className="nav-link">
          People
        </a>
      </div>

      <div>
        <p>Login</p>
      </div>
    </header>
  );
};

export default Navbar;
