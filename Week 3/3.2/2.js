const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Authentication Working");
});

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  return !!ALL_USERS.find(
    (user) => user.username === username && user.password === password
  );
  // return ALL_USERS.some((user)=>user.username===username && user.password===password)
}

console.log(userExists("harkirat@gmail.com", "123"));

app.post("/signin", async (req, res) => {
  try {
    const username = await req.body.username;
    const password = await req.body.password;
    if (!userExists(username, password)) {
      console.log(username);
      console.log(password);
      return res.status(403).json({
        msg: "User doesnt exist in our in memory db",
      });
    }
    var token = jwt.sign({ username: username }, "shhhhh");
    return res.json({
      message: "User Signed In",
      username: username,
      token,
    });
  } catch (e) {
    res.status(500).json({
      message: "Internal Server Error",
    });
    console.log(e);
  }
});

app.get("/users", (req, res) => {});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
