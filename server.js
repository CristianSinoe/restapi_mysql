const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡BIENVENIDO A TU API!");
});

module.exports = app;
