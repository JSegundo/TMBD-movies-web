import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const Register = () => {
  const [name, setName] = useState({})
  const [email, setEmail] = useState({})
  const [password, setPassword] = useState({})

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("/user/register", { name, email, password })
      .then(() => {
        navigate("/user/login")
        console.log("User Created!!")
      })
      .catch((err) => console.error(err))
  }

  const handleChange = (e) => {
    if (e.target.name === "name") setName(e.target.value)
    if (e.target.name === "email") setEmail(e.target.value)
    if (e.target.name === "password") setPassword(e.target.value)
  }

  return (
    <motion.div
      className="containerLoginForm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type={"text"}
            name={"name"}
            placeholder={"name.."}
            required
            onChange={handleChange}
            value={name.value}
          />
        </div>
        <div>
          <label htmlFor="mail">Email</label>
          <input
            id="mail"
            type={"text"}
            name={"email"}
            placeholder={"email.."}
            required
            onChange={handleChange}
            value={email.value}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type={"password"}
            name={"password"}
            placeholder={"password.."}
            required
            onChange={handleChange}
            value={password.value}
          />
        </div>

        <button className="registerbtn" type="submit">
          Register
        </button>
      </form>
    </motion.div>
  )
}

export default Register
