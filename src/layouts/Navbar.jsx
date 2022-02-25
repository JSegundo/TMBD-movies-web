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
            <a href="/movies/popular">Popular </a>
            <a href="/movies/top_rated">Top-rated </a>
            <a href="/movies/upcoming">Upcoming </a>
          </div>
        </div>

        <div className="dropdown">
          <a href="/" className="nav-link dropbtn">
            Tv Shows
          </a>
          <div className="dropdown-content">
            <a href="/tvshow/popular">Popular </a>
            <a href="/tvshow/airingtoday">Airing today</a>
            <a href="/tvshow/toprated">Top rated </a>
            <a href="/tvshow/ontv">On TV </a>
          </div>
        </div>

        <a href="/" className="nav-link">
          People
        </a>
      </div>

      <div className="searchmovies">
        <input type="text" placeholder="Search what you want.." />
      </div>

      <div>
        <p>Login</p>
      </div>
    </header>
  );
};

export default Navbar;
