// import React from "react";
import Navbar from "../layouts/Navbar";
import { Route, Routes } from "react-router-dom";
import PopularMoviesContainer from "../containers/PopularMoviesContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/popular"} element={<PopularMoviesContainer />} />
      </Routes>
    </>
  );
};

export default App;
