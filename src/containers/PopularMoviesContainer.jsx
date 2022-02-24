import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleMovie from "../components/SingleMovie";

const PopularMoviesContainer = () => {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    axios.get("/popular").then((obj) => {
      setMovies(obj.data.results);
    });
  }, []);

  return (
    <div>
      <SingleMovie movies={movies} />
    </div>
  );
};

export default PopularMoviesContainer;
