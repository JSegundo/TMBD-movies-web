import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

const SingleMovieDetailsContainer = () => {
  const [movie, setMovie] = React.useState({});
  const { movieid } = useParams();

  React.useEffect(() => {
    axios
      .get(`/movies/singlemovie/${movieid}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => console.error(err));
  }, [movieid]);

  return <MovieDetails movie={movie} />;
};

export default SingleMovieDetailsContainer;
