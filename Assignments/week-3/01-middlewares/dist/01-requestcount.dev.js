"use strict";

var request = require("supertest");

var assert = require("assert");

var express = require("express");

var app = express();
var requestCount = 0; // You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

var countMiddleware = function countMiddleware(req, res, next) {
  requestCount += 1;
  console.log("Request : ", requestCount);
  next();
};

app.use(countMiddleware);
app.get("/user", function (req, res) {
  res.status(200).json({
    name: "john"
  });
});
app.post("/user", function (req, res) {
  res.status(200).json({
    msg: "created dummy user"
  });
});
app.get("/requestCount", function (req, res) {
  res.status(200).json({
    requestCount: requestCount
  });
});
var PORT = 3000;
app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});
module.exports = app;