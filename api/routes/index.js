const express = require("express");
const router = express.Router();

const moviesRouter = require("./movies");

// router.use("/movies", moviesRouter);
router.use("/", moviesRouter);

module.exports = router;
