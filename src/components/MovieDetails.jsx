import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const MovieDetails = ({ movie }) => {
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("sess-user"));
    let corazonsito = document.getElementById("corazon-icon");
    console.log(corazonsito);
    if (user.favoriteMovies.includes(movie)) {
      corazonsito.classList.add("favoriteIcon-fav");
    } else {
      corazonsito.classList.remove("favoriteIcon-fav");
    }
  }, []);

  // if (!movie) return <p>Loading data...</p>;

  let sessUser = JSON.parse(localStorage.getItem("sess-user"));
  console.log(sessUser);

  const addToFavorite = () => {
    axios
      .post(`/user/favs/${sessUser.id}`, { movie })
      .then((res) => res.data)
      .then((obj) => {
        localStorage.setItem("sess-user", JSON.stringify(obj));
      })
      .catch((err) => console.error(err));
  };

  // };

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
