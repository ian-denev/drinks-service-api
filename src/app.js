const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to the Drinks API!"));
app.get("/coffeelover", (req, res) => res.send("I like coffee!"));
app.get('/coffee', (req, res) => res.json({
    drinkType: 'Coffee',
    name: 'Latte',
}));

module.exports = app;
