const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const jwt = require("jsonwebtoken");
const { findOne } = require("../models/User");

// ExtractJwt to help extract the token
let ExtractJwt = passportJWT.ExtractJwt;

// JwtStrategy which is the strategy for the authentication
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "wowwow";

// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  console.log("payload received", jwt_payload);
  let user = User.findOne({ where: { id: jwt_payload.id } });
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
// use the strategy
passport.use(strategy);
app.use(passport.initialize());

app.post("/login", async function (req, res, next) {
  const { name, password } = req.body;
  if (name && password) {
    // we get the user with the name and save the resolved promise
    returned;
    let user = await User.findOne({ where: { name } });
    if (!user) {
      res.status(401).json({ msg: "No such user found", user });
    }
    if (user.password === password) {
      // from now on we’ll identify the user by the id and the id is
      // the only personalized value that goes into our token
      let payload = { id: user.id };
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({ msg: "ok", token: token });
    } else {
      res.status(401).json({ msg: "Password is incorrect" });
    }
  }
});
