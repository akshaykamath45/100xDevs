const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");

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
  const todo = await Todo.create({
    title: todoBody.title,
    description: todoBody.description,
    isCompleted: false,
  });
  res.json({
    message: "Todo created",
    todo: todo,
  });
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  res.json({
    message: "Todos fetched",
    todos: todos,
  });
});

app.put("/completed", async (req, res) => {
  const updateTodoBody = req.body;
  const parsedBody = updateTodo.safeParse(updateTodoBody);
  if (!parsedBody.success) {
    res.status(411).json("You have send wrong inputs");
    return;
  }
  await Todo.updateOne({ _id: updateTodoBody.id }, { isCompleted: true });
  const updatedTodo = await Todo.find({ _id: updateTodoBody.id });
  res.json({
    message: "Updated todo",
    todo: updatedTodo,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
