// import React from "react";
import Navbar from "../layouts/Navbar";
import { Route, Routes } from "react-router-dom";
import TopMoviesContainer from "../containers/TopMoviesContainer";
import TopTvShowsContainer from "../containers/TopTvShowsContainer";
import SingleMovieDetailsContainer from "../containers/SingleMovieDetailsContainer";
import SingleTvshowDetailsContainer from "../containers/SingleTvshowDetailsContainer";
import Home from "../layouts/HeroHome";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshow/:options" element={<TopTvShowsContainer />} />
        <Route path="/movies/:filterby" element={<TopMoviesContainer />} />
        <Route
          path="/movies/singlemovie/:movieid"
          element={<SingleMovieDetailsContainer />}
        />
        <Route
          path="/tvshow/tv/:showid"
          element={<SingleTvshowDetailsContainer />}
        />
      </Routes>
    </>
  );
};

export default App;
