import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CardSingleMovie from "../components/CardSingleMovie"
import { motion } from "framer-motion"

const TopMoviesContainer = () => {
  const [movies, setMovies] = useState({})
  const { filterby } = useParams()

  useEffect(() => {
    axios.get(`/movies/${filterby}`).then((obj) => {
      setMovies(obj.data.results)
    })
  }, [filterby])

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      className="container-movies"
    >
      <CardSingleMovie movies={movies} />
    </motion.div>
  )
}

export default TopMoviesContainer
