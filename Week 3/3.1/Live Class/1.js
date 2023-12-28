const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  // health checkups here
  // if they pass then you proceed
  res.send("You are healthy");
});