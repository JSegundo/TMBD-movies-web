import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardSingleMovie from "../components/CardSingleMovie";

const TopMoviesContainer = () => {
  const [movies, setMovies] = useState({});
  const { filterby } = useParams();

  useEffect(() => {
    axios.get(`/movies/${filterby}`).then((obj) => {
      setMovies(obj.data.results);
    });
  }, [filterby]);

  return (
    <div className="container-movies">
      <CardSingleMovie movies={movies} />
    </div>
  );
};

export default TopMoviesContainer;
