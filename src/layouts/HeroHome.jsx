import React, { useState, useEffect } from "react"
import CardSingleMovie from "../components/CardSingleMovie"
import { motion } from "framer-motion"
const axios = require("axios")

const Home = () => {
  const [popular, setPopular] = useState({})
  const [top_rated, setTopRated] = useState({})
  const [upcoming, setUpcoming] = useState({})

  useEffect(() => {
    axios
      .get(`movies/popular`)
      .then((response) => {
        setPopular(response.data.results)
      })
      .catch((err) => console.error(err))
    axios
      .get(`/movies/top_rated`)
      .then((response) => {
        setTopRated(response.data.results)
      })
      .catch((err) => console.error(err))
    axios
      .get(`/movies/upcoming`)
      .then((response) => {
        setUpcoming(response.data.results)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <motion.div
      className="home-content-container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="herohome">
        <h1>TMBD</h1>
      </div>
      <main>
        <h2>Popular</h2>
        <div className="moviesContainer">
          <div className="carrouselMovies">
            <CardSingleMovie movies={popular} />
          </div>
          <h2>Top Rated</h2>
          <div className="carrouselMovies">
            <CardSingleMovie movies={top_rated} />
          </div>
          <h2>Upcoming</h2>
          <div className="carrouselMovies">
            <CardSingleMovie movies={upcoming} />
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default Home
