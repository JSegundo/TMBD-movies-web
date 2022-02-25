import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardSingleTvshow from "../components/CardSingleTvshow";

const TopTvShowsContainer = () => {
  console.log("hola");
  const [tvshows, setTvshows] = useState({});
  const { options } = useParams();
  console.log(options);
  useEffect(() => {
    axios.get(`/tvshow/${options}`).then((obj) => {
      console.log(obj);
      setTvshows(obj.data.results);
    });
  }, [options]);

  return (
    <div className="container-movies">
      <CardSingleTvshow tvshows={tvshows} />
    </div>
  );
};

export default TopTvShowsContainer;
