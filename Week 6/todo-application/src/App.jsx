import { useState } from "react";
import "./App.css";

function App() {
  const initialTodos = [
    {
      title: "learn DSA",
      description: "solve 5 problems",
    },
    {
      title: "go to gym",
      description: "workout",
    },
    { title: "build projects", description: "watch harkirat session" },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addTodo = () => {
    const updateTodo = [...todos, { title, description }];
    setTodos(updateTodo);
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <input
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>
      <input
        placeholder="Enter Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></input>

      <button onClick={addTodo}>Add Todo</button>
      <h1> Todo application</h1>
      <div>
        {todos.map((todo, id) => {
          return (
            <div key={id}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
