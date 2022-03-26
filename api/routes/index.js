const express = require("express");
const router = express.Router();

const moviesRouter = require("./movies");
const usersRouter = require("./user");
const tvshowsRouter = require("./tvshows");
const authRoutes = require("./auth");

router.use("/tvshow", tvshowsRouter);
router.use("/movies", moviesRouter);
router.use("/user", usersRouter);
router.use("/auth", authRoutes);

module.exports = router;
