// Configuración del server
const express = require("express");
const app = express();
const db = require("./db");
const User = require("../api/models/User");
const routes = require("./routes");

const cors = require("cors");
const session = require("express-session");

const cookieParser = require("cookie-parser");
require("./passport.config.js");
const auth = require("./routes/auth");
app.use("/auth", auth);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser()); // popula req.cookies
app.use(
  session({
    name: "cookiename",
    secret: "ultradinamico",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2,
      secure: true,
    },
  })
);

//
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
