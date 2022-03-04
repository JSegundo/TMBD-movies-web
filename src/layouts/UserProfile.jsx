import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const UserProfile = () => {
  let sessUser = JSON.parse(localStorage.getItem("sess-user"));

  // const deleteAllFavorites = () => {
  //   delete sessUser.favoriteMovies;
  // };

  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    getFavMovies();
  }, []);

  const getFavMovies = async () => {
    let results = await Promise.all(
      sessUser.favoriteMovies.map((movieid) => {
        return axios.get(`/movies/singlemovie/${movieid}`).then((obj) => {
          console.log(obj.data);
          return obj.data;
        });
      })
    );
    setFavMovies(results);
  };

  const navigate = useNavigate();
  return (
    <div className="user-profile-container">
      {sessUser?.id ? (
        <>
          <header className="user-header">
            <div className="text-container">
              <h1>Welcome, {sessUser.name}</h1>
              <p>You've logged in succesfully</p>
              <p>Member since {sessUser.createdAt.split("T")[0]}</p>
            </div>
          </header>
          <div className="favorite-movies">
            <div className="favorites-title">
              <h2>Your favorite movies:</h2>
              {/* <div onClick={deleteAllFavorites}>
                <FontAwesomeIcon
                  icon={faTrash}
                  inverse
                  className=""
                  size="2x"
                />
              </div> */}
            </div>
            <ul className="favs-container">
              {favMovies?.map((movie, i) => {
                return (
                  <div key={i} className="div-container">
                    {/* <FontAwesomeIcon icon={faTrashCan} inverse size="1x" /> */}
                    <h3>{movie.title}</h3>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                      alt="movie favorite"
                      height="350px"
                    ></img>
                  </div>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <div>
          <h1>You have to log your account. </h1>
          <button onClick={() => navigate("/user/login")}>
            Go to Login page
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
