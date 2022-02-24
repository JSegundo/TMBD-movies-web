// Configuración del server
const express = require("express");
const app = express();
const db = require("./db");
const PORT = process.env.PORT || 3001;

const routes = require("./routes");

app.use(require("cors")());
app.use(express.json());

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("hola!!!!!!!!!! RUTA PRINCIPAL del backend.");
});

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON https://localhost:${PORT}`);
  });
});
