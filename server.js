const express = require("express");
const app = express();
const port = 3000;
const coffees = require("./coffees.json");
const shops = require("./shops.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/coffees", async (req, res) => {
  res.send(coffees);
});

app.get("/coffees/hot", async (req, res) => {
  res.send(coffees.hotCoffees);
});

app.get("/coffees/iced", async (req, res) => {
  res.send(coffees.icedCoffees);
});

app.get("/shops", async (req, res) => {
  res.send(shops);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
