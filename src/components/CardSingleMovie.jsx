import React from "react";
import { Link } from "react-router-dom";

const CardSingleMovie = ({ movies }) => {
  console.log(movies);
  if (!movies[0]) return <p>Loading data...</p>;

  return (
    <>
      {movies?.map((movie) => {
        return (
          <Link key={movie.id} to={`/movies/singlemovie/${movie.id}`}>
            <div className="cardMovie">
              <h1 className="movie-title">{movie.title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt="movie"
              />
              {/* <p>{movie.overview}</p> */}
              <p>{movie.vote_average}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default CardSingleMovie;
