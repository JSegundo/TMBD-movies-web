import React from "react";
import { Link } from "react-router-dom";

const CardSingleTvshow = ({ tvshows }) => {
  if (!tvshows[0]) return <p>Loading data...</p>;

  return (
    <>
      {tvshows.map((show) => {
        return show.backdrop_path ? (
          <Link to={`/tvshow/tv/${show.id}`}>
            <div className="cardMovie" key={show.id}>
              <h1 className="movie-title">{show.name}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w300/${show.poster_path}`}
                alt="tvshow"
              />
              {/* <p>{movie.overview}</p> */}
              <p>{show.vote_average}</p>
            </div>
          </Link>
        ) : null;
      })}
    </>
  );
};

export default CardSingleTvshow;
