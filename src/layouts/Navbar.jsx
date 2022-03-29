import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/index.css";
import { useUser } from "../context/UserContext.js";

const API = "https://api.themoviedb.org/3";
const apiKEY = "api_key=e9e7cb266dc0d3f00bd94a93dae48419";

const Navbar = () => {
  // let sessUser = JSON.parse(localStorage.getItem("sess-user"));
  const { user, setUser } = useUser();
  let sessUser = user;
  console.log(sessUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post("/user/logout")
      .then(() => {
        // localStorage.clear();
        setUser(null);
        console.log("Logged out!");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  // barra de busqueda.
  const [inputvalue, setInputValue] = React.useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const [submited, setSubmited] = useState(false);
  const [movies, setMovies] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `${API}/search/multi?${apiKEY}&language=en-US&query=${inputvalue}&page=1&include_adult=true`
      )
      .then((resp) => resp.data)
      .then((response) => {
        setMovies(response);
        setSubmited(true);
      })
      .catch((err) => console.error(err));
  };
  const toggleSearchBar = () => {
    const searchBar = document.getElementById("formsearch");
    searchBar.classList.toggle("inputsearch-invisible");
  };

  return (
    <header className="header">
      {/* <div className="navbar" aria-label="navigation">
        <a href="/" className="nav-link">
          TMDB
        </a>

        <div className="dropdown">
          <div className="nav-link dropbtn">Movies</div>

          <div className="dropdown-content">
            <a href="/movies/popular">Popular </a>
            <a href="/movies/top_rated">Top-rated </a>
            <a href="/movies/upcoming">Upcoming </a>
          </div>
        </div>

        <div className="dropdown">
          <div className="nav-link dropbtn"> Tv Shows</div>
          <div className="dropdown-content">
            <a href="/tvshow/popular">Popular </a>
            <a href="/tvshow/airingtoday">Airing today</a>
            <a href="/tvshow/toprated">Top rated </a>
            <a href="/tvshow/ontv">On TV </a>
          </div>
        </div>
      </div> */}

      <nav className="navbar">
        <a href="/" className="nav-link">
          TMDB
        </a>

        <button className="dropdown">
          <p className="nav-link dropbtn">Movies</p>

          <ul className="dropdown-content">
            <li>
              <a href="/movies/popular">Popular </a>
            </li>
            <li>
              <a href="/movies/top_rated">Top-rated </a>
            </li>
            <li>
              <a href="/movies/upcoming">Upcoming </a>
            </li>
          </ul>
        </button>

        <button className="dropdown">
          <p className="nav-link dropbtn"> Tv Shows</p>

          <ul className="dropdown-content">
            <li>
              <a href="/tvshow/popular">Popular </a>
            </li>
            <li>
              <a href="/tvshow/airingtoday">Airing Today </a>
            </li>
            <li>
              <a href="/tvshow/toprated">Top Rated </a>
            </li>
            <li>
              <a href="/tvshow/ontv">On TV </a>
            </li>
          </ul>
        </button>
      </nav>

      {/* PRUEBASSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}

      <div className="searchmovies">
        <div onClick={toggleSearchBar}>
          <FontAwesomeIcon
            icon={faSearch}
            className="iconobusqueda"
            size="6x"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="inputsearch-invisible"
          id="formsearch"
        >
          <input
            type="text"
            placeholder="Search what you want.."
            onChange={handleChange}
            value={inputvalue}
          />
          <input type="submit" value={"Search"} />
          <div className="container-busqueda-resultados">
            {submited === true ? (
              <div className="">
                {
                  <>
                    <ul className="resultados-busqueda">
                      {movies.results.map((mov, i) =>
                        mov.original_title ? (
                          <li className="single-result-search" key={i}>
                            <a href={`/movies/singlemovie/${mov.id}`}>
                              {mov.original_title}
                            </a>
                          </li>
                        ) : (
                          ""
                        )
                      )}
                    </ul>
                  </>
                }
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>

      <div className="login-logout-container">
        {sessUser?.id ? (
          <>
            <button onClick={handleLogout} className="login-logout-btn">
              Log out
            </button>

            <Link to={"/user-profile"}>
              <p>{sessUser.name}'s profile</p>
            </Link>
          </>
        ) : (
          <Link to={"/user/login"}>
            <button className="login-logout-btn">Login</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
