import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useUser } from "../context/UserContext.js";

const MovieDetails = ({ movie }) => {
  // useEffect(() => {
  //   let user = JSON.parse(localStorage.getItem("sess-user"));
  //   let corazonsito = document.getElementById("corazon-icon");
  //   // console.log(corazonsito);
  //   if (!user.favoriteMovies) return;
  //   if (user.favoriteMovies.includes(movie)) {
  //     corazonsito.classList.add("favoriteIcon-fav");
  //   } else {
  //     corazonsito.classList.remove("favoriteIcon-fav");
  //   }
  // }, []);

  // let sessUser = JSON.parse(localStorage.getItem("sess-user"));
  // console.log(sessUser);
  const { user, setUser } = useUser();
  console.log(user);
  const token = sessionStorage.getItem("token");
  let sessUser = user;

  const navigate = useNavigate();

  const authAxios = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const addToFavorite = () => {
    if (!sessUser) {
      navigate("/user/login");
      return;
    }
    authAxios
      .post(`/user/favs/${sessUser.id}`, { movie })
      .then((res) => res.data)
      .then((obj) => {
        setUser(obj);
        localStorage.setItem("sess-user", JSON.stringify(obj));
      })
      .catch((err) => console.error(err));
  };

  if (!movie) return <p>Movie does not exist...</p>;

  return (
    <>
      <div className="movieDetailsPage">
        <div className="singlemovieposter">
          {/* <img
          src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
          className="fondo-movie-card"
        /> */}
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="header-poster">
          <div className="title&desc">
            <h1>
              {movie.title}{" "}
              <span className="releaseDate">({movie.release_date})</span>
            </h1>

            <span className="genres">
              {movie.genres ? (
                movie.genres.map((genre, i) => {
                  return <div key={i}>{genre.name}</div>;
                })
              ) : (
                <p>Loading</p>
              )}
            </span>
          </div>

          <div className="actions" onClick={addToFavorite}>
            <FontAwesomeIcon
              icon={faHeart}
              inverse
              className="favoriteIcon"
              size="2x"
              id="corazon-icon"
            />
            {/* <a href="/#">add to favotires</a> */}
          </div>

          <div className="header-info">
            <h3 className="tagline">"{movie.tagline}"</h3>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
        </div>

        <div className="people"></div>
      </div>
    </>
  );
};

export default MovieDetails;
