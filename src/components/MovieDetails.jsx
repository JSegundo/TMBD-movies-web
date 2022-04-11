import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { useUser } from "../context/UserContext.js"

const MovieDetails = ({ movie }) => {
  const { user, setUser } = useUser()
  console.log(user)
  const token = sessionStorage.getItem("token")
  let sessUser = user

  const [corazon, setCorazon] = useState(null)

  useEffect(() => {
    if (sessUser?.favoriteMovies.includes(JSON.stringify(movie.id))) {
      console.log("LA TIENE EN FAVORITO")
      setCorazon(
        <FontAwesomeIcon
          icon={faHeart}
          inverse
          className="favoriteIcon"
          size="2x"
          id="corazon-icon"
          color={"red"}
        />
      )
    } else {
      console.log("NO TA EN FAVO")
      setCorazon(
        <FontAwesomeIcon
          icon={faHeart}
          inverse
          className="favoriteIcon"
          size="2x"
          id="corazon-icon"
        />
      )
    }
  }, [sessUser, movie])

  const navigate = useNavigate()

  const authAxios = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  const addToFavorite = () => {
    if (!sessUser) {
      navigate("/user/login")
      return
    }
    authAxios
      .post(`/user/favs/${sessUser.id}`, { movie })
      .then((res) => res.data)
      .then((obj) => {
        setUser(obj)
        localStorage.setItem("sess-user", JSON.stringify(obj))
      })
      .catch((err) => console.error(err))
  }

  if (!movie) return <p>Movie does not exist...</p>

  return (
    <>
      <div className="movieDetailsPage">
        <div className="singlemovieposter">
          {/* <img
          src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
          className="fondo-movie-card"
        /> */}
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="header-poster">
          <div className="title&desc">
            <h1>
              {movie.title}{" "}
              <span className="releaseDate">({movie.release_date})</span>
            </h1>

            <span className="genres">
              {movie.genres ? (
                movie.genres.map((genre, i) => {
                  return <div key={i}>{genre.name}</div>
                })
              ) : (
                <p>Loading</p>
              )}
            </span>
          </div>

          <div className="actions" onClick={addToFavorite}>
            {corazon}
            {/* {sessUser?.favoriteMovies.includes(movie.id) ? (
              <FontAwesomeIcon
                icon={faHeart}
                inverse
                className="favoriteIcon"
                size="2x"
                id="corazon-icon"
                color={"red"}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeart}
                inverse
                className="favoriteIcon"
                size="2x"
                id="corazon-icon"
              />
            )} */}

            {/* <a href="/#">add to favotires</a> */}
          </div>

          <div className="header-info">
            <h3 className="tagline">"{movie.tagline}"</h3>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
        </div>

        <div className="people"></div>
      </div>
    </>
  )
}

export default MovieDetails
