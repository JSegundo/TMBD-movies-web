import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  // const { user } = useContext(UserContext);

  let sessUser = JSON.parse(localStorage.getItem("sess-user"));

  const navigate = useNavigate();
  return (
    <div className="user-profile-container">
      {sessUser?.id ? (
        <>
          <header className="user-header">
            <h1>Welcome, {sessUser.name}</h1>
            <p>You've logged in succesfully</p>
            <p>Member since {sessUser.createdAt.split("T")[0]}</p>
          </header>
          <div>
            <h3>Your favorite movies:</h3>
            <ul>{/* {sessUser} */}</ul>
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
