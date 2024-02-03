"use strict";

var express = require("express");

var jwt = require("jsonwebtoken"); // this is jwtSecret key


var jwtPassword = "shhhhh";
var app = express();
app.use(express.json());
app.get("/", function (req, res) {
  res.send("Authentication Working");
});
var ALL_USERS = [{
  username: "harkirat@gmail.com",
  password: "123",
  name: "harkirat singh"
}, {
  username: "raman@gmail.com",
  password: "123321",
  name: "Raman singh"
}, {
  username: "priya@gmail.com",
  password: "123321",
  name: "Priya kumari"
}];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  return !!ALL_USERS.find(function (user) {
    return user.username === username && user.password === password;
  }); // return ALL_USERS.some((user)=>user.username===username && user.password===password)
}

console.log(userExists("harkirat@gmail.com", "123"));
app.post("/signin", function _callee(req, res) {
  var username, password, token;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(req.body.username);

        case 3:
          username = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(req.body.password);

        case 6:
          password = _context.sent;

          if (userExists(username, password)) {
            _context.next = 11;
            break;
          }

          console.log(username);
          console.log(password);
          return _context.abrupt("return", res.status(403).json({
            msg: "User doesnt exist in our in memory db"
          }));

        case 11:
          token = jwt.sign({
            username: username
          }, "shhhhh");
          return _context.abrupt("return", res.json({
            message: "User Signed In",
            username: username,
            token: token
          }));

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: "Internal Server Error"
          });
          console.log(_context.t0);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
});
app.get("/users", function (req, res) {
  var token = req.headers.authorization;

  try {
    var decoded = jwt.verify(token, "shhhhh");
    var username = decoded.username;
    console.log(username);
    var otherUsernames = ALL_USERS.filter(function (user) {
      return user.username !== username;
    });
    res.json({
      message: "Decoded successfully",
      username: username,
      otherUsers: otherUsernames
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      msg: "Invalid token"
    });
  }
});
var PORT = 3000;
app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});