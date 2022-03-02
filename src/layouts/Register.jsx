import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/user/register", { name, email, password })
      .then(() => {
        navigate("/user/login");
        console.log("User Created!!");
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  return (
    <>
      <h2>Create an account for free.</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type={"text"}
            name={"name"}
            placeholder={"name.."}
            required
            onChange={handleChange}
            value={name.value}
          />
        </label>

        <label>
          Email
          <input
            type={"text"}
            name={"email"}
            placeholder={"email.."}
            required
            onChange={handleChange}
            value={email.value}
          />
        </label>

        <label>
          Password
          <input
            type={"password"}
            name={"password"}
            placeholder={"password.."}
            required
            onChange={handleChange}
            value={password.value}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
