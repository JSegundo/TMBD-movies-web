import React from "react";
// import React, { useContext, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
// import axios from "axios";

import TopMoviesContainer from "../containers/TopMoviesContainer";
import TopTvShowsContainer from "../containers/TopTvShowsContainer";
import SingleMovieDetailsContainer from "../containers/SingleMovieDetailsContainer";
import SingleTvshowDetailsContainer from "../containers/SingleTvshowDetailsContainer";

import Navbar from "../layouts/Navbar";
import Home from "../layouts/HeroHome";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import UserProfile from "../layouts/UserProfile";

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
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
