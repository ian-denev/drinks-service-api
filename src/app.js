const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Welcome to the Drinks API!"));

module.exports = app;
