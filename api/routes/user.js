const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ where: { email } });
  if (user) {
    return res.redirect("/user/register");
  } else {
    User.create({ name, email, password })
      .then((user) => {
        res.status(201).send(user);
      })
      .catch((err) => console.error(err));
  }
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("cookies", req.cookies);
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  // res.clearCookie("cookiename");
  res.sendStatus(200);
});

router.post("/favs/:userid", (req, res) => {
  User.findByPk(req.params.userid)
    .then((user) => {
      let arr = user.favoriteMovies;
      arr.push(req.body.movie.id);
      return arr;
    })
    .then((data) =>
      User.update(
        { favoriteMovies: data },
        { returning: true, where: { id: req.params.userid } }
      )
    )
    .then(([rowsUpdate, [updatedUser]]) => res.send(updatedUser));
});

module.exports = router;
