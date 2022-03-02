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
        setUser(res.data);
        navigate("/user-profile");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <section>
          <label htmlFor="email">email</label>
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
        </section>
        <section>
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
        </section>
        <button type="submit">Sign in</button>
        <Link to={"/user/register"}>
          <p>Create an account.</p>
        </Link>
      </form>
    </>
  );
};

export default Login;
