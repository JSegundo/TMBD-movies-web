import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useUser } from "../context/UserContext.js";

const Login = () => {
  const { setUser, setToken } = useUser();

  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setError(null);

    e.preventDefault();
    try {
      const result = await axios.post("/user/login", { email, password });
      localStorage.setItem("sess-user", JSON.stringify(result.data.user));
      sessionStorage.setItem("token", result.data.token);
      // setToken(result.data.token);
      setUser(result.data.user);
      navigate("/");
    } catch (err) {
      setError("Password is not correct");
    }
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
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
