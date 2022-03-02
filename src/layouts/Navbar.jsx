import React, { useContext, useState } from "react";
import { UserContext } from "../index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import FoundMovies from "./FoundMovies";

const API = "https://api.themoviedb.org/3";
const apiKEY = "api_key=e9e7cb266dc0d3f00bd94a93dae48419";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post("/user/logout")
      .then(() => {
        setUser({});
        console.log("Logged out!");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  // todavia no tiene uso.
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
        `${API}/search/multi?${apiKEY}&language=en-US&query=${inputvalue}&page=1&include_adult=false`
      )
      .then((resp) => resp.data)
      .then((response) => {
        setMovies(response);
        setSubmited(true);
      })
      .catch((err) => console.error(err));
  };
  // console.log("moviessss", movies);
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search what you want.."
            onChange={handleChange}
            value={inputvalue}
          />
          <input
            type="submit"
            value={"Search"}
            // onClick={() => <FoundMovies />}
          />
          <div className="container-busqueda-resultados">
            {submited === true ? (
              <div className="">
                {
                  <>
                    <div>Results of your search</div>
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

      <div>
        {user.id ? (
          <>
            <p onClick={handleLogout}>Log out</p>

            <Link to={"/user-profile"}>
              <p>{user.name}'s profile</p>
            </Link>
          </>
        ) : (
          <Link to={"/user/login"}>
            <p>Login</p>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
