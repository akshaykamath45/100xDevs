const request = require("supertest");
const assert = require("assert");
const express = require("express");
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
const rateLimitter = (req, res, next) => {
  const userId = req.headers["user-id"];
  if (!userId) {
    res.status(404).json({ msg: "User not found" });
  }
  numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] || 0;
  numberOfRequestsForUser[userId] += 1;
  console.log(numberOfRequestsForUser[userId]);
  if (numberOfRequestsForUser[userId] > 5) {
    return res.status(404).json({ msg: "Excedded number of requests (5)" });
  }
  next();
};

app.use(rateLimitter);

setInterval(() => {
  numberOfRequestsForUser = {};
}, 5000);

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

let PORT = 3000;
app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
