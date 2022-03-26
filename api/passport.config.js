var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

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
