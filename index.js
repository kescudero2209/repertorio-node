const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

app.listen(3000, console.log("¡Servidor encendido!"));
app.use(cors());

app.use(express.json());

app.get("/songs", (req, res) => {
  const songs = JSON.parse(fs.readFileSync("songs.json"));
  res.json(songs);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});