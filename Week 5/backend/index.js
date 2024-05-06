const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
app.use(express.json());
const PORT = 3000 || process.env.PORT;

app.get("/", async (req, res) => {
  res.send("Backend server working!");
});

app.post("/todo", async (req, res) => {
  const todoBody = req.body;
  const parsedBody = createTodo.safeParse(todoBody);
  if (!parsedBody.success) {
    res.status(411).json("You have send wrong inputs");
    return;
  }
  // add mongodb logic 
});

app.get("/todos", async (req, res) => {
  // directly add mongodb logic
});
app.put("/completed", async (req, res) => {
  const updateTodoBody = req.body;
  const parsedBody = updateTodo.safeParse(updateTodoBody);
  if (!parsedBody.success) {
    res.status(411).json("You have send wrong inputs");
    return;
  }
  // add mongodb logic
});
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
