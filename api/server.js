// Configuración del server
const express = require("express");
const app = express();
// const helmet = require("helmet");
const db = require("./db");
const User = require("../api/models/User");
const routes = require("./routes");

const cors = require("cors");
const session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");

// app.use(helmet());
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
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            // email not found
            return done(null, false);
          }

          user.hasher(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // wrong password
            }

            return done(null, user); // success :D
          });
        })
        .catch(done); // done(err)
    }
  )
);

// How we save the user
passport.serializeUser(function (user, done) {
  console.log("serializeUser ejecutado");
  done(null, user.id);
});

// How we look for the user
passport.deserializeUser(function (id, done) {
  console.log("DEserializeUser ejecutado");
  User.findByPk(id)
    .then((user) => done(null, user))
    .catch((err) => console.error(err));
});

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
