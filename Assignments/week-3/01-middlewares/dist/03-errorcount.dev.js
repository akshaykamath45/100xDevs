"use strict";

var request = require("supertest");

var assert = require("assert");

var express = require("express");

var app = express();
var errorCount = 0; // You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

app.get("/user", function (req, res) {
  try {
    throw new Error("User not found");
    res.status(200).json({
      name: "john"
    });
  } catch (error) {
    errorCount += 1;
    res.status(404).json({
      msg: "Error occured"
    });
    console.log(errorCount);
  }
});
app.post("/user", function (req, res) {
  res.status(200).json({
    msg: "created dummy user"
  });
});
app.get("/errorCount", function (req, res) {
  res.status(200).json({
    errorCount: errorCount
  });
});
var PORT = 3000;
app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});
module.exports = app;