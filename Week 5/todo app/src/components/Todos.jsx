import React, { useEffect } from "react";

const Todos = ({ todos, setTodos }) => {
  const updateTodo = (todo) => {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({
        id: todo._id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(async (res) => {
      const json = await res.json();
      alert("Updated todo");
      setTodos(json.todos);
    });
  };
  useEffect(() => {
    updateTodo;
  }, [todos]);
  return (
    <div>
      <h1>List of Todos</h1>
      <div>
        {todos.map((todo) => (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => updateTodo(todo)}>
              {todo.isCompleted ? "Mark as incomplete" : "Mark as complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
