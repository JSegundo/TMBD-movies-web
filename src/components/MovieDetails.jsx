import React from "react";
// import { Link } from "react-router-dom";

const MovieDetails = ({ movie }) => {
  console.log(movie);
  if (!movie) return <p>Loading data...</p>;

  return (
    <>
      <div className="singlemovieposter">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
          alt="poster"
        />
      </div>
      <div className="header-poster">
        <div className="title&desc">
          <h1>
            {movie.title}{" "}
            <span className="releaseDate">({movie.release_date})</span>
          </h1>
          <div className="facts">
            <span className="genres">
              {movie.genres ? (
                movie.genres.map((genre, i) => {
                  return (
                    <a href="/#" key={i}>
                      {genre.name},
                    </a>
                  );
                })
              ) : (
                <p>Loading</p>
              )}
            </span>
          </div>
        </div>

        <div className="actions">
          <a href="/#">add to favotires</a>
        </div>

        <div className="header-info">
          <h3 className="tagline">{movie.tagline}</h3>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </div>
      </div>

      <div className="people"></div>
    </>
  );
};

export default MovieDetails;
