import axios from "axios";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../index";

const Login = () => {
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/user/login", { email, password })
      .then((res) => {
        localStorage.setItem("sess-user", JSON.stringify(res.data));
        setUser(res.data);
        navigate("/user-profile");
      })
      .catch((err) => {
        alert("Validation failed");
        navigate("/user/login");
        console.error(err);
      });
  };

  return (
    <div className="containerLoginForm">
      <form onSubmit={handleSubmit} method="post">
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            placeholder="email"
            required
            autoFocus
            onChange={handleChange}
            value={email.value}
          />
        </div>

        <div>
          <label htmlFor="current-password">Password</label>
          <input
            id="current-password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="password"
            required
            autoFocus
            onChange={handleChange}
            value={password.value}
          />
        </div>
        <button type="submit" className="loginbtn">
          Sign in
        </button>
        <Link to={"/user/register"}>
          <p className="registerbtn">Create an account.</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
