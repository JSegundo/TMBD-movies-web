import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import TopMoviesContainer from "../containers/TopMoviesContainer";
import TopTvShowsContainer from "../containers/TopTvShowsContainer";
import SingleMovieDetailsContainer from "../containers/SingleMovieDetailsContainer";
import SingleTvshowDetailsContainer from "../containers/SingleTvshowDetailsContainer";

import Navbar from "../layouts/Navbar";
import Home from "../layouts/HeroHome";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import UserProfile from "../layouts/UserProfile";

import { UserContext } from "../index";

const App = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("/user/me")
      .then((res) => res.data)
      .then((user) => {
        console.log("se encontró el usuario", user);
        setUser(user);
      })
      .catch((err) => console.error(err));
  }, []);

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
