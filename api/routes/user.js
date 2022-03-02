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
  console.log("rqe.session login", req.session);
  res.send(req.user);
});

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  // req.logOut();
  // req.session.destroy();
  res.clearCookie("cookiename");
  res.sendStatus(200);
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});
module.exports = router;
