import React, { useContext } from "react";
import { UserContext } from "../index";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      {user.id ? (
        <div>
          <h1>Welcome, {user.name}</h1>
          <p>You've logged in succesfully</p>
        </div>
      ) : (
        <div>
          <h1>You have to log your account. </h1>
          <button onClick={() => navigate("/user/login")}>
            Go to Login page
          </button>
        </div>
      )}
    </>
  );
};

export default UserProfile;
