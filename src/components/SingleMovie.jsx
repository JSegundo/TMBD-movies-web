import React from "react";

const SingleMovie = ({ movies }) => {
  console.log(movies);
  if (!movies[0]) return <p>Loading data...</p>;

  return (
    <>
      {movies.map((movie) => {
        return (
          <div className="cardMovie" key={movie.id}>
            <h1>{movie.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
              alt="movie"
            />
            {/* <p>{movie.overview}</p> */}
            <p>{movie.vote_average}</p>
          </div>
        );
      })}
    </>
  );
};

export default SingleMovie;
