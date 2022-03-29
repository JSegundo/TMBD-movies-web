require("dotenv").config;
const express = require("express");
const app = express();
const db = require("./db");
const routes = require("./routes");
const cors = require("cors");

console.log(process.env.ACCESS_TOKEN_SECRET);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use("/", routes);

app.get("/", (req, res) => {
  console.log(req.session.id);
  res.send("hola!!!!!!!!!! RUTA PRINCIPAL del backend.");
});

const PORT = process.env.PORT || 3001;
db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON https://localhost:${PORT}`);
  });
});
