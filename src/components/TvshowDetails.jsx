import React from "react"
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { motion } from "framer-motion"

const TvShowDetails = ({ show }) => {
  console.log(show)
  if (!show) return <p>Loading data...</p>
  let sessUser = JSON.parse(localStorage.getItem("sess-user"))

  const addToFavorite = () => {
    axios
      .post(`/user/favs/${sessUser.id}`, { show })
      .then((res) => res.data)
      .then((obj) => {
        localStorage.setItem("sess-user", JSON.stringify(obj))
      })
      .catch((err) => console.error(err))
  }
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
        <div>
          <p>Seasons: {show.number_of_seasons}</p>
          <p>Episodes: {show.number_of_episodes}</p>
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
                  return (
                    <a href="/#" key={i}>
                      {genre.name},
                    </a>
                  )
                })
              ) : (
                <p>Loading</p>
              )}
            </span>
          </div>
        </div>

        <div className="actions">
          <FontAwesomeIcon
            icon={faHeart}
            inverse
            className="favotireIcon"
            size="2x"
            onClick={addToFavorite}
          />
          <a href="/#">add to favotires</a>
        </div>

        <div></div>

        <div className="header-info">
          <h3 className="tagline">{show.tagline}</h3>
          <h2>Overview</h2>
          {show.overview ? (
            <p>{show.overview}</p>
          ) : (
            <p>overview not available</p>
          )}
        </div>
      </div>

      <div className="people">
        <p>
          Created by:{" "}
          {show.created_by
            ? show.created_by[0]
              ? show.created_by[0].name
              : ""
            : ""}
        </p>
      </div>
    </>
  )
}

export default TvShowDetails
