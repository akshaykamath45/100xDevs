const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
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
  const todo = await Todo.findOne({ _id: updateTodoBody.id });
  await Todo.updateOne(
    { _id: updateTodoBody.id },
    { isCompleted: !todo.isCompleted }
  );
  const updatedTodos = await Todo.find({});

  res.json({
    message: "Updated todo",
    todos: updatedTodos,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
