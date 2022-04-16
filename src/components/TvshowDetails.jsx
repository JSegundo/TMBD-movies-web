import React from "react"
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const TvShowDetails = ({ show }) => {
  const navigate = useNavigate()
  if (!show) return <p>Loading data...</p>
  let sessUser = JSON.parse(localStorage.getItem("sess-user"))

  // const addToFavorite = () => {
  //   if (!sessUser) {
  //     navigate("/user/login")
  //     return
  //   }
  //   axios
  //     .post(`/user/favs/${sessUser.id}`, { show })
  //     .then((res) => res.data)
  //     .then((obj) => {
  //       localStorage.setItem("sess-user", JSON.stringify(obj))
  //     })
  //     .catch((err) => console.error(err))
  // }
  return (
    <>
      <motion.div
        className="singlemovieposter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300/${show.poster_path}`}
          alt="poster"
        />
        <div style={{ marginTop: 20 }}>
          <p> {show.number_of_seasons} Seasons.</p>
          <p> {show.number_of_episodes} Episodes.</p>
        </div>
      </motion.div>
      <div className="header-poster">
        <div className="title&desc">
          <h1>
            {show.name}{" "}
            <span className="releaseDate">({show.first_air_date})</span>
          </h1>
          <div className="facts">
            <span className="genres">
              {show.genres ? (
                show.genres.map((genre, i) => {
                  return <div key={i}>{genre.name} </div>
                })
              ) : (
                <p>Loading</p>
              )}
            </span>
          </div>
        </div>

        <div className="header-info">
          <h3 className="tagline">{show.tagline}</h3>
          <h2 style={{ color: "white" }}>Overview</h2>
          {show.overview ? (
            <p
              style={{
                backgroundColor: "#070a1b",
                padding: 12,
                borderRadius: 6,
              }}
            >
              {show.overview}
            </p>
          ) : (
            <p
              style={{
                backgroundColor: "#070a1b",
                padding: 12,
                borderRadius: 6,
              }}
            >
              overview not available
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default TvShowDetails
