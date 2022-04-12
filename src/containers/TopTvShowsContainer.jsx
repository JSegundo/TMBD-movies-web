import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CardSingleTvshow from "../components/CardSingleTvshow"
import { motion } from "framer-motion"

const TopTvShowsContainer = () => {
  const [tvshows, setTvshows] = useState({})
  const { options } = useParams()

  useEffect(() => {
    axios.get(`/tvshow/${options}`).then((obj) => {
      console.log(obj)
      setTvshows(obj.data.results)
    })
  }, [options])

  return (
    <motion.div
      className="container-movies"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <CardSingleTvshow tvshows={tvshows} />
    </motion.div>
  )
}

export default TopTvShowsContainer
