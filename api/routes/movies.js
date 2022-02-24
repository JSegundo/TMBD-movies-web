const axios = require("axios");
const express = require("express");
const router = express.Router();

//populares
router.get("/popular", (req, res) => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=e9e7cb266dc0d3f00bd94a93dae48419"
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.error(err));
});

router.get("/trending", (req, res) => {
  axios
    .get(
      "https://api.themoviedb.org/3/trending/all/week?api_key=e9e7cb266dc0d3f00bd94a93dae48419"
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.error(err));
});

module.exports = router;
