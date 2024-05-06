"use strict";

var express = require("express");

var app = express();
app.use(express.json());
var PORT = 3000 || process.env.PORT;
app.get("/", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.send("Backend server working!");

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.listen(PORT, function () {
  console.log("Server listening on PORT ".concat(PORT));
});